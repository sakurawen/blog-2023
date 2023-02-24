import { list } from '@/data';

export const generateMetadata = ({
  params: { title },
}: {
	params: {
		title: string;
	};
}) => {
  const post = list.find((item) => item.key === title);
  return {
    title: post?.title ? `${post?.title} —— Wen's Blog` : "Wen's Blog",
  };
};

const PostsLayout = ({ children }: ChildrenProps) => {
  return <div className='max-w-content mx-auto sm:pt-24 pt-12 px-4 pb-12'>{children}</div>;
};

export default PostsLayout;
