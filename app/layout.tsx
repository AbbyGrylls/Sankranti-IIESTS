// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import { Cinzel, Montserrat } from "next/font/google";
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});
export const metadata: Metadata = {
  title: "Sankranthi-IIESTS",
  description: "Website for Sankranthi celebrations at IIEST, Shibpur",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/LOGO.svg" type="image/svg+xml" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
