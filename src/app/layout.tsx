import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aung Thu Htet | Software Engineering & AI/ML",
  description:
    "Portfolio of Aung Thu Htet, a software engineering student focused on software development, AI and machine learning.",
  openGraph: {
    title: "Aung Thu Htet | Software Engineering & AI/ML",
    description:
      "Software engineering, AI and machine learning projects.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}