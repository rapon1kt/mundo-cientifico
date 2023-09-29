"use client";
import { Copyright, NavBar, PostFeed } from "@/components";
import { CssVarsProvider, Box } from "@mui/joy";
import { useSearchParams } from "next/navigation";

export default function PostsPage() {
	const searchParams = useSearchParams();
	const search = searchParams.get("query");

	return (
		<CssVarsProvider defaultMode="dark" disableTransitionOnChange>
			<NavBar />
			<Box sx={{ bgcolor: (theme) => theme.palette.background.body }}>
				{search === "older" ? <PostFeed older /> : <PostFeed />}
				<Copyright />
			</Box>
		</CssVarsProvider>
	);
}
