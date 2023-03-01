import Commonts from '@/components/Comments';
import { format } from 'date-fns';
import fs from 'fs/promises';
import { compileMDX } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
    const { content, frontmatter } = await compileMDX<{
      title: string;
      date: number | Date;
      [key: string]: any;
    }>({
      source: result.toString(),
      options: {
        parseFrontmatter: true,
      },
    });
    frontmatter.fmtData = format(frontmatter.date, 'yyyy-MM-dd');
    return {
      content,
      frontmatter,
    };
  } catch (e){
    console.log(e)
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
  const { content, frontmatter } = await getPostsWithTitle(title);
  return (
    <>
      <div className='mb-12'>
        <Link
          href={'/blog'}
          className='inline-flex justify-center px-1 py-0.5 rounded hover:bg-sky-600/10 hover:text-sky-800 text-black transition items-center '>
          <span className='text-lg font-bold'>Wen&apos; Blog</span>
        </Link>
      </div>
      <article className='posts-theme'>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.fmtData}</p>
        {content}
      </article>
      <Commonts />
    </>
  );
};

export default Posts;
