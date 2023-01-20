import fs from 'fs-extra';
import matter from 'gray-matter';
import path from 'path';
import { compareDesc, format } from 'date-fns';
import url from 'url';

const getDirName = () => path.dirname(url.fileURLToPath(import.meta.url));
const dirname = getDirName();
const filedir = path.resolve(dirname, 'posts');

const getPostsPaths = async () => {
	try {
		const files = await fs.readdir(filedir);
		const paths = files.map((i) => [i, path.join(filedir, i)]);
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
	fs.writeFileSync(path.join(dirname, 'src/data/data.json'), JSON.stringify(fmt), { encoding: 'utf-8' });
};

generate();
