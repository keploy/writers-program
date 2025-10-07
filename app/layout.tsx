import type { Metadata } from "next";
import { Lato, Inconsolata, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Keploy's Writers Program",
  description:
    "Get into a community of Technical Writers where you get the right Recognition | Growth | Networking | Earning & Rewards. An Open-Source Program for Students, Professionals, and Freelancers",
  keywords: [
    "Keploy",
    "Writers Program",
    "Technical Writing",
    "Open Source",
    "Developer Content",
  ],
  authors: [{ name: "Keploy.io" }],
  openGraph: {
    title: "Keploy's Writers Program",
    description: "Join our community of technical writers and grow your skills",
    url: "https://writers.keploy.io",
    siteName: "Keploy Writers Program",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://writers.keploy.io/" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body
        className={`${lato.variable} ${inconsolata.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
