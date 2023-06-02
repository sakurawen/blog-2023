import { Route } from 'next';
import Link from 'next/link';

const DefaultNotFound = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="pt-8 text-center">
        <h2 className="text-lg font-bold">404 NOT FOUND</h2>
        <p className="my-2 text-lg  leading-relaxed">
          这里也许曾经有内容
          <br />
          但是现在没有了
        </p>
        <Link
          href={'/posts' as Route}
          className="mt-2 inline-block cursor-default rounded bg-gray-200 px-2 py-1 text-center text-black hover:bg-gray-300"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
};

export default DefaultNotFound;
