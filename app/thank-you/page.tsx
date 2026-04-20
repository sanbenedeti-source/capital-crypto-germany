"use client";

import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      console.log("🔥 Conversion fired");

      (window as any).gtag("event", "conversion", {
        send_to: "AW-18084183990/TDM-CPSI_z4cELb_mq9D",
      });
    } else {
      console.log("❌ gtag NOT FOUND");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020817] text-white">
      <div className="text-center max-w-xl p-6">
        <h1 className="text-3xl font-bold mb-4">
          Vielen Dank!
        </h1>
        <p className="text-lg mb-6">
          Ihre Anfrage wurde erfolgreich gesendet.
        </p>

        <a
          href="/"
          className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
        >
          Zurück
        </a>
      </div>
    </div>
  );
}