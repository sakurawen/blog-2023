import List from './list';

export const metadata = {
  title: "Wen's Blog Posts",
};

/**
 * 博客列表
 * @returns
 */
export default function Posts() {
  return (
    <div>
      <List />
    </div>
  );
}
