import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header_Footer/Header";
import Footer from "../components/Header_Footer/Footer";

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
        <Header/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
