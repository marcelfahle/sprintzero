import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const isBlunt = process.env.NEXT_PUBLIC_VARIANT === "blunt";

export const metadata: Metadata = {
  title: isBlunt
    ? "We Unfuck Tech Stacks | Stack Sprint"
    : "Your Competitors Ship with AI. Your Codebase Won't Let You. | Stack Sprint",
  description:
    "We modernize legacy codebases in under two weeks with AI-powered workflows. Full codebase modernization, AI-ready architecture, developer training. $35K all-in.",
  openGraph: {
    title: isBlunt
      ? "We Unfuck Tech Stacks | Stack Sprint"
      : "Stack Sprint — Close the AI Gap in Days",
    description:
      "We modernize legacy codebases in under two weeks. 1,600 files. 4 days. Zero downtime.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: isBlunt
      ? "We Unfuck Tech Stacks"
      : "Stack Sprint — Close the AI Gap in Days",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise`}
      >
        {children}
      </body>
    </html>
  );
}
