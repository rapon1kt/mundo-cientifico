"use client";
import { MainPost, PostFeed, Header } from "@/components";
import { Box, Button, CssVarsProvider, Divider, Typography } from "@mui/joy";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

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
					<Button
						variant="outlined"
						onClick={() => router.push("/v1/posts?query=older")}
						sx={{ my: 4 }}
					>
						Older Posts
					</Button>
				</Divider>
				<Box
					component="footer"
					sx={{ py: 3, bgcolor: (theme) => theme.palette.background.body }}
				>
					<Typography level="body-xs" textAlign="center">
						© Mundo Científico - {new Date().getFullYear()}
					</Typography>
				</Box>
			</Box>
		</CssVarsProvider>
	);
}
