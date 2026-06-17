import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Siddharth Kumar | Full Stack, AI/ML & Cloud Engineer",
    template: "%s | Siddharth Kumar",
  },
  description:
    "Full stack, AI/ML, and cloud engineering portfolio with projects, case studies, certifications, and experience.",
  metadataBase: new URL("https://siddharthkumar.dev"),
  keywords: [
    "Full Stack Developer",
    "AI/ML Engineer",
    "Cloud Engineer",
    "DevOps",
    "Web Development",
    "Machine Learning",
  ],
  creator: "Siddharth Kumar",
  openGraph: {
    title: "Siddharth Kumar | Full Stack, AI/ML & Cloud Engineer",
    description:
      "Full stack, AI/ML, and cloud engineering portfolio showcasing production-ready projects and technical expertise.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Kumar | Full Stack, AI/ML & Cloud Engineer",
    description:
      "Full stack, AI/ML, and cloud engineering portfolio with projects, certifications, and experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
