import Navbar from "@/components/Shared/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "ProServe",
  description: "Empowering Smart Solutions, Elevating Service Excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
