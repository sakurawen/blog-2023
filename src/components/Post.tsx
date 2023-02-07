'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

const Posts = ({ source }: { source: MDXRemoteProps }) => {
	return (
		<div>
			<article className='posts-theme'>
				<MDXRemote {...source} />
			</article>
		</div>
	);
};

export default Posts;
