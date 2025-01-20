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
  title: "komako!",
  description: "silly little project",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://next.komako.pw",
    title: "komako!",
    description: "silly little project",
    images: [
      {
        url: "https://next.komako.pw/assets/icon.png",
        width: 400,
        height: 400,
        alt: "komako! favicon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lionzosu",
    title: "komako!",
    description: "silly little project",
    images: "https://next.komako.pw/assets/icon.png",
  },
};

export const viewport = {
  themeColor: "#ff00ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
