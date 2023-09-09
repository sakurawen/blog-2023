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
                  <li key={p.key} className="mb-4 mt-1">
                    <Link
                      href={`/posts/${p.key}` as Route}
                      className="cursor-default text-base font-bold text-gray-800 underline-offset-[6px] hover:text-gray-950 hover:underline hover:decoration-dashed"
                    >
                      {p.title}
                    </Link>
                    <br />
                    <span className="select-none text-sm text-gray-400">{p.fmtDate}</span>
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
