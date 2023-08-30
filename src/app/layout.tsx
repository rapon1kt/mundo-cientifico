import StateProvider from "@/state/state-provider/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Mundo Científico",
	description: "Created by Gustavo Raponi Silva",
	icons: {
		icon: "/assets/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<StateProvider>{children}</StateProvider>
			</body>
		</html>
	);
}
