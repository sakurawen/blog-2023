'use client';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

const Posts = ({ source }: { slug: string; source: MDXRemoteProps }) => {
	return (
		<div>
			<div className='posts-theme'>
				<MDXRemote
					{...source}
					components={{}}></MDXRemote>
			</div>
		</div>
	);
};

export default Posts;
