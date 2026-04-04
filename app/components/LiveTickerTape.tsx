"use client";

import Script from "next/script";

export default function LiveTickerTape() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget" />
        <Script
          id="tradingview-ticker-tape"
          src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
          strategy="afterInteractive"
          type="text/javascript"
        >
          {`
            {
              "symbols": [
                { "proName": "BINANCE:BTCUSDT", "title": "Bitcoin" },
                { "proName": "BINANCE:ETHUSDT", "title": "Ethereum" },
                { "proName": "BINANCE:SOLUSDT", "title": "Solana" },
                { "proName": "BINANCE:XRPUSDT", "title": "XRP" },
                { "proName": "BINANCE:BNBUSDT", "title": "BNB" }
              ],
              "showSymbolLogo": true,
              "isTransparent": true,
              "displayMode": "adaptive",
              "colorTheme": "dark",
              "locale": "de_DE"
            }
          `}
        </Script>
      </div>
    </div>
  );
}