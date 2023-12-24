import type { Metadata } from "next";
import type { NextFont } from "next/dist/compiled/@next/font";
import type { ReactNode } from "react";
import { Outfit } from "next/font/google";
import "@/style/globals.css";

const outfit: NextFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "QR code component",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
