import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSansRegular = localFont({
  src: "../../public/fonts/InstrumentSans-Regular.ttf",
  variable: "--font-instrument-regular",
});

const instrumentSansSemiBold = localFont({
  src: "../../public/fonts/InstrumentSans-SemiBold.ttf",
  variable: "--font-instrument-semibold",
});

export const metadata: Metadata = {
  title: "Privacy Policy - EvacuMate",
  description: "Privacy Policy for EvacuMate iOS App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSansRegular.variable} ${instrumentSansSemiBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
