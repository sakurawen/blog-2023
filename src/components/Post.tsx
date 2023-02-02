'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

const Posts = ({ source }: { slug: string; source: MDXRemoteProps }) => {
	return (
		<div>
			<article className='posts-theme'>
				<MDXRemote
					{...source}
					components={{}}></MDXRemote>
			</article>
		</div>
	);
};

export default Posts;
