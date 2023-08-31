"use client";
import React from "react";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { IconButton, IconButtonProps, useColorScheme } from "@mui/joy";

export default function ColorSchemeToggle({
	onClick,
	...props
}: IconButtonProps) {
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return <IconButton size="sm" variant="plain" color="neutral" disabled />;
	}

	return (
		<IconButton
			id="toggle-mode"
			size="sm"
			variant="plain"
			color="neutral"
			aria-label="toggle light/dark mode"
			{...props}
			onClick={(event) => {
				if (mode === "light") {
					setMode("dark");
				} else {
					setMode("light");
				}
				onClick?.(event);
			}}
		>
			{mode === "light" ? <DarkModeRounded /> : <LightModeRounded />}
		</IconButton>
	);
}
