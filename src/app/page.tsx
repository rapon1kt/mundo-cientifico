"use client";
import { ColorSchemeToggle } from "@/components";
import { Box, CssVarsProvider, Link, Button, Typography } from "@mui/joy";
import { TwoSidedLayout } from "@/components";
import ArrowForward from "@mui/icons-material/ArrowForward";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<CssVarsProvider defaultMode="dark" disableTransitionOnChange>
			<Box
				sx={(theme) => ({
					bgcolor: theme.palette.background.body,
				})}
			>
				<Box
					component="header"
					sx={{
						p: 3,
						display: "flex",
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
				<TwoSidedLayout imageSrc="/assets/logo.png">
					<Typography color="primary" fontSize="lg" fontWeight="lg">
						CONHEÇA AGORA
					</Typography>
					<Typography
						level="h1"
						fontWeight="xl"
						fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
					>
						Método de Ensino
					</Typography>
					<Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
						Saiba mais sobre o método de ensino FACESM. Como analisar,
						fundamentar resoluções e resolver com praticidade problemas em
						ambiente de aprendizado? Clique abaixo e descubra sobre este novo
						método!
					</Typography>
					<Button
						onClick={() => router.push("/sign-in")}
						endDecorator={<ArrowForward />}
						size="lg"
						fullWidth
					>
						Fazer Login
					</Button>
					<Typography>
						Ainda não possue conta?{" "}
						<Link fontWeight="lg" href="/register">
							Registre-se aqui!
						</Link>
					</Typography>
					<Typography
						level="body-xs"
						sx={{
							position: "absolute",
							top: "2rem",
							left: "50%",
							transform: "translateX(-50%)",
						}}
					>
						Bem Vindo!
					</Typography>
				</TwoSidedLayout>
			</Box>
			<Box
				component="footer"
				sx={{ py: 3, bgcolor: (theme) => theme.palette.background.body }}
			>
				<Typography level="body-xs" textAlign="center">
					© Mundo Científico - {new Date().getFullYear()}
				</Typography>
			</Box>
		</CssVarsProvider>
	);
}
