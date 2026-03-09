import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const isBlunt = false;

export const metadata: Metadata = {
  title: isBlunt
    ? "We Unfuck Tech Stacks — Sprint Zero"
    : "Close the AI Gap in Days — Sprint Zero",
  description:
    "We modernize legacy codebases in under two weeks with AI-powered workflows. Full codebase modernization, AI-ready architecture, developer training. $35K all-in.",
  openGraph: {
    title: isBlunt
      ? "We Unfuck Tech Stacks — Sprint Zero"
      : "Sprint Zero — Close the AI Gap in Days",
    description:
      "1,600 files. 4 days. Zero downtime. We modernize legacy codebases in under two weeks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: isBlunt ? "We Unfuck Tech Stacks" : "Sprint Zero — Close the AI Gap",
    description:
      "Legacy codebase modernization in under 2 weeks. AI-ready architecture guaranteed.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased font-sans noise`}
      >
        {children}
      </body>
    </html>
  );
}
