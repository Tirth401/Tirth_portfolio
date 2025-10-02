import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tirth Shah - Portfolio",
  description: "AI Engineer and Full Stack Developer Portfolio",
  keywords: ["AI Engineer", "Full Stack Developer", "Portfolio", "Tirth Shah"],
  authors: [{ name: "Tirth Shah" }],
  openGraph: {
    title: "Tirth Shah - Portfolio",
    description: "AI Engineer and Full Stack Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}