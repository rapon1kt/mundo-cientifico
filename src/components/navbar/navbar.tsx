"use client";
import {
	Box,
	Typography,
	Link,
	Dropdown,
	MenuButton,
	MenuItem,
	IconButton,
	useColorScheme,
	Menu,
	Divider,
} from "@mui/joy";
import {
	Home,
	Settings,
	People,
	LightModeRounded,
	DarkModeRounded,
	Logout,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

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

export default function NavBar({ home }: { home?: boolean }) {
	return (
		<Box
			sx={{
				bgcolor: (theme) => theme.palette.background.body,
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
			{!home && (
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
			)}
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
					{!home && (
						<MenuItem
							sx={{
								display: { sm: "none" },
								gap: 1,
							}}
						>
							<Home />
							Home
						</MenuItem>
					)}
					<Divider />
					<MenuItem sx={{ gap: 1 }}>
						<Logout />
						Logout
					</MenuItem>
				</Menu>
			</Dropdown>
		</Box>
	);
}
