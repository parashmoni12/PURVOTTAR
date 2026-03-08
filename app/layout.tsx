import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader"; // 1. Import the loader
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
  title: "Northeast Quest | Premium Travel",
  description: "Experience the hidden gems of North East India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 2. Configure the TopLoader */}
        <NextTopLoader 
          color="#10b981"         // Premium Emerald Color
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}              // Thin, elegant line
          showSpinner={false}     // Hide the circular spinner for a cleaner look
          easing="ease"
          speed={200}
          shadow="0 0 10px #10b981, 0 0 5px #10b981"
        />
        {children}
      </body>
    </html>
  );
}