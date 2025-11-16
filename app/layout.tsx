// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";

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
    <html lang="en">
      <head>
        <link rel="icon" href="/LOGO.svg" type="image/svg+xml" />
      </head>
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  );
}