import type { Metadata } from "next";
import HeaderGate from "./HeaderGate";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capital Crypto Germany",
  description: "Blockchain Analyse & Beratung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-[#020817] text-white antialiased">
        <HeaderGate />
        {children}
      </body>
    </html>
  );
}