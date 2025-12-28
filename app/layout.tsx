import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/component/Header";
import Footer from "@/components/component/Footer";
import "aos/dist/aos.css";
import AOSProvider from "@/lib/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meekman Books and Educational Services",
  description: "Meekman Books and Educational Services",
  metadataBase: new URL("https://meekman.org"),
  openGraph: {
    title: "Meekman",
    description:
      "Publishing quality educational books and delivering impactful seminars and workshops for schools across Nigeria.",
    siteName: "Meekman Books and Educational Services",
    images: [
      {
        url: "/images/comp_logo.jpg", // 1200x630
        width: 1200,
        height: 630,
        alt: "Meekman Books and Educational Services",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Meekman Books & Educational Services",
    description:
      "Educational publishing, teacher training, and school workshops across Nigeria.",
    images: ["/images/comp_logo.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
