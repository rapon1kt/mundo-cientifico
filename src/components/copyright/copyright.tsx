"use client";
import { Box, Typography } from "@mui/joy";

export default function Copyright() {
	return (
		<Box component="footer" sx={{ py: 3 }}>
			<Typography level="body-xs" textAlign="center">
				© Mundo Científico - {new Date().getFullYear()}
			</Typography>
		</Box>
	);
}
