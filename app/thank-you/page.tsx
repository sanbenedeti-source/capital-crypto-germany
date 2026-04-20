"use client";

import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    // 👉 Google Ads Conversion
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18084183990/TDM-CPSI_z4cELb_mq9D",
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020817] text-white">
      <div className="text-center max-w-xl p-6">
        <h1 className="text-3xl font-bold mb-4">
          Vielen Dank!
        </h1>
        <p className="text-lg mb-6">
          Ihre Anfrage wurde erfolgreich gesendet. Unser Team wird sich in Kürze bei Ihnen melden.
        </p>

        <a
          href="/"
          className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Zurück zur Startseite
        </a>
      </div>
    </div>
  );
}