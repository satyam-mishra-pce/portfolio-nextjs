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
  title: "Satyam Mishra — Full-Stack Developer",
  description:
    "Satyam Mishra is a full-stack developer crafting accessible React interfaces and the Web3 logic behind them — building dApps with wagmi, viem, and ethers.",
  openGraph: {
    title: "Satyam Mishra — Full-Stack Developer",
    description:
      "Full-stack developer crafting accessible React interfaces and the Web3 logic behind them.",
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
