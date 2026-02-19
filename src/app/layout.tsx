import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CBA Capital – Short-Term Business Finance",
  description:
    "Securing corporate momentum with short-term capital solutions. Transparent, fast, and bespoke capital for UK businesses.",
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml," +
          encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
              <!-- Bar 1: orange, short -->
              <rect x="0"  y="16" width="5" height="12" rx="1.5" fill="#f26522"/>
              <!-- Bar 2: orange, medium -->
              <rect x="7"  y="10" width="5" height="18" rx="1.5" fill="#f26522"/>
              <!-- Bar 3: navy, tall -->
              <rect x="14" y="0"  width="5" height="28" rx="1.5" fill="#0a1f44"/>
              <!-- Bar 4: navy, medium-short -->
              <rect x="21" y="12" width="5" height="16" rx="1.5" fill="#0a1f44"/>
            </svg>
          `),
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url:
          "data:image/svg+xml," +
          encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
              <rect x="0"  y="16" width="5" height="12" rx="1.5" fill="#f26522"/>
              <rect x="7"  y="10" width="5" height="18" rx="1.5" fill="#f26522"/>
              <rect x="14" y="0"  width="5" height="28" rx="1.5" fill="#0a1f44"/>
              <rect x="21" y="12" width="5" height="16" rx="1.5" fill="#0a1f44"/>
            </svg>
          `),
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-[#0a1f44]">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}