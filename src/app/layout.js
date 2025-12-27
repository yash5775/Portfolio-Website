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

export const metadata = {
  metadataBase: new URL('https://yash-chaniyara.vercel.app'),
  title: "YASH | Portfolio",
  description: "Senior Creative Developer specializing in 3D interactions and minimalist interfaces.",
  openGraph: {
    title: "YASH | Portfolio",
    description: "Senior Creative Developer specializing in 3D interactions and minimalist interfaces.",
    url: 'https://yash-chaniyara.vercel.app',
    siteName: 'YASH Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "YASH | Portfolio",
    description: "Senior Creative Developer specializing in 3D interactions and minimalist interfaces.",
  },
  icons: {
    icon: [
      { url: '/favicon-v3.ico', sizes: 'any' },
      { url: '/icon-v3.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-v3.png' },
    ],
  },
};

import SmoothScroll from "@/components/ui/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import Cursor from "@/components/ui/Cursor";
import GrainOverlay from "@/components/ui/GrainOverlay";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <Preloader />
          <Cursor />
          <GrainOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
