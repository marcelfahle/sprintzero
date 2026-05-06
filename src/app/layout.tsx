import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
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

const TITLE = "Your codebase is the bottleneck. We fix it in 30 days.";
const DESCRIPTION =
  "AI-assisted engineering, not vibe coding. For SaaS teams on aging React, Laravel, Rails, and Phoenix stacks. Starts with a $2,500 Codebase X-Ray; modernization sprint from $35K.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sprintzero.sh"),
  title: {
    default: `${TITLE} — SprintZero`,
    template: "%s — SprintZero",
  },
  description: DESCRIPTION,
  alternates: { canonical: "https://sprintzero.sh" },
  openGraph: {
    type: "website",
    url: "https://sprintzero.sh",
    siteName: "SprintZero",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PlausibleProvider enabled>
          {children}
          <StickyMobileCTA />
        </PlausibleProvider>
      </body>
    </html>
  );
}
