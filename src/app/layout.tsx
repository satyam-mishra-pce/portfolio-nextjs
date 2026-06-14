import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Satyam Mishra — Full Stack Developer",
  description:
    "Satyam Mishra builds interfaces for the web with React and Next.js, and dApps with wagmi, viem, and ethers. Coding since childhood.",
  openGraph: {
    title: "Satyam Mishra — Full Stack Developer",
    description:
      "Satyam Mishra builds interfaces for the web with React and Next.js, and dApps with wagmi, viem, and ethers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
