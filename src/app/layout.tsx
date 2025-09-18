import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "De",
description: "Client-side auth with Next.js + TS + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
