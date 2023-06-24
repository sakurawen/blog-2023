import Comments from '@/app/components/Comments';
import { format } from 'date-fns';
import fs from 'fs/promises';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import path from 'path';
import data from '@packages/content';
import Code from '@/app/components/MDXComponents/Code';

export async function generateStaticParams() {
  const paths = Object.values(data.map).map((title) => ({
    title,
  }));
  return paths;
}

async function getPostsWithKey(key: string) {
  try {
    const { year, key: postKey } = data.map[key];
    const result = await fs.readFile(path.resolve(process.cwd(), `../posts/${year}/${postKey}.md`));
    const { content, frontmatter } = await compileMDX<{
      title: string;
      date: number | Date;
      [key: string]: any;
    }>({
      source: result.toString(),
      components: {
        code: Code,
      },
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
}

export default async function Posts({
  params: { key },
}: {
  params: {
    key: string;
  };
}) {
  const { content, frontmatter } = await getPostsWithKey(key);
  return (
    <div className="mt-8 pb-12">
      <div className="rounded-lg ">
        <article className="posts-theme px-2 xs:px-0">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.fmtData}</p>
          {content}
        </article>
      </div>
      <Comments />
    </div>
  );
}
