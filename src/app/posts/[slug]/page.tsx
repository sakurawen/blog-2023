import Post from '@/components/Post';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { format } from 'date-fns';
import Link from 'next/link';

const getPostsWithPath = async (path: string) => {
	const result = await fs.readFile(path);
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
};


const Posts = async ({
	params: { slug },
}: {
	params: {
		slug: string;
	};
}) => {
  const path = `posts/${slug}.mdx`
	const source = await getPostsWithPath(path);
	return (
		<>
			<div className='mb-12'>
				<Link
					href={'/blog'}
					className='inline-flex justify-center px-1 py-0.5 rounded hover:bg-gray-100 text-black transition items-center '>
					<span className=''>博客</span>
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
