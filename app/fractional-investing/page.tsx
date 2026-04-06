"use client";

import { useState } from "react";

export default function FractionalInvestingPage() {
  const [investment, setInvestment] = useState(5000);

  const yearlyReturn = 0.08;
  const monthly = ((investment * yearlyReturn) / 12).toFixed(2);

  return (
    <main className="bg-gray-950 text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">
          Investieren in Immobilien — ohne ganze Immobilie zu kaufen
        </h1>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Zugang zu kanadischen Immobilienprojekten mit geringem Einstieg.
          Potenzielles monatliches Einkommen durch anteilige Investitionen.
        </p>

        <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold">
          Kostenlose Erstberatung starten
        </button>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Wie funktioniert es?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-lg">1. Projekt auswählen</h3>
            <p className="text-gray-400">
              Zugang zu geprüften Immobilienprojekten
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">2. Anteil investieren</h3>
            <p className="text-gray-400">
              Einstieg bereits ab kleineren Beträgen möglich
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">3. Einnahmen erhalten</h3>
            <p className="text-gray-400">
              Potenzielle monatliche Erträge aus Vermietung
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-gray-900 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6">
          Beispiel: Mögliche monatliche Einnahmen
        </h2>

        <input
          type="range"
          min="1000"
          max="50000"
          step="500"
          value={investment}
          onChange={(e) => setInvestment(Number(e.target.value))}
          className="w-full mb-6"
        />

        <p className="text-gray-400">
          Investition: <span className="text-white">{investment} €</span>
        </p>

        <p className="text-gray-400">
          Geschätzte monatliche Einnahmen (8% jährlich):
        </p>

        <p className="text-3xl font-bold mt-2 text-yellow-400">
          ~ {monthly} € / Monat
        </p>
      </section>

      {/* TRUST */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Wichtiger Hinweis</h2>

        <p className="text-gray-400 max-w-3xl">
          Wir bieten keine garantierten Renditen und keine direkte Anlageberatung.
          Unser Service dient ausschließlich der Orientierung, Analyse und
          Unterstützung bei der Bewertung von Investitionsmöglichkeiten.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">
          Kostenloses Erstgespräch anfordern
        </h2>

        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded bg-gray-800"
          />

          <input
            type="email"
            placeholder="E-Mail"
            className="p-3 rounded bg-gray-800"
          />

          <select className="p-3 rounded bg-gray-800">
            <option>Investitionsbetrag wählen</option>
            <option>1.000€ – 5.000€</option>
            <option>5.000€ – 20.000€</option>
            <option>20.000€+</option>
          </select>

          <textarea
            placeholder="Beschreiben Sie kurz Ihre Situation oder Ziele"
            className="p-3 rounded bg-gray-800"
          />

          <button className="bg-yellow-500 text-black py-3 rounded-xl font-semibold">
            Anfrage senden
          </button>
        </form>
      </section>

    </main>
  );
}