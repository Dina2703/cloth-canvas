import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cloth Canvas",
  description:
    "Explore the best style clothes in the world at [Company Name]! From trendy essentials to timeless classics, find everything you need for your wardrobe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
