import { list } from '@/data';

const PostsHead = ({
	params: { slug },
}: {
	params: {
		slug: string;
	};
}) => {
	const title = list.find((item) => item.key === slug);
	return (
		<>
			<title>{`${title?.title} | ソーシャルファイヤーウッドさんのブログ`}</title>
		</>
	);
};

export default PostsHead;
