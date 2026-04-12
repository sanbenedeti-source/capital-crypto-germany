import type { Metadata } from "next";
import Script from "next/script";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18084183990"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18084183990');
          `}
        </Script>

        <HeaderGate />
        {children}
      </body>
    </html>
  );
}