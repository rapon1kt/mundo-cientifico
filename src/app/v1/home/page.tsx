"use client";
import { MainPost, PostFeed, Header, Copyright } from "@/components";
import { Box, Button, CssVarsProvider, Divider, Link } from "@mui/joy";

export default function Home() {
	return (
		<CssVarsProvider defaultMode="dark" disableTransitionOnChange>
			<Box
				sx={(theme) => ({
					bgcolor: theme.palette.background.body,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				})}
			>
				<Header />
				<MainPost />
				<PostFeed />
				<Divider>
					<Link href="/v1/posts?query=older">
						<Button variant="outlined" sx={{ my: 4 }}>
							Older Posts
						</Button>
					</Link>
				</Divider>
				<Copyright />
			</Box>
		</CssVarsProvider>
	);
}
