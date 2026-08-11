import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rrsoftsolutions.net"),
  title: {
    default: "RR Software Solutions — Build to Scale",
    template: "%s | RR Software Solutions",
  },
  description:
    "Houston technology partner for custom software, IT consulting, cloud, healthcare RCM, and IT staffing. Build to scale.",
  keywords: [
    "software development",
    "IT consulting",
    "cloud management",
    "revenue cycle management",
    "IT staffing",
    "digital transformation",
  ],
  authors: [{ name: "RR Software Solutions" }],
  creator: "RR Software Solutions",
  publisher: "RR Software Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rrsoftsolutions.net",
    siteName: "RR Software Solutions",
    title: "RR Software Solutions — Build to Scale",
    description:
      "Software, cloud, healthcare revenue operations, and IT talent—built to scale from Houston.",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "RR Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RR Software Solutions — Build to Scale",
    description:
      "Software, cloud, healthcare revenue operations, and IT talent—built to scale from Houston.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
