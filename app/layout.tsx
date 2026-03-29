import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Capital Crypto Germany",
  description: "Capital Crypto Germany",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="de">
  <head>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=AW-18036682227"
      strategy="afterInteractive"
    />
    <Script id="google-ads" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-18036682227');
  `}
</Script>
  </head>

  <body className="antialiased">
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1497013148020769');
              fbq('track', 'PageView');
            `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1497013148020769&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}