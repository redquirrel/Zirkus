import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DropdownProvider } from "@/app/utils/DropdownContext";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bewegt.sein Coaching",
  description: "Sofie Lorenz is teaching Circus Arts and Movement to people on all skill levels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <DropdownProvider>     
        {children}
        </DropdownProvider>
      </body>
    </html>
  );
}
