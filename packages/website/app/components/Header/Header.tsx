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
        icon: 'lucide:fan',
        target: '_self',
        className: 'w-6 h-6',
      },
      {
        title: 'blog',
        url: '/posts',
        icon: 'lucide:book',
        target: '_self',
        className: 'w-6 h-6',
      },
      ...links,
    ];
    return (
      <div className="bg-white-50/80  fixed left-0 right-0 top-6 z-50 mx-auto  inline-block w-60 overflow-hidden rounded-full  bg-gradient-to-b from-gray-50/70 to-white/90 px-2 py-1 shadow-lg shadow-gray-800/5 ring-1 ring-gray-200 backdrop-blur-md">
        <Links className="justify-center space-x-4" items={extraLinks} />
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
                style={{ animationDuration: '2s', animationDirection: 'reverse' }}
                icon="lucide:fan"
                className="inline-block h-8 w-8 animate-spin text-emerald-600/20"
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
