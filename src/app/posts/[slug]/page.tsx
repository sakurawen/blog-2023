import Post from '@/components/Post';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => {
	const files = await fs.readdir('posts');
	const paths = files.map((i) => ({
		slug: i.replace('.mdx', ''),
	}));
	return paths;
};

const getPostsWithSlug = async (slug: string) => {
	try {
		const result = await fs.readFile(`posts/${slug}.mdx`);
		const { content, data } = matter(result);
		data.date = format(new Date(data.date), 'yyyy-MM-dd');
		const mdxSource = await serialize(content, {
			mdxOptions: {
				remarkPlugins: [],
				rehypePlugins: [],
			},
			scope: data,
		});
		return mdxSource;
	} catch {
		notFound();
	}
};

const Posts = async ({
	params: { slug },
}: {
	params: {
		slug: string;
	};
}) => {
	const source = await getPostsWithSlug(slug);
	return (
		<>
			<div className='mb-12'>
				<Link
					href={'/blog'}
					className='inline-flex justify-center px-1 py-0.5 rounded hover:bg-gray-100 text-black transition items-center '>
					<span className='text-lg font-bold'>Wen&apos; Blog</span>
				</Link>
			</div>
			<Post
				source={source}
				slug={slug}
			/>
		</>
	);
};

export default Posts;
