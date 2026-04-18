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
  title: "Muhammad Rakha Firdaus - Software Engineer",
  description: "Portfolio of Muhammad Rakha Firdaus (mrakhaf) - Software Engineer specializing in building scalable backend systems with Go, Kafka, and PostgreSQL.",
  keywords: ["Muhammad Rakha Firdaus", "mrakhaf", "Software Engineer", "Go Developer", "Backend Engineer", "Kafka", "PostgreSQL", "Docker", "Node.js", "Python", "Portfolio"],
  authors: [{ name: "Muhammad Rakha Firdaus", url: "https://github.com/mrakhaf" }],
  openGraph: {
    title: "Muhammad Rakha Firdaus - Software Engineer",
    description: "Portfolio of Muhammad Rakha Firdaus (mrakhaf) - Software Engineer specializing in building scalable backend systems with Go, Kafka, and PostgreSQL.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
