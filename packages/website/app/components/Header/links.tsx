import { Icon } from '@iconify/react';

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
    icon: 'mdi:github',
    target: '_blank',
  },
  {
    title: 'weibo',
    url: 'https://weibo.com/u/6889020714',
    icon: 'bi:sina-weibo',
    target: '_blank',
  },
  {
    title: 'bilibili',
    url: 'https://space.bilibili.com/2940875/dynamic',
    icon: 'tabler:brand-bilibili',
    target: '_blank',
  },
];

export type LinksProps = {
  items: LinkItem[];
};

export default function Links({ items }: LinksProps) {
  return (
    <div className="flex  items-center space-x-2.5 select-none h-9">
      {items.map((link) => {
        return (
          <a
            key={link.url}
            target={link.target}
            href={link.url}
            className="group inline-flex cursor-default space-x-1 rounded-md border border-transparent p-1 transition hover:border-gray-200 hover:bg-gray-100"
          >
            <Icon className="h-6 w-6 opacity-60 transition group-hover:opacity-100" icon={link.icon} />
            {link.text && <span>{link.text}</span>}
          </a>
        );
      })}
    </div>
  );
}
