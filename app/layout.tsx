import type { Metadata } from "next";
import "./globals.css";

const description =
  "Tirth Shah is an AI engineer in Los Angeles building production AI systems, applied machine learning research, and thoughtful full-stack applications.";
export const metadata: Metadata = {
  metadataBase: new URL("https://bytirth.vercel.app"),
  title: "Tirth Shah — AI Engineer & Creative Problem Solver",
  description,
  authors: [{ name: "Tirth Shah" }],
  keywords: [
    "Tirth Shah",
    "AI engineer",
    "GraphRAG",
    "machine learning",
    "full-stack developer",
    "Los Angeles",
  ],
  openGraph: {
    title: "Tirth Shah — Engineering what comes next.",
    description,
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirth Shah — Engineering what comes next.",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
