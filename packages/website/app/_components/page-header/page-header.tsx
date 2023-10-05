'use client';
import { Route } from 'next';
import NavLink from '../nav-link';
import Link from 'next/link';
import cx from 'clsx';
import { Icon } from '@iconify/react';
import { Line } from '@/app/_components/line';

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
    <section>
      <nav className="mx-auto  flex max-w-3xl items-center justify-between px-4 py-10 ">
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
      <Line />
    </section>
  );
}
