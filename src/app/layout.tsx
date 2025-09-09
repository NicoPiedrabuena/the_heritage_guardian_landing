import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Heritage Guardian",
  description: "Página en construcción con Next.js",

  // Favicon
  icons: {
    icon: "/logo/favicon.ico",
    apple: "/favicon.png",
  },

  // Open Graph
  openGraph: {
    title: "The Heritage Guardian",
    description: "-",
    url: "https://www.theheritageguardian.com",
    siteName: "The Heritage Guardian",
    images: [
      {
        url: "/logo/apple-touch-icon.png", // poné tu logo o una imagen representativa
        width: 1200,
        height: 630,
        alt: "The Heritage Guardian",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "The Heritage Guardian",
    description: "Página en construcción con Next.js",
    images: ["/logo/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
