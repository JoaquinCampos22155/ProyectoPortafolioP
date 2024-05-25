import type { Metadata } from "next";
import { Radio_Canada } from "next/font/google";
import "./globals.css";

const radio_canada = Radio_Canada({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio JJCampos",
  description: "Joaquin Campos Portfolio CS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={radio_canada.className}>{children}</body>
    </html>
  );
}
