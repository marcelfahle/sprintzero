import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sprintzero.sh"),
  title: "SprintZero — Legacy codebase modernization in one sprint",
  description:
    "Modernize the legacy codebase that's slowing your team down. 30-day fixed-scope sprint for SaaS companies on aging JS, PHP, and Rails stacks.",
  openGraph: {
    title: "SprintZero — Legacy codebase modernization in one sprint",
    description:
      "30-day fixed-scope modernization sprint. Starts with a paid Codebase X-Ray. For SaaS teams on aging stacks.",
    type: "website",
    url: "https://sprintzero.sh",
    siteName: "SprintZero",
  },
  twitter: {
    card: "summary_large_image",
    title: "SprintZero — Legacy codebase modernization in one sprint",
    description: "30-day fixed-scope modernization sprint for SaaS teams on aging stacks.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
