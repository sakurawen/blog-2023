'use client';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import cx from 'classnames';

type LinkItem = {
	title: string;
	url: string;
	icon: string;
	target: '_blank' | '_self';
	hoverClassnames: string;
};

const links: LinkItem[] = [
	{
		title: 'github',
		url: 'https://github.com/sakurawen',
		icon: 'mdi:github',
		target: '_blank',
		hoverClassnames: 'hover:text-gray-800',
	},
	{
		title: 'weibo',
		url: 'https://weibo.com/u/6889020714',
		icon: 'mdi:sina-weibo',
		target: '_blank',
		hoverClassnames: 'hover:text-red-600',
	},
	{
		title: 'bilibili',
		url: 'https://space.bilibili.com/2940875/dynamic',
		icon: 'tabler:brand-bilibili',
		target: '_blank',
		hoverClassnames: 'hover:text-pink-400',
	},
];

const Links = () => {
	return (
		<div className='flex items-center space-x-2 mt-8'>
			{links.map((link) => {
				return (
					<Link
						key={link.url}
						target={link.target}
						href={link.url}>
						<Icon
							className={cx('text-gray-300  w-6 h-6', link.hoverClassnames)}
							icon={link.icon}
						/>
					</Link>
				);
			})}
		</div>
	);
};

export default Links;
