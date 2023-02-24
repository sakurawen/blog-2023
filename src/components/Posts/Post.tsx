'use client';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import Code from '@/components/mdx/Code';

const Posts = ({ source }: { source: MDXRemoteProps }) => {
	return (
		<div>
			<article className='posts-theme'>
				<MDXRemote
					{...source}
					components={{
						code: Code,
					}}
				/>
			</article>
		</div>
	);
};

export default Posts;
