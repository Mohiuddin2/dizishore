import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav/nav";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dizishore",
  description: "Digital Products Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased `}>
        <div>
        <Nav/>
        {children}
        </div>
      </body>
    </html>
  );
}
