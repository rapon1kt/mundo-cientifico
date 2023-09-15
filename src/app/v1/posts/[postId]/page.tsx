"use client";
import { Copyright } from "@/components";
import { posts } from "@/data";
import {
	AspectRatio,
	Box,
	CssVarsProvider,
	Typography,
	Card,
	Button,
	Link,
	Dropdown,
	MenuButton,
	Menu,
	MenuItem,
	Divider,
	useColorScheme,
	IconButton,
	CardContent,
	Input,
	Stack,
} from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";
import {
	DarkModeRounded,
	Home,
	LightModeRounded,
	Logout,
	People,
	Send,
	Settings,
} from "@mui/icons-material";
import React from "react";

function ToggleTheme() {
	const { mode, setMode } = useColorScheme();

	return (
		<MenuItem
			sx={{ gap: 1 }}
			onClick={() => {
				if (mode === "light") {
					setMode("dark");
				} else {
					setMode("light");
				}
			}}
		>
			{mode === "light" ? <DarkModeRounded /> : <LightModeRounded />}
			Change
		</MenuItem>
	);
}

export default function PostPage({ params }: { params: { postId: number } }) {
	const postId = params.postId;

	return (
		<CssVarsProvider defaultMode="dark" disableTransitionOnChange>
			<Box
				sx={(theme) => ({
					bgcolor: theme.palette.background.body,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					minHeight: "100vh",
				})}
			>
				<Box
					sx={{
						py: 4,
						px: 5,
						width: "100%",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography
						fontWeight="lg"
						startDecorator={
							<Box
								component="span"
								sx={{
									width: 20,
									height: 20,
									background: (theme) =>
										`linear-gradient(45deg, ${theme.vars.palette.primary.solidBg}, ${theme.vars.palette.primary.solidBg} 30%, ${theme.vars.palette.primary.softBg})`,
									borderRadius: "50%",
									boxShadow: (theme) => theme.shadow.md,
									"--joy-shadowChannel": (theme) =>
										theme.vars.palette.primary.mainChannel,
								}}
							/>
						}
					>
						Mundo Científico
					</Typography>
					<Link
						href="/v1/home"
						sx={{
							display: { xs: "none", sm: "block" },
							position: "absolute",
							top: "2rem",
							left: "50%",
							transform: "translateX(-50%)",
						}}
					>
						<IconButton color="primary">
							<Home />
						</IconButton>
					</Link>
					<Dropdown>
						<MenuButton variant="plain">
							<MenuIcon />
						</MenuButton>
						<Menu>
							<MenuItem sx={{ gap: 1 }}>
								<People />
								Account
							</MenuItem>
							<MenuItem sx={{ gap: 1 }}>
								<Settings />
								Preferences
							</MenuItem>
							<ToggleTheme />
							<Divider />
							<MenuItem
								sx={{
									display: { sm: "none" },
									gap: 1,
								}}
							>
								<Home />
								Home
							</MenuItem>
							<Divider />
							<MenuItem sx={{ gap: 1 }}>
								<Logout />
								Logout
							</MenuItem>
						</Menu>
					</Dropdown>
				</Box>

				{posts
					.filter((post) => post.key == postId)
					.map((post) => (
						<Card
							variant="outlined"
							color="primary"
							key={post.key}
							sx={{
								p: 4,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								width: {
									xs: 380,
									sm: 580,
									md: 750,
								},
								gap: 2,
								mb: 5,
							}}
						>
							<CardContent>
								<Typography level="h2">{post.title}</Typography>
								<Typography level="body-lg" gutterBottom>
									{post.author} - {post.date}
								</Typography>
							</CardContent>
							<AspectRatio
								variant="outlined"
								color="primary"
								sx={{
									width: {
										xs: "100%",
										md: 700,
									},
								}}
							>
								<img src={post.img} loading="lazy" alt={post.title} />
							</AspectRatio>
							<Typography level="body-lg">{post.description}</Typography>
						</Card>
					))}
				{posts
					.filter((post) => post.key == postId)
					.map((post) => (
						<Card
							color="primary"
							key={post.key}
							sx={{
								p: 4,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								width: {
									xs: 380,
									sm: 580,
									md: 750,
								},
								gap: 2,
								mb: 5,
							}}
						>
							<Typography level="title-lg">Comments</Typography>
							<CardContent sx={{ width: "80%" }}>
								<Input
									variant="outlined"
									placeholder="Type something nice..."
									startDecorator={
										<img
											src="/assets/profile.png"
											style={{ borderRadius: "50%", width: "30px" }}
										/>
									}
									endDecorator={
										<IconButton>
											<Send />
										</IconButton>
									}
								/>
								<Box
									sx={{
										p: 1,
										my: 2,
										gap: 2,
										display: "flex",
										flexDirection: "row",
										borderRadius: "12px",
										bgcolor: (theme) => theme.palette.background.popup,
									}}
								>
									<img
										src="/assets/profile.png"
										style={{ borderRadius: "50%", width: "60px" }}
									/>
									<Stack>
										<Typography level="title-sm">
											raponikt - an hour ago
										</Typography>
										<Typography level="body-sm">
											I like this template :)
										</Typography>
									</Stack>
								</Box>
							</CardContent>
						</Card>
					))}
				<Divider>
					<Link href="/v1/posts">
						<Button variant="outlined">Back to Post Feed</Button>
					</Link>
				</Divider>
				<Copyright />
			</Box>
		</CssVarsProvider>
	);
}
