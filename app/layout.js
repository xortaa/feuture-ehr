import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Tamaraw Medical Center",
  description: "Tamraw Medical Center EHR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
