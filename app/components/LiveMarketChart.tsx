"use client";

import Script from "next/script";

export default function LiveMarketChart() {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#07112b] p-4 shadow-2xl">
      <div className="tradingview-widget-container h-[520px] w-full">
        <div className="tradingview-widget-container__widget h-full w-full" />
        <Script
          id="tradingview-advanced-chart"
          src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
          strategy="afterInteractive"
          type="text/javascript"
        >
          {`
            {
              "autosize": true,
              "symbol": "BINANCE:BTCUSDT",
              "interval": "240",
              "timezone": "Europe/Berlin",
              "theme": "dark",
              "style": "1",
              "locale": "de_DE",
              "allow_symbol_change": true,
              "support_host": "https://www.tradingview.com"
            }
          `}
        </Script>
      </div>
    </div>
  );
}