'use client';
import Image from 'next/image';
import Links from './links';
import { Route } from 'next';
import NavLink from '@/app/components/NavLink';
import clsx from 'clsx';

const Header = () => {
  return (
    <div className="border-b border-emerald-100 bg-emerald-50/40 px-2">
      <div className="mx-auto max-w-xl">
        <div className="flex py-12">
          <div className="mr-12">
            <Image
              className="rounded-full ring-1 ring-emerald-200"
              src="/avatar.jpg"
              width={120}
              priority
              height={120}
              alt="avatar"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Wen</h2>
            <p>不需要太复杂，简简单单就好。</p>
            <Links />
          </div>
        </div>
        <div className="nav-menu flex items-center space-x-1 pl-2">
          <div className="text-center text-gray-600">
            <NavLink
              className={(active) =>
                clsx(
                  'relative block  py-1 after:absolute after:bottom-0 after:block after:h-[2px] after:w-full after:origin-center after:transform after:bg-emerald-500 after:transition-all hover:text-gray-800',
                  [active ? '!text-emerald-500 after:scale-x-100' : 'after:scale-0'],
                )
              }
              href="/"
            >
              <span className="mx-1.5">首页</span>
            </NavLink>
          </div>
          <div className="text-center text-gray-600">
            <NavLink
              className={(active) =>
                clsx(
                  'relative block  py-1 after:absolute after:bottom-0 after:block after:h-[2px] after:w-full after:origin-center after:transform after:bg-emerald-500 after:transition-all hover:text-gray-800',
                  [active ? '!text-emerald-500 after:scale-x-100' : 'after:scale-0'],
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
  );
};

export default Header;