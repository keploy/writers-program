import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Keploy's Writers Program",
    description: "Join Keploy's Writers Program - Get recognized, learn, and flourish as a technical writer in our global community.",
    keywords: ["technical writing", "keploy", "open source", "developer content", "writers program"],
    authors: [{ name: "Keploy.io" }],
    openGraph: {
        title: "Keploy's Writers Program",
        description: "Get into a community of Technical Writers where you get the right Recognition, Growth, Networking & Rewards",
        url: "https://writers.keploy.io",
        siteName: "Keploy Writers Program",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
