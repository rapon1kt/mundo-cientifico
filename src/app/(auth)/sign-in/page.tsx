"use client";
import * as React from "react";
import {
	CssVarsProvider,
	GlobalStyles,
	CssBaseline,
	Box,
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	formLabelClasses,
	Link,
	Input,
	Typography,
} from "@mui/joy";
import { GoogleIcon, ColorSchemeToggle, AuthAlert } from "@/components";
import { useRouter } from "next/navigation";

interface FormElements extends HTMLFormControlsCollection {
	email: HTMLInputElement;
	password: HTMLInputElement;
	persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
	readonly elements: FormElements;
}

interface MessageProps {
	title: string;
	description: string;
	severity: "danger" | "success";
}

export default function SignIn() {
	const [message, setMessage] = React.useState<MessageProps>();

	const router = useRouter();

	const handleSubmit = (event: React.FormEvent<SignInFormElement>) => {
		event.preventDefault();
		const formElements = event.currentTarget.elements;
		const data = {
			email: formElements.email.value,
			password: formElements.password.value,
			persistent: formElements.persistent.checked,
		};

		setMessage({
			title: "Sucesso!",
			description: "Você será redirecionado, seja bem-vindo!",
			severity: "success",
		});
		setTimeout(() => {
			router.push("/");
			console.log(data);
		}, 1500);
	};

	return (
		<CssVarsProvider defaultMode="dark" disableTransitionOnChange>
			<CssBaseline />
			<GlobalStyles
				styles={{
					":root": {
						"--Collapsed-breakpoint": "769px",
						"--Cover-width": "40vw",
						"--Form-maxWidth": "700px",
						"--Transition-duration": "0.4s", // set to `none` to disable transition
					},
				}}
			/>
			<Box
				sx={(theme) => ({
					width:
						"clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
					transition: "width var(--Transition-duration)",
					transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
					position: "relative",
					zIndex: 1,
					display: "flex",
					justifyContent: "flex-end",
					backdropFilter: "blur(4px)",
					backgroundColor: "rgba(255 255 255 / 0.6)",
					[theme.getColorSchemeSelector("dark")]: {
						backgroundColor: "rgba(19 19 24 / 0.4)",
					},
				})}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						minHeight: "100dvh",
						width:
							"clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
						maxWidth: "100%",
						px: 2,
					}}
				>
					<Box
						component="header"
						sx={{
							py: 3,
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
										width: 24,
										height: 24,
										backgroundImage: 'url("assets/logo.png")',
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
					<Box
						component="main"
						sx={{
							my: "auto",
							py: 2,
							pb: 5,
							display: "flex",
							flexDirection: "column",
							gap: 2,
							width: 400,
							maxWidth: "100%",
							mx: "auto",
							borderRadius: "sm",
							"& form": {
								display: "flex",
								flexDirection: "column",
								gap: 2,
							},
							[`& .${formLabelClasses.asterisk}`]: {
								visibility: "hidden",
							},
						}}
					>
						<div>
							<Typography component="h1" fontSize="xl2" fontWeight="lg">
								Entre com sua conta
							</Typography>
							<Typography level="body-sm" sx={{ my: 1, mb: 3 }}>
								Bem vindo!
							</Typography>
						</div>
						{message && <AuthAlert message={message} setMessage={setMessage} />}
						<form onSubmit={handleSubmit}>
							<FormControl required>
								<FormLabel>Email</FormLabel>
								<Input type="email" name="email" />
							</FormControl>
							<FormControl required>
								<FormLabel>Senha</FormLabel>
								<Input type="password" name="password" />
							</FormControl>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Checkbox
									size="sm"
									label="Lembre-se de mim :)"
									name="persistent"
								/>
								<Link fontSize="sm" href="/register" fontWeight="lg">
									Não possue conta?
								</Link>
							</Box>
							<Button type="submit" fullWidth>
								Entrar
							</Button>
						</form>
						<Button
							variant="outlined"
							color="neutral"
							fullWidth
							startDecorator={<GoogleIcon />}
							sx={{ display: "none" }}
						>
							Entrar com o Google
						</Button>
					</Box>
					<Box component="footer" sx={{ py: 3 }}>
						<Typography level="body-xs" textAlign="center">
							© Mundo Científico {new Date().getFullYear()}
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box
				sx={(theme) => ({
					height: "100%",
					position: "fixed",
					right: 0,
					top: 0,
					bottom: 0,
					left: "clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",
					transition:
						"background-image var(--Transition-duration), left var(--Transition-duration) !important",
					transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
					backgroundColor: "background.level1",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundImage:
						"url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",
					[theme.getColorSchemeSelector("dark")]: {
						backgroundImage:
							"url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)",
					},
				})}
			/>
		</CssVarsProvider>
	);
}
