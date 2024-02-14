import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Logo from "@/public/logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Feuture Medical Center",
  description: "Feuture Medical Center - Morayta Branch Demo EHR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <main>{children}</main>
      </body>
    </html>
  );
}
