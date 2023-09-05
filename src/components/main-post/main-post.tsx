import { Button, Typography } from "@mui/joy";
import { TwoSidedLayout } from "..";

export default function MainPost() {
	return (
		<TwoSidedLayout imageSrc="/assets/teste.jpg">
			<Typography variant="plain" level="body-md" sx={{ marginBottom: 2 }}>
				01 of January, 2023
			</Typography>
			<Typography variant="plain" level="h3" gutterBottom>
				How to get started in programming?
			</Typography>
			<Typography sx={{ marginBottom: 1.5 }}>
				Start with a beginner-friendly language. Python is often recommended for
				newcomers due to its simplicity and readability. JavaScript and Ruby are
				also good options.
			</Typography>
			<Button fullWidth>Read More</Button>
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
	);
}
