
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Siddharth Kumar | Elite Personal Brand Website",
    template: "%s | Siddharth Kumar",
  },
  description:
    "Full stack, AI/ML, and cloud engineering portfolio with case studies, system design, certifications, and contact options.",
  metadataBase: new URL("https://siddharthkumar.dev"),
  openGraph: {
    title: "Siddharth Kumar | Full Stack · AI/ML · Cloud Engineer",
    description:
      "A high-signal portfolio showcasing engineering projects, architecture thinking, and technical writing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
