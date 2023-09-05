"use client";
import { ColorSchemeToggle, MainPost, PostFeed } from "@/components";
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
				<Box
					component="header"
					sx={{
						p: 3,
						display: "flex",
						width: "100%",
						alignItems: "center",
						justifyContent: "space-between",
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
					<ColorSchemeToggle />
				</Box>
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
