import Comments from '@/app/(content)/posts/[key]/_components/Comments';
import Icon from '@/app/_components/Icon';
import Code from '@/app/_components/MDXComponents/Code';
import data from '@packages/content';
import { format } from 'date-fns';
import fs from 'fs/promises';
import { compileMDX } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import path from 'path';

export function generateMetadata({
  params: { key },
}: {
  params: {
    key: string;
  };
}) {
  const post = data.map[key];
  return {
    title: post?.title ? `${post?.title} —— Wen's Blog` : "Wen's Blog",
  };
}

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
    console.error('找不到文章内容：', e);
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
  const posts = await getPostsWithKey(key);
  if (!posts) return notFound();
  const { content, frontmatter } = posts;
  return (
    <div className=" pb-12">
      <div>
        <div className="mx-auto max-w-2xl px-2 py-6">
          <Link
            href={'/posts'}
            className="inline-block cursor-default rounded-lg border border-transparent p-1 transition hover:border-gray-200 hover:bg-gray-100"
          >
            <Icon name="undo-2" />
          </Link>
        </div>
        <article className="posts-theme xs:px-0 px-2">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.fmtData}</p>
          {content}
        </article>
      </div>
      <Comments />
    </div>
  );
}
