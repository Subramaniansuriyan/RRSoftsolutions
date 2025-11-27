import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rrsoftwsolutions.com"),
  title: {
    default: "RR soft solutions - Empowering Businesses Through Technology",
    template: "%s | RR soft solutions",
  },
  description:
    "RR soft solutions provides custom software development, IT consulting, cloud management, RCM, and staffing services. Turning ideas into digital reality.",
  keywords: [
    "software development",
    "IT consulting",
    "cloud management",
    "revenue cycle management",
    "IT staffing",
    "digital transformation",
  ],
  authors: [{ name: "RR soft solutions" }],
  creator: "RR soft solutions",
  publisher: "RR soft solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rrsoftwsolutions.com",
    siteName: "RR soft solutions",
    title: "RR soft solutions - Empowering Businesses Through Technology",
    description:
      "Combining human creativity with cutting-edge technology to help businesses grow.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RR soft solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RR soft solutions - Empowering Businesses Through Technology",
    description:
      "Combining human creativity with cutting-edge technology to help businesses grow.",
    images: ["/og-image.jpg"],
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
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
