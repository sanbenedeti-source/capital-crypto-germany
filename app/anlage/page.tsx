export default function AnlagePage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              Digitale Vermögenswerte
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Strukturierte Orientierung im Bereich digitaler Assets
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Wir unterstützen Interessenten mit einer klaren, professionellen
              und nachvollziehbaren Einschätzung zu digitalen Vermögenswerten,
              Marktstruktur, Chancen und Risiken.
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

          <div className="rounded-[28px] border border-white/10 bg-[#07112b] p-8 shadow-2xl">
            <div className="mb-6">
              <h2 className="text-3xl font-semibold leading-tight">
                Unverbindliche Anfrage
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Beschreiben Sie kurz Ihr Interesse. Unser Team meldet sich mit
                einer ersten Einschätzung und weiteren Informationen.
              </p>
            </div>

            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Ihr Name"
                  className="rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-white outline-none placeholder:text-slate-500"
                />
                <input
                  type="email"
                  placeholder="E-Mail Adresse"
                  className="rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Telefonnummer"
                  className="rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-white outline-none placeholder:text-slate-500"
                />
                <input
                  type="text"
                  placeholder="Interessensbereich"
                  className="rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <textarea
                placeholder="Beschreiben Sie kurz Ihr Anliegen oder Ihre Ziele"
                rows={6}
                className="rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-white outline-none placeholder:text-slate-500"
              />

              <button
                type="submit"
                className="rounded-full bg-[#F3D24F] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                Anfrage senden
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="leistungen" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Wofür diese Seite gedacht ist
          </h2>
          <p className="mt-4 text-slate-300 leading-8">
            Diese Seite richtet sich an Personen und Unternehmen, die eine
            sachliche und strukturierte Orientierung zu digitalen Assets suchen
            — ohne übertriebene Versprechen und ohne aggressive Verkaufssprache.
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
        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
  <div className="mb-8 max-w-2xl">
    <h2 className="text-3xl font-semibold md:text-4xl">
      Für wen diese Seite geeignet ist
    </h2>
    <p className="mt-4 leading-8 text-slate-300">
      Diese Seite richtet sich an Personen und Unternehmen, die eine klare,
      sachliche und professionell strukturierte Orientierung im Bereich
      digitaler Assets suchen.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
      <h3 className="text-xl font-semibold">Privatpersonen</h3>
      <p className="mt-3 leading-7 text-slate-400">
        Für Interessenten, die sich fundiert mit digitalen Vermögenswerten
        auseinandersetzen möchten.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
      <h3 className="text-xl font-semibold">Unternehmer</h3>
      <p className="mt-3 leading-7 text-slate-400">
        Für Unternehmer, die den Bereich digitaler Assets besser verstehen und
        strukturiert einordnen möchten.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
      <h3 className="text-xl font-semibold">Langfristige Orientierung</h3>
      <p className="mt-3 leading-7 text-slate-400">
        Für alle, die eher auf Klarheit, Risiko-Bewusstsein und Struktur setzen
        als auf aggressive Verkaufssprache.
      </p>
    </div>
  </div>
</section>
      </section>
    </main>
  );
}