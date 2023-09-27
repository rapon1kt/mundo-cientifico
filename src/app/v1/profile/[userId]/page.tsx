"use client";
import { Copyright, NavBar } from "@/components";
import { posts } from "@/data";
import { PersonAdd } from "@mui/icons-material";
import {
	Box,
	Card,
	CardContent,
	Chip,
	CssVarsProvider,
	Divider,
	Grid,
	IconButton,
	Stack,
	Typography,
} from "@mui/joy";

const user = {
	name: "Gustavo Raponi Silva",
	role: "Estudante do Empreender",
	img: "/assets/profile.png",
	createdAt: Date.now(),
	bio: "Segundo ano do ensino médio, sou programador e jogador de vôlei.",
	secret: "que saudade da minha ex",
};

export default function Profile({ params }: { params: { userId: string } }) {
	const userId = params.userId;

	return (
		<CssVarsProvider defaultMode="dark" disableTransitionOnChange>
			<NavBar />
			<Box
				sx={(theme) => ({
					bgcolor: theme.palette.background.body,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					minHeight: "100vh",
				})}
			>
				<Card
					sx={{
						background: (theme) => theme.palette.background.backdrop,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width: 380,
						gap: 2,
						p: 4,
						mb: 5,
					}}
				>
					<CardContent sx={{ display: "flex", alignItems: "center" }}>
						<img
							src={user.img}
							loading="lazy"
							alt={user.name}
							style={{ width: 200, height: 200, borderRadius: "50%" }}
						/>
						<Stack sx={{ textAlign: "start" }}>
							<Typography
								level="h3"
								endDecorator={
									<IconButton>
										<PersonAdd color="primary" />
									</IconButton>
								}
							>
								{user.name}
							</Typography>
							<Typography level="body-sm" gutterBottom>
								{user.role}
							</Typography>
							<Typography level="body-xs">
								{user.bio}
								<p style={{ color: "#17181c" }}>{user.secret}</p>
							</Typography>
						</Stack>
					</CardContent>
				</Card>
				<Divider sx={{ px: { lg: 25, xs: 10 } }}>
					<Chip variant="soft" color="neutral" size="sm">
						Posts
					</Chip>
				</Divider>
				<Grid
					container
					sx={{
						display: "flex",
						mt: 5,
					}}
				>
					{posts.map((post) => (
						<Box
							key={post.key}
							component={Grid}
							xs={12}
							sm={6}
							lg={4}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								width: 380,
								gap: 2,
								p: 5,
							}}
						>
							<img
								style={{ width: 150, height: 150, borderRadius: "50%" }}
								src={post.img}
								alt={post.title}
							/>
							<div>
								<Typography
									level="title-lg"
									component="a"
									href={`/v1/posts/${post.key}`}
								>
									{post.title}
								</Typography>
								<Typography level="body-sm">{post.description}</Typography>
							</div>
						</Box>
					))}
				</Grid>
				<Copyright />
			</Box>
		</CssVarsProvider>
	);
}
