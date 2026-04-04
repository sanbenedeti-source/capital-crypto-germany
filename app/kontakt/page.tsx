export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            Kontakt
          </div>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            Kontaktieren Sie unser Team
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Nutzen Sie das Kontaktformular, um uns Ihr Anliegen mitzuteilen.
            Wir melden uns schnellstmöglich mit einer ersten Rückmeldung und
            weiteren Informationen.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border border-white/10 bg-[#07112b] p-8 shadow-2xl">
            <div className="mb-6">
              <h2 className="text-3xl font-semibold leading-tight">
                Nachricht senden
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Bitte geben Sie Ihre Kontaktdaten und eine kurze Beschreibung
                Ihres Anliegens an.
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
                  placeholder="Betreff"
                  className="rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <textarea
                rows={7}
                placeholder="Beschreiben Sie kurz Ihr Anliegen"
                className="rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-white outline-none placeholder:text-slate-500"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#F3D24F] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                Nachricht senden
              </button>
            </form>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-2xl font-semibold">Direkter Kontakt</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Für allgemeine Anfragen, Erstkontakt oder weitere Informationen
                können Sie uns jederzeit über das Formular kontaktieren.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-2xl font-semibold">Antwortzeit</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Unser Team bemüht sich um eine schnelle und strukturierte
                Rückmeldung auf Ihre Anfrage.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-2xl font-semibold">Hinweis</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Bitte beschreiben Sie Ihr Anliegen möglichst klar, damit wir
                Ihre Anfrage intern korrekt einordnen können.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}