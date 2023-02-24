export const metadata = {
  title: "Wen's Blog",
};

const BlogLayout = ({ children }: ChildrenProps) => {
  return <div className='max-w-[648px] pb-8 mx-auto'>{children}</div>;
};

export default BlogLayout;
