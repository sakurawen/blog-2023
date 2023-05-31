const { compareDesc, format } = require('date-fns');
const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');

const postsRootDir = path.resolve(process.cwd(), '../posts');

const getPostsDir = async (yearDir) => {
  try {
    const dirs = await fs.readdir(yearDir);
    const sortDirs = dirs.sort((a, b) => Number(b) - Number(a));
    return sortDirs.map((dirname) => ({
      year: dirname,
      list: [],
    }));
  } catch (err) {
    throw err;
  }
};

const postsMap = {};
const getPostsData = async (postsDir) => {
  try {
    const dirPath = path.resolve(postsRootDir, postsDir);
    const dirs = await fs.readdir(dirPath);
    const result = [];
    dirs.forEach((filename) => {
      const filePath = path.resolve(postsRootDir + '/' + postsDir, filename);
      const markdown = fs.readFileSync(filePath, 'utf-8');
      const meta = matter(markdown);
      const key = filename.replace('.md', '');
      meta.data.fmtDate = format(meta.data.date, 'yyyy-MM-dd');
      meta.data.key = key;
      result.push(meta.data);
      postsMap[key] = {
        year: postsDir,
        ...meta.data,
      };
    });
    return result.sort((a, b) => compareDesc(a.date, b.date));
  } catch (err) {
    throw err;
  }
};

const generate = async () => {
  const postsDirs = await getPostsDir(postsRootDir);
  for (let postsDir of postsDirs) {
    const postsData = await getPostsData(postsDir.year);
    postsDir.list = postsData;
  }
  const fmt = {
    list: postsDirs.filter((item) => item.list.length !== 0),
    map: postsMap,
  };
  fs.writeFile(path.join(__dirname, '/data.json'), JSON.stringify(fmt), { encoding: 'utf-8' });
};

generate();

console.log('generate content:', process.env.NODE_ENV);

const isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  let timer = null;

  const watcher = fs.watch(postsRootDir, {}, () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('posts dir change!');
      generate();
    }, 50);
  });

  process.on('SIGINT', () => {
    console.log('stop posts generate watcher');
    watcher.close();
    process.exit(0);
  });
}
