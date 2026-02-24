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
  metadataBase: new URL("https://portnxt.in"),
  title: {
    default: "Port NxT Digital Solutions | Technology & Consulting Partner",
    template: "%s | Port NxT Digital Solutions",
  },
  description:
    "Port NxT Digital Solutions is a full-service IT consulting and technology partner helping businesses accelerate digital transformation through Data Engineering, AI Solutions, Microsoft Fabric, Power Platform, Web & App Development, and Cloud Engineering.",
  keywords: [
    "Data Engineering",
    "AI Solutions",
    "Microsoft Fabric",
    "Cloud Engineering",
    "Power Platform",
    "Web Development",
    "Mobile Apps",
    "Port NxT Digital Solutions",
    "Digital Transformation",
    "Salesforce Consulting",
    "Dynamics 365",
    "Oracle ERP",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Port NxT Digital Solutions",
    title: "Port NxT Digital Solutions | Technology & Consulting Partner",
    description:
      "Transforming Digital Ambitions into Scalable Technology Solutions",
    images: [
      {
        url: "/portnxt/Name_Logo.png",
        width: 1200,
        height: 630,
        alt: "Port NxT Digital Solutions Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Port NxT Digital Solutions",
    description:
      "Transforming Digital Ambitions into Scalable Technology Solutions",
    images: ["/portnxt/Name_Logo.png"],
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
