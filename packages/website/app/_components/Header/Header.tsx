'use client';
import { Route } from 'next';
import NavLink from '../NavLink';
import Link from 'next/link';
import cx from 'clsx';
import { Icon } from '@iconify/react';

type MenuItem = {
  text: string;
  href: Route;
};
const menus: MenuItem[] = [
  {
    text: 'About',
    href: '/',
  },
  {
    text: 'Posts',
    href: '/posts',
  },
];

export default function Header() {
  return (
    <nav className="mx-auto mb-8 flex max-w-2xl items-center justify-between border-b border-gray-200 px-2 py-10  sm:px-0">
      <div className="logo text-xl font-bold">Wen&apos;s Blog</div>
      <ul className="menu-items flex items-center space-x-6">
        {menus.map((menu) => {
          return (
            <li key={menu.href}>
              <NavLink
                href={menu.href}
                className={(active) =>
                  cx('cursor-default underline-offset-8', [
                    active ? 'underline decoration-wavy' : 'hover:underline hover:decoration-dashed',
                  ])
                }
              >
                {menu.text}
              </NavLink>
            </li>
          );
        })}
        <li>
          <Link href="https://github.com/sakurawen" target="_blank" className="opacity-80 hover:opacity-100">
            <Icon icon="lucide:github" className="h-5 w-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
