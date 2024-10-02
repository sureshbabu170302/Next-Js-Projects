import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metaData: Metadata = {
  title: "Next.js Project",
  description: "A Next.js project with TypeScript and TailwindCSS.",
  keywords: "Next.js, Typescript, TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
