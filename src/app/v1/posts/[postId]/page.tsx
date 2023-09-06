export default function PostPage({ params }: { params: { postId: string } }) {
	return <h1>{params.postId}</h1>;
}
