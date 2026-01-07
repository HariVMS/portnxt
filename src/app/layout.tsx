import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const brandon = localFont({
  src: [
    {
      path: "../../font/brandon/Brandon Text Regular Regular/Brandon Text Regular Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-brandon",
});

export const metadata: Metadata = {
  title: "Portnext Innovation | Software Development & Digital Marketing",
  description: "Transforming Ideas into Reality with cutting-edge software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${brandon.variable} antialiased bg-white text-slate-900 !font-brandon`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
