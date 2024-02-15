import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Feuture Medical Center",
  description: "Feuture Medical Center - Morayta Branch Demo EHR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
