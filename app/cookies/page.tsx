'use client';

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-red-950 to-amber-700 text-white font-bold">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2">
            <img
              src="/favicon.png"
              alt="Capital Crypto Germany"
              className="h-7 w-7 object-contain"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide text-white">
                CAPITAL CRYPTO GERMANY
              </p>
              <p className="text-xs text-slate-300">
                Blockchain Analyse & Beratung
              </p>
            </div>
          </div>

          <a
            href="/"
            className="rounded-full bg-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-white"
          >
            Back to Home
          </a>
        </div>
      </header>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-900/35 p-8 shadow-lg">
          <h1 className="mb-6 text-3xl font-bold text-white">Cookies Policy</h1>

          <p className="mb-4 text-slate-200">
            This website may use cookies to improve the browsing experience and to understand how visitors interact with the website.
          </p>

          <h2 className="mb-2 mt-6 text-xl font-bold text-white">What Are Cookies</h2>

          <p className="mb-4 text-slate-200">
            Cookies are small files stored on your device when visiting a website. They help websites function properly and provide analytical information about website usage.
          </p>

          <h2 className="mb-2 mt-6 text-xl font-bold text-white">How We Use Cookies</h2>

          <ul className="ml-6 list-disc text-slate-200">
            <li>Website performance monitoring</li>
            <li>Understanding visitor interaction</li>
            <li>Improving user experience</li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-900 py-10 text-center text-sm text-slate-300">
        © 2026 CAPITAL CRYPTO GERMANY
      </footer>
    </main>
  );
}