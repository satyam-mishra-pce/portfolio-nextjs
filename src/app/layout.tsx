import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import { ogImageUrl, seoDescription, siteName, siteUrl } from "@/lib/seo";
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
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteName,
    template: `%s | ${profile.name}`,
  },
  description: seoDescription,
  keywords: [
    "Satyam Mishra",
    "Satyam Mishra developer",
    "Satyam Mishra portfolio",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Full Stack Developer",
    "Software Developer",
    "Software Engineer",
    "Frontend Developer",
    "Front End Designer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Web3 Engineer",
    "dApp Developer",
    "UI Engineer",
    "UI/UX Design",
    "Figma",
    "Version Control",
    "Git",
    "GitHub",
    "Problem Solving",
    "Data Structures",
    "Algorithms",
    "Linux",
    "Open Source",
    "Developer Tools",
    "Programming Skills",
    "Web Development",
    "Coding",
    "Jaipur developer",
    "India software engineer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Solidity",
    "wagmi",
    "viem",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  classification: "Portfolio, Software Engineering, Full Stack Development",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: siteName,
    description: seoDescription,
    url: siteUrl,
    siteName: profile.name,
    locale: "en_IN",
    type: "profile",
    firstName: "Satyam",
    lastName: "Mishra",
    username: "satyam-mishra-pce",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Satyam Mishra Full Stack Developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Satyam_Mis",
    creator: "@Satyam_Mis",
    title: siteName,
    description: seoDescription,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: profile.name,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08080a",
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
