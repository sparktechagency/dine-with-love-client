import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const roboto = Rubik({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Dine With Love | Authentic Connections Over Curated Dinner",
  description:
    "Skip the small talk and find genuine human connection. Dine With Love pairs you with compatible companions for a premium, curated dining experience in the finest restaurants.",
  keywords: [
    "dating",
    "curated dining",
    "authentic connection",
    "dinner dates",
    "premium dating",
    "compatibility matching",
    "Dine With Love",
  ],
  authors: [{ name: "Dine With Love Team" }],
  openGraph: {
    title: "Dine With Love | Authentic Connections Over Curated Dinner",
    description:
      "The premium dating experience where real chemistry meets fine dining. Find your match and enjoy a curated dinner experience.",
    url: "https://dinewithlove.com",
    siteName: "Dine With Love",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dine With Love | Authentic Connections Over Curated Dinner",
    description:
      "Find genuine connection over a shared meal. Join Dine With Love for curated dating experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Toaster } from "sonner";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className}`}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
};

export default RootLayout;
