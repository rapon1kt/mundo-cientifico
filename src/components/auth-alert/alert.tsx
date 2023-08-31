import { Check, Close } from "@mui/icons-material";
import { Alert, IconButton, Typography, AspectRatio } from "@mui/joy";
import React from "react";

interface MessageProps {
	title: string;
	description: string;
	severity: "danger" | "success";
}

export default function AuthAlert({
	message,
	setMessage,
}: {
	message: MessageProps;
	setMessage: React.Dispatch<React.SetStateAction<MessageProps | undefined>>;
}) {
	return (
		<Alert
			size="lg"
			color={message.severity}
			variant="soft"
			invertedColors
			startDecorator={
				<AspectRatio
					variant="solid"
					ratio="1"
					sx={{
						minWidth: 40,
						borderRadius: "50%",
						boxShadow: "0 2px 12px 0 rgb(0 0 0/0.2)",
					}}
				>
					<div>
						<Check sx={{ fontSize: "lx12" }} />
					</div>
				</AspectRatio>
			}
			endDecorator={
				<IconButton
					variant="plain"
					onClick={() => setMessage(undefined)}
					sx={{
						"--IconButton-size": "32px",
						transform: "translate(0.5rem, -0.5rem)",
					}}
				>
					<Close />
				</IconButton>
			}
			sx={{ alignItems: "flex-start", overflow: "hidden" }}
		>
			<div>
				<Typography level="title-lg">{message.title}</Typography>
				<Typography level="body-sm">{message.description}</Typography>
			</div>
		</Alert>
	);
}
