import Link from 'next/link';

const NotFound = () => {
  
	return (
		<div className='h-full w-full flex justify-center items-center'>
			<div className='text-center'>
				<p className='text-lg leading-relaxed'>
					这里也许曾经是一个页面，
					<br />
					但是现在不是了。
				</p>
				<Link
					href="/blog"
					className='inline-block bg-gray-200 hover:bg-gray-300  text-black py-1 px-2 text-center mt-4 rounded'>
					返回首页
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
