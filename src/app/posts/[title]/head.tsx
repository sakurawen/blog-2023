import { list } from '@/data';

const PostsHead = ({
	params: { title },
}: {
	params: {
		title: string;
	};
}) => {
	const post = list.find((item) => item.key === title);
	return (
		<>
			<title>{`${post?.title||'404 not found'} — Wen's Blog`}</title>
		</>
	);
};

export default PostsHead;
