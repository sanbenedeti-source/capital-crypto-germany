export default function AnalysePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-4">
            Capital Crypto Germany
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Blockchain Analyse
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 leading-8 mb-10">
            Analyse von Transaktionen, Wallet-Strukturen und
            Plattformbewegungen zur besseren Nachvollziehbarkeit
            von digitalen Vermögenswerten.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/kontakt"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Kontakt aufnehmen
            </a>

            <a
              href="/anlage"
              className="border border-zinc-600 px-6 py-3 rounded-xl text-white hover:bg-zinc-900 transition"
            >
              Mehr erfahren
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
            <h2 className="text-xl font-semibold mb-3">Transaktionsanalyse</h2>
            <p className="text-zinc-400 leading-7">
              Strukturierte Auswertung von Wallet-Bewegungen,
              Transaktionsketten und digitalen Zahlungsflüssen.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
            <h2 className="text-xl font-semibold mb-3">Wallet-Struktur</h2>
            <p className="text-zinc-400 leading-7">
              Prüfung von Zusammenhängen zwischen Adressen,
              Zielwallets und möglichen Zwischenschritten.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
            <h2 className="text-xl font-semibold mb-3">Dokumentation</h2>
            <p className="text-zinc-400 leading-7">
              Klare und nachvollziehbare Aufbereitung der vorliegenden
              Informationen für den weiteren Überblick.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}