import data from '@packages/content';
import { Route } from 'next';
import Link from 'next/link';

export default function Posts() {
  return (
    <div>
      {data.list.map((item) => {
        return (
          <div key={item.year}>
            {/* <h2 className="text-2xl font-bold">{item.year}</h2> */}
            <ul className="mb-4 mt-2">
              {item.list.map((p) => {
                return (
                  <li key={p.key} className="mb-4 mt-1  text-gray-500">
                    <Link href={`/posts/${p.key}` as Route} className="cursor-default hover:text-gray-950">
                      {p.title}
                    </Link>
                    <span className="ml-2 text-xs text-gray-400 select-none">{p.fmtDate}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
