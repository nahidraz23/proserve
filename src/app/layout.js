import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/HomePage/Header/Header";
import AuthProvider from "@/providers/AuthProvider";

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
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
