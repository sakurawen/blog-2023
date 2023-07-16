import { Icon } from '@iconify/react';
import { clsx } from 'clsx';

export type LinkItem = {
  title: string;
  url: string;
  icon: string;
  target: '_blank' | '_self';
  text?: string;
};

export const links: LinkItem[] = [
  {
    title: 'github',
    url: 'https://github.com/sakurawen',
    icon: 'lucide:github',
    target: '_blank',
  },
];

export type LinksProps = {
  items: LinkItem[];
  className?: string;
};

export default function Links({ items, className }: LinksProps) {
  return (
    <div className={clsx('flex h-9 select-none items-center space-x-2.5', className)}>
      {items.map((link) => {
        return (
          <a
            key={link.url}
            target={link.target}
            href={link.url}
            aria-label={link.title}
            className="group inline-flex cursor-default space-x-1 rounded-lg border border-transparent p-1 transition hover:border-gray-200 hover:bg-gray-100"
          >
            <Icon className={clsx('h-6 w-6 opacity-60 transition group-hover:opacity-100')} icon={link.icon} />
            {link.text && <span>{link.text}</span>}
          </a>
        );
      })}
    </div>
  );
}
