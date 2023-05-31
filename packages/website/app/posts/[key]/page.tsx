import Comments from '@/app/components/Comments';
import { format } from 'date-fns';
import fs from 'fs/promises';
import { ArrowBigLeft } from 'lucide-react';
import { Route } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import path from 'path';
import data from '@packages/content';

export const generateStaticParams = async () => {
  const paths = Object.values(data.map).map((title) => ({
    title,
  }));
  return paths;
};

const getPostsWithKey = async (key: string) => {
  try {
    const filePath = data.map[key].filePath;
    const result = await fs.readFile(path.resolve(process.cwd(), filePath));
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
  } catch (e) {
    console.log(e);
    notFound();
  }
};

const Posts = async ({
  params: { key },
}: {
  params: {
    key: string;
  };
}) => {
  const { content, frontmatter } = await getPostsWithKey(key);
  return (
    <div className="pb-12 mt-12">
      <div className="rounded-lg ">
        <article className="posts-theme">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.fmtData}</p>
          {content}
        </article>
      </div>
      <Comments />
    </div>
  );
};

export default Posts;
