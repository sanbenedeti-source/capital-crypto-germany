import LiveTickerTape from "@/app/components/LiveTickerTape";
import LiveMarketChart from "@/app/components/LiveMarketChart";

export default function AnlagePage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <LiveTickerTape />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              Live Market
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Strategische Orientierung für digitale Vermögenswerte
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Live Kursdaten, Marktbewegungen und professionelle Orientierung
              für Interessenten im Bereich digitaler Assets — mit Fokus auf
              Marktverständnis, Risiko und Struktur.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/kontakt"
                className="rounded-full bg-[#F3D24F] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                Beratung anfragen
              </a>

              <a
                href="#leistungen"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Mehr erfahren
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-2xl font-semibold">Strategie</div>
                <div className="mt-1 text-sm text-slate-400">
                  Strukturierte Einordnung
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-2xl font-semibold">Risiko</div>
                <div className="mt-1 text-sm text-slate-400">
                  Klare Risiko-Perspektive
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-2xl font-semibold">Markt</div>
                <div className="mt-1 text-sm text-slate-400">
                  Überblick & Orientierung
                </div>
              </div>
            </div>
          </div>

          <div>
            <LiveMarketChart />
          </div>
        </div>
      </section>

      <section id="leistungen" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Wofür diese Seite gedacht ist
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Diese Seite richtet sich an Personen und Unternehmen, die eine
            sachliche, strukturierte und professionelle Orientierung zu
            digitalen Assets suchen — ohne aggressive Verkaufssprache und ohne
            unrealistische Versprechen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-xl font-semibold">Marktverständnis</h3>
            <p className="mt-3 leading-7 text-slate-400">
              Einordnung von Marktumfeld, Dynamiken und relevanten Faktoren für
              fundierte Entscheidungen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-xl font-semibold">Risiko-Bewusstsein</h3>
            <p className="mt-3 leading-7 text-slate-400">
              Klare Kommunikation zu Chancen, Risiken und realistischen
              Erwartungen im Bereich digitaler Vermögenswerte.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-xl font-semibold">Strukturierte Beratung</h3>
            <p className="mt-3 leading-7 text-slate-400">
              Professionelle Erstorientierung mit nachvollziehbarer Sprache und
              klarer Darstellung der nächsten Schritte.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-[#07112b] p-8 shadow-2xl">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-semibold leading-tight">
                Unverbindliche Anfrage
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Beschreiben Sie kurz Ihr Interesse. Unser Team meldet sich mit
                einer ersten Einschätzung und weiteren Informationen.
              </p>
            </div>

            <a
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#F3D24F] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}