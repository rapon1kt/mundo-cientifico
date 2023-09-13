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
						<img
							src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
							srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
							loading="lazy"
							alt=""
						/>
					</AspectRatio>
					<CardContent>
						<div>
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
							<Typography level="body-md">September 05, 2023</Typography>
						</div>
						<Typography level="body-lg">{post.description}</Typography>
					</CardContent>
				</Card>
			))}
		</Container>
	);
}
