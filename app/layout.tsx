import "@/style/globals.css";
import type { Metadata } from "next";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Outfit } from "next/font/google";
import type { ReactNode } from "react";

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
      <body
        className={`${outfit.className} flex h-screen w-screen items-center justify-center bg-lightGray`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
