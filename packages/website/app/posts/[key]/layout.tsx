import data from '@packages/content';
import { PropsWithChildren } from 'react';

export const generateMetadata = ({
  params: { key },
}: {
  params: {
    key: string;
  };
}) => {
  const post = data.map[key];
  return {
    title: post?.title ? `${post?.title} —— Wen's Blog` : "Wen's Blog",
  };
};

const PostsLayout = ({ children }: PropsWithChildren) => {
  return <div className="post-layout">{children}</div>;
};

export default PostsLayout;
