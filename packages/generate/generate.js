const { compareDesc, format } = require('date-fns');
const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');
const postsDir = path.resolve(process.cwd(), '../posts');

const getPostsPaths = async () => {
  try {
    const files = await fs.readdir(postsDir);
    const paths = files.map((postPath) => [postPath, path.join(postsDir, postPath)]);
    return paths;
  } catch (err) {
    throw err;
  }
};

const generate = async () => {
  const paths = await getPostsPaths();
  const result = [];
  paths.forEach(([filename, path]) => {
    const markdown = fs.readFileSync(path, 'utf-8');
    const meta = matter(markdown);
    meta.data.fmtDate = format(meta.data.date, 'yyyy-MM-dd');
    meta.data.key = filename.replace('.mdx', '');
    result.push(meta.data);
  });
  const sortResult = result.sort((a, b) => compareDesc(a.date, b.date));
  const fmt = {
    list: sortResult,
  };
  fs.writeFileSync(path.join(__dirname, '/data/data.json'), JSON.stringify(fmt), { encoding: 'utf-8' });
};

generate();

console.log('generate posts data:', process.env.NODE_ENV);

const isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  let timer = null;
  fs.watch(postsDir, {}, () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('posts dir change!');
      generate();
    }, 50);
  });
}
