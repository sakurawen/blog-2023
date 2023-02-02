import Link from 'next/link';
import list from '@/data';
import Image from 'next/image';

/**
 * 博客首页
 * @returns
 */
const Blog = () => {
	return (
		<div className='sm:pt-24 pt-12 space-y-6 relative px-4'>
			<div className='flex mb-12'>
				<div className='flex-1 pr-6 space-y-4'>
					<h2 className='font-bold text-4xl mb-8'>
						大海淹没了嘴，
						<br />
						享受着辛酸。
					</h2>
					<p>这里就是我心中想要的大道至简</p>
				</div>
				<div className='relative sm:block hidden w-36 h-36 mb-4 sm:w-[240px] sm:h-[240px]'>
					<Image
						src='/head.jpg'
						className=' select-none pointer-events-none'
						fill={true}
						sizes='240,240'
						priority={true}
						alt='headimg'
					/>
				</div>
			</div>
			<div>
				<h2 className='text-black text-2xl pb-6'>文章</h2>
				{list.map((item) => {
					return (
						<Link
							href={`/posts/${item.key}`}
							as={`/posts/${item.key}`}
							className='block hover:text-black pb-6 opacity-80 hover:opacity-100 transition cursor-pointer'
							key={item.key}>
							<h2 className='text-base overflow-hidden overflow-ellipsis whitespace-nowrap'>{item.title}</h2>
							<span className='text-xs text-[#555555]'>{item.fmtDate}</span>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Blog;
