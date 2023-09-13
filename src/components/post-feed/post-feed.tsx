import { IosShare } from "@mui/icons-material";
import {
	Card,
	Typography,
	IconButton,
	Container,
	CardContent,
	AspectRatio,
} from "@mui/joy";
import { useRouter } from "next/navigation";
import { posts } from "@/data";

export default function PostFeed() {
	const router = useRouter();

	return (
		<Container
			maxWidth="lg"
			sx={{ display: "flex", flexDirection: "column", gap: 4, mb: 2 }}
		>
			{posts.map((post) => (
				<Card
					variant="outlined"
					color="primary"
					key={post.key}
					sx={{
						p: 4,
						display: "flex",
						flexDirection: {
							xs: "column",
							md: "row",
						},
						alignItems: "center",
						gap: 2,
						background: (theme) => theme.palette.background.backdrop,
					}}
				>
					<AspectRatio
						variant="outlined"
						color="primary"
						sx={{
							width: {
								xs: "100%",
								md: 300,
							},
						}}
					>
						<img src={post.img} loading="lazy" alt={post.title} />
					</AspectRatio>
					<CardContent>
						<Typography
							level="h2"
							endDecorator={
								<IconButton
									onClick={() => router.push(`/v1/posts/${post.link}`)}
								>
									<IosShare color="primary" />
								</IconButton>
							}
						>
							{post.title}
						</Typography>
						<Typography level="body-md" sx={{ fontWeight: 600 }}>
							{post.author} - {post.date}
						</Typography>
						<Typography level="body-lg">{post.description}</Typography>
					</CardContent>
				</Card>
			))}
		</Container>
	);
}
