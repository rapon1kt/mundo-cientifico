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

const posts = [
	{
		key: 1,
		title: "Solve yellow corners of rubik cube",
		description:
			"Solving the yellow corners of a Rubik's Cube is typically the last step in solving the entire cube. The method I'll describe here is a basic one, often referred to as the CFOP method (Cross, F2L, OLL, PLL).",
		link: `/1`,
	},
	{
		key: 2,
		title: "What is idealism?",
		description:
			"Idealism is a philosophical perspective that centers on the belief that reality is fundamentally shaped by the mind or consciousness. It posits that the external world, including the physical universe and everything within it, exists as a product of mental constructs, ideas, or perceptions",
		link: `/2`,
	},
	{
		key: 3,
		title: "Foundation of the metaphysics of customs",
		description:
			"The 'Foundation of the Metaphysics of Morals' (in German, 'Grundlegung zur Metaphysik der Sitten') is a philosophical work written by Immanuel Kant, one of the most influential philosophers of the Enlightenment era. It was first published in 1785 and is often considered a foundational text in the field of moral philosophy.",
		link: `/3`,
	},
];

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
