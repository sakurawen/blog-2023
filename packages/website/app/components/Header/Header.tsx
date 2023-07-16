'use client';
import NavLink from '@/app/components/NavLink';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { Undo2 } from 'lucide-react';
import { Route } from 'next';
import { usePathname } from 'next/navigation';
import { Background } from './Background';
import Links, { links } from './links';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const enableMiniNav = !(pathname === '/' || pathname === '/posts');
  if (enableMiniNav) {
    return (
      <div className="mx-auto max-w-2xl px-4 pb-4 pt-6">
        <Link
          href={'/posts'}
          className="inline-block cursor-default rounded-lg border border-transparent p-1 transition hover:border-gray-200 hover:bg-gray-100"
        >
          <Undo2 />
        </Link>
      </div>
    );
  }
  return (
    <div className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-b from-[rgba(255,255,255,.8)] to-[rgba(21,94,239,.08)] px-2">
      <Background />
      <div className="relative z-30 mx-auto max-w-2xl">
        <div className="flex origin-top px-2 pb-5 pt-12">
          <div className="select-none space-y-5">
            <h2 className="mb-1 inline-flex items-start text-5xl/none font-bold">
              <span>
                Hello
                <br />
                I&apos;m Wen
              </span>
            </h2>
            <p className="text-sm md:text-base/6">
              你看那通天的巨塔，每时每刻都有人往下跳。
              <br />
              我小时候不懂，以为那是雪花。
            </p>
          </div>
        </div>
        <div className={'nav-menu flex flex-col px-2'}>
          <Links items={links} />
          <div className={'mt-5 flex items-center'}>
            <div className="text-center text-gray-600">
              <NavLink
                prefetch
                className={(active) =>
                  clsx(
                    'relative block cursor-default select-none  py-1 after:absolute after:bottom-0 after:block after:h-[2px] after:w-full after:origin-center after:transform after:bg-blue-500 after:transition-all hover:text-gray-800',
                    [
                      active
                        ? '!text-blue-500 after:scale-x-100'
                        : 'after:scale-0 hover:after:scale-100 hover:after:bg-gray-600',
                    ],
                  )
                }
                href="/"
              >
                <span className="mx-1.5">首页</span>
              </NavLink>
            </div>
            <div className="text-center text-gray-600">
              <NavLink
                prefetch
                className={(active) =>
                  clsx(
                    'relative block cursor-default select-none  py-1 after:absolute after:bottom-0 after:block after:h-[2px] after:w-full after:origin-center after:transform after:bg-blue-500 after:transition-all hover:text-gray-800',
                    [
                      active
                        ? '!text-blue-500 after:scale-x-100'
                        : 'after:scale-0 hover:after:scale-100 hover:after:bg-gray-600',
                    ],
                  )
                }
                href={'/posts' as Route}
              >
                <span className="mx-1.5">博客</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
