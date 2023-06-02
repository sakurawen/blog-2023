import data from '@packages/content';
import { PropsWithChildren } from 'react';

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

export default function PostsLayout({ children }: PropsWithChildren) {
  return <div className="post-layout">{children}</div>;
}
