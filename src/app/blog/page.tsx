'use client';
import Link from 'next/link';
import list from '@/data';
import Image from 'next/image';
import Links from './links';

const Blog = () => {
	return (
		<div className='sm:pt-24 pt-12 space-y-6 relative px-4'>
			<div className='flex mb-12 min-h-[120px]'>
				<div className='flex-1 pr-6 space-y-4 flex flex-col justify-between'>
					<div className=''>
						<h2 className='font-bold text-4xl mb-8'>
							大海淹没了嘴，
							<br />
							享受着辛酸。
						</h2>
						<div className='flex flex-col justify-between'>
							<p>
								需要有个地方说说话，
								<br />
								于是有了这个博客。
							</p>
						</div>
					</div>
					<Links />
				</div>
				{/* <div className='relative sm:block hidden w-36 h-36 sm:w-[240px] sm:h-[240px]'>
					<Image
						src='/head.jpg'
						className=' select-none pointer-events-none'
						fill={true}
						sizes='240,240'
						priority={true}
						alt='headimg'
					/>
				</div> */}
			</div>
			<div>
				<h2 className='text-2xl pb-6 '>文章</h2>
				{list.map((item) => {
					return (
						<Link
							href={`/posts/${item.key}`}
							as={`/posts/${item.key}`}
							className='block group  mb-6  text-gray-700 transition cursor-pointer'
							key={item.key}>
							<h2 className='text-base group-hover:text-light-main overflow-hidden overflow-ellipsis whitespace-nowrap'>
								{item.title}
							</h2>
							<span className='text-xs group-hover:text-light-main '>{item.fmtDate}</span>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Blog;
