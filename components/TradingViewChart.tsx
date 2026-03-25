"use client";

import { useEffect, useRef } from "react";

export default function TradingViewChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      calendar: false,
      details: false,
      hide_side_toolbar: true,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: false,
      hotlist: false,
      save_image: true,
      backgroundColor: "#0F0F0F",
      gridColor: "rgba(242, 242, 242, 0.06)",
      watchlist: ["BINANCE:BTCUSDT", "BINANCE:ETHUSDT", "BINANCE:BNBUSDT"],
      withdateranges: false,
      compareSymbols: [],
      studies: [],
      container_id: "tradingview_chart"
    });

    const wrapper = document.createElement("div");
    wrapper.className = "tradingview-widget-container";
    wrapper.style.height = "100%";
    wrapper.style.width = "100%";

    const chart = document.createElement("div");
    chart.id = "tradingview_chart";
    chart.style.height = "100%";
    chart.style.width = "100%";

    wrapper.appendChild(chart);
    wrapper.appendChild(script);
    containerRef.current.appendChild(wrapper);
  }, []);

  return (
    <section className="mt-12 w-full rounded-2xl border border-white/10 bg-black/30 p-4 md:p-6">
      <h2 className="mb-2 text-2xl font-bold text-white">
        Live Crypto Market Overview
      </h2>
      <p className="mb-4 text-sm text-gray-300">
        Follow real-time cryptocurrency price action and market movement.
      </p>

      <div className="h-[500px] w-full overflow-hidden rounded-xl">
        <div ref={containerRef} className="h-full w-full" />
      </div>
    </section>
  );
}