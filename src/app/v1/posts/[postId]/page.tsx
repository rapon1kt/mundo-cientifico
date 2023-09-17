"use client";
import { Copyright, NavBar } from "@/components";
import { posts } from "@/data";
import {
	AspectRatio,
	Box,
	CssVarsProvider,
	Typography,
	Card,
	Button,
	Link,
	Divider,
	IconButton,
	CardContent,
	Input,
	Stack,
} from "@mui/joy";
import { Send } from "@mui/icons-material";
import React from "react";

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
				<NavBar />
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
							variant="outlined"
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
