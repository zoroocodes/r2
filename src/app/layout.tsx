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

export const metadata: Metadata = {
  title: "ReputationOne AI – Control Your Narrative",
  description: "AI-powered reputation protection for creators, founders, and public figures.",
  openGraph: {
    title: "ReputationOne AI",
    description: "Protect and shape your online image with AI. For creators, talent, and founders.",
    url: "https://reputationoneai.com", // replace with your deployed domain
    siteName: "ReputationOne",
    images: [
      {
        url: "/og.png", // this refers to public/og.png
        width: 1200,
        height: 630,
        alt: "ReputationOne OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReputationOne AI",
    description: "AI-powered brand and reputation protection.",
    images: ["/og.png"], // same as OG
    creator: "@reputationoneai", // optional
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
