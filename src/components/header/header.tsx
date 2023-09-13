import { Box, Typography } from "@mui/joy";
import { ColorSchemeToggle } from "..";

export default function Header({ children }: { children?: React.ReactNode }) {
	return (
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
			{children}
			<ColorSchemeToggle />
		</Box>
	);
}
