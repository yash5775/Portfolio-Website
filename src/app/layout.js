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
  title: "YASH | Digital Experiences",
  description: "Senior Creative Developer specializing in 3D interactions and minimalist interfaces.",
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
      >
        <SmoothScroll>
          {/* <Preloader /> - Disabled by user request */}
          <Cursor />
          <GrainOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
