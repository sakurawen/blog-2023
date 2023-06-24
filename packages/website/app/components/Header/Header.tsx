'use client';
import NavLink from '@/app/components/NavLink';
import clsx from 'clsx';
import { Route } from 'next';
import { usePathname } from 'next/navigation';
import { Background } from './Background';
import Links, { links, LinkItem } from './links';
import { Icon } from '@iconify/react';

export default function Header() {
  const pathname = usePathname();
  const enableMiniNav = !(pathname === '/' || pathname === '/posts');
  if (enableMiniNav) {
    const extraLinks: LinkItem[] = [
      {
        title: 'home',
        url: '/',
        text: '首页',
        icon: 'lucide:fan',
        target: '_self',
      },
      {
        title: 'blog',
        url: '/posts',
        text: '博客',
        icon: 'lucide:book',
        target: '_self',
      },
      ...links,
    ];
    return (
      <div className=" mx-auto max-w-2xl px-2 pt-12">
        <div className="relative mx-auto inline-block  overflow-hidden rounded-lg bg-gray-50/80 px-2 py-1 ring-1 ring-gray-200">
          <Links items={extraLinks} />
        </div>
      </div>
    );
  }
  return (
    <div className="relative overflow-hidden border-b border-emerald-100 bg-emerald-50/40 px-2">
      <Background />
      <div className="relative z-30 mx-auto max-w-2xl">
        <div className="flex origin-top px-2 pb-5 pt-12">
          <div className="select-none space-y-5">
            <h2 className="inline-flex items-start text-4xl font-bold">
              <span>
                Hello
                <br />
                I&apos;m Wen
              </span>
              <Icon
                style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
                icon="lucide:fan"
                className="ml-2 inline-block h-8 w-8 animate-spin text-emerald-600"
              />
            </h2>
            <p className="text-sm md:text-base">
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
                    'relative block cursor-default select-none  py-1 after:absolute after:bottom-0 after:block after:h-[2px] after:w-full after:origin-center after:transform after:bg-emerald-500 after:transition-all hover:text-gray-800',
                    [
                      active
                        ? '!text-emerald-500 after:scale-x-100'
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
                    'relative block cursor-default select-none  py-1 after:absolute after:bottom-0 after:block after:h-[2px] after:w-full after:origin-center after:transform after:bg-emerald-500 after:transition-all hover:text-gray-800',
                    [
                      active
                        ? '!text-emerald-500 after:scale-x-100'
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
