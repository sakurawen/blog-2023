import { Route } from 'next';
import Link from 'next/link';

const DefaultNotFound = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <p className="text-lg leading-relaxed">
          这里也许曾经是一个页面，
          <br />
          但是现在不是了。
        </p>
        <Link
          href={'/posts' as Route}
          className="mt-4 inline-block rounded  bg-gray-200 px-2 py-1 text-center text-black hover:bg-gray-300"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
};

export default DefaultNotFound;
