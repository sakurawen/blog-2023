import Post from '@/components/Posts/Post';
import { format } from 'date-fns';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Commonts from '@/components/Comments';

export const generateStaticParams = async () => {
  const files = await fs.readdir('posts');
  const paths = files.map((i) => ({
    title: i.replace('.mdx', ''),
  }));
  return paths;
};

const getPostsWithTitle = async (title: string) => {
  try {
    const result = await fs.readFile(`posts/${title}.mdx`);
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
  params: { title },
}: {
	params: {
		title: string;
	};
}) => {
  const source = await getPostsWithTitle(title);
  return (
    <>
      <div className='mb-12'>
        <Link
          href={'/blog'}
          className='inline-flex justify-center px-1 py-0.5 rounded hover:bg-sky-600/10 hover:text-sky-800 text-black transition items-center '>
          <span className='text-lg font-bold'>Wen&apos; Blog</span>
        </Link>
      </div>
      <Post source={source} />
      <Commonts />
    </>
  );
};

export default Posts;
