import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portnext.com"), // Using placeholder domain, update later if known
  title: {
    default: "Portnext Innovation | Software Development & Digital Marketing",
    template: "%s | Portnext Innovation",
  },
  description:
    "We’re the right tech-solutions partner for all your digital innovation & transformation needs. Empowering enterprises and startups alike to stay ahead in an increasingly digital-driven market.",
  keywords: [
    "Software Development",
    "Digital Marketing",
    "Web Development",
    "Mobile Apps",
    "Portnext Innovation",
    "Tech Solutions",
    "Digital Transformation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Portnext Innovation",
    title: "Portnext Innovation | Software Development & Digital Marketing",
    description:
      "Transforming Ideas into Reality with cutting-edge software solutions.",
    images: [
      {
        url: "/img/hero-image.png", // Using an existing banner image
        width: 1200,
        height: 630,
        alt: "Portnext Innovation Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portnext Innovation",
    description: "Software Development & Digital Marketing Specialists",
    images: ["/img/hero-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${brandon.variable} antialiased bg-white text-slate-900 `}
      >
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
