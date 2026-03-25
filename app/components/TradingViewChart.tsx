"use client";

export default function TradingViewChart() {
  return (
    <section className="w-full rounded-2xl border border-white/10 bg-black/30 p-4 md:p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-white">
          Live Crypto Market Overview
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          Follow real-time cryptocurrency price action and market movement.
        </p>
      </div>

      <div className="h-[500px] w-full overflow-hidden rounded-xl">
        <iframe
          src="https://s.tradingview.com/widgetembed/?symbol=BINANCE:BTCUSDT&interval=D&theme=dark"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </section>
  );
}