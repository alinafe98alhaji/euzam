import type { Metadata } from "next";
import { Oranienbaum } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

// Oranienbaum (applied site-wide)
const oranienbaum = Oranienbaum({
  subsets: ["latin"],
  weight: "400", // only available weight
});

export const metadata: Metadata = {
  title: "Euzam Consulting Zambia - Luxury Real Estate Experts | EUZAM Consulting Zambia",
  description:
    "Euzam Consulting Zambia specializes in luxury and destination tourism real estate, agribusiness, and management consulting. We shape tomorrow's luxury living in Zambia and beyond, providing expert guidance and innovative solutions for discerning clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oranienbaum.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
