import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { BookingProvider } from "@/components/booking-modal";
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

const isBlunt = process.env.NEXT_PUBLIC_VARIANT === "blunt";

const title = isBlunt
  ? "We Unfuck Tech Stacks — Sprint Zero"
  : "AI Made Every Dev Team 10x Better — Sprint Zero";

const ogTitle = isBlunt
  ? "We Unfuck Tech Stacks — Sprint Zero"
  : "AI Made Every Dev Team 10x Better. Except Yours. — Sprint Zero";

// Determine the base URL based on the domain
const getMetadataBase = () => {
  // In production, use the actual domain
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  // Default to sprintzero.sh for production builds
  if (process.env.NODE_ENV === "production") {
    return new URL(isBlunt ? "https://unfuckyourstack.com" : "https://sprintzero.sh");
  }
  // Development fallback
  return new URL("http://localhost:3000");
};

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title,
  description:
    "We modernize legacy codebases in under two weeks with AI-powered workflows. Full codebase modernization, AI-ready architecture, developer training. $35K all-in.",
  openGraph: {
    title: ogTitle,
    description:
      "1,600 files. Zero downtime. We modernize legacy codebases and make your team 10x faster.",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sprint Zero — Legacy Codebase Modernization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description:
      "Legacy codebase modernization in under 2 weeks. AI-ready architecture guaranteed.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          async
          src="https://plausible.io/js/pa-yaXxF7dVcKtBSbOtfYd8j.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{};plausible.init()}`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased font-sans noise`}
      >
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
