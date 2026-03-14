'use client';

import { useState } from 'react';

type Language = 'de' | 'en';

type Translation = {
  brandSub: string;
  nav1: string;
  nav2: string;
  nav3: string;
  nav4: string;
  ctaTop: string;
  heroTitle: string;
  heroText: string;
  heroBtn1: string;
  heroBtn2: string;
  langLabel: string;
  intakeBadge: string;
  intakeJump: string;
  section1Title: string;
  section1Text: string;
  items1: string[];
  section2Title: string;
  section3Title: string;
  steps: [string, string][];
  formTitle: string;
  formName: string;
  formEmail: string;
  formPlatform: string;
  formWallet: string;
  formTx: string;
  formDesc: string;
  formBtn: string;
  intakeIntro: string;
  formNote: string;
  formSecondaryCta: string;
  formSecondaryText: string;
  faqTitle: string;
  faqs: [string, string][];
  whatsapp: string;
};

const translations: Record<Language, Translation> = {
  de: {
    brandSub: 'Blockchain Analyse & Beratung',
    nav1: 'Analyse',
    nav2: 'Blockchains',
    nav3: 'Prozess',
    nav4: 'FAQ',
    ctaTop: 'Kostenlose Analyse',
    heroTitle: 'Blockchain-Analyse für verdächtige Krypto-Transaktionen',
    heroText:
      'Wir analysieren Wallet-Bewegungen, verfolgen Transaktionen über mehrere Blockchains und erstellen strukturierte Analyseberichte zur besseren Einordnung komplexer Krypto-Situationen.',
    heroBtn1: 'Analyse starten',
    heroBtn2: 'Wie es funktioniert',
    langLabel: 'Sprache',
    intakeBadge: 'Fallprüfung',
    intakeJump: 'Zur Fallprüfung',
    section1Title: 'Was wir analysieren',
    section1Text:
      'Blockchain-Transaktionen können komplexe Geldflüsse enthalten. Unsere Analyse konzentriert sich auf die Nachverfolgung von Wallet-Transfers und die strukturierte Darstellung der Transaktionshistorie.',
    items1: [
      'Wallet-Transaktionsanalyse',
      'Nachverfolgung von Blockchain-Transfers',
      'Identifikation verbundener Wallets',
      'Analyse von Broker-Plattformen',
      'Untersuchung verdächtiger Transaktionsketten',
      'Dokumentation der Geldflüsse',
    ],
    section2Title: 'Unterstützte Blockchain-Netzwerke',
    section3Title: 'Unser Analyseprozess',
    steps: [
      ['01', 'Beschreibung der Situation und erste Datensammlung'],
      ['02', 'Analyse der Blockchain-Transaktionen'],
      ['03', 'Strukturierter Analysebericht'],
    ],
    formTitle: 'Kostenlose Fallprüfung (Krypto-Recovery Analyse)',
    formName: 'Ihr Name',
    formEmail: 'E-Mail Adresse',
    formPlatform: 'Name der Plattform oder des Brokers',
    formWallet: 'Wallet-Adresse (optional)',
    formTx: 'Transaktions-ID / Hash (optional)',
    formDesc: 'Beschreiben Sie kurz Ihr Problem oder den verlorenen Krypto-Fall',
    formBtn: 'Fall zur Prüfung senden',
    intakeIntro:
      'Nutzen Sie dieses Formular, um Ihren Fall kurz zu schildern. Die erste Fallprüfung dient der Orientierung und hilft zu verstehen, ob eine weiterführende Analyse sinnvoll sein könnte.',
    formNote:
      'Für eine bessere erste Einschätzung können Sie Plattformname, Wallet-Adresse, Transaktionsdaten und eine kurze Beschreibung des Problems angeben.',
    formSecondaryCta: 'Zum Formular',
    formSecondaryText:
      'Nutzen Sie dieses Formular für die erste Fallprüfung. Eine separate Unterseite kann später ergänzt werden.',
    faqTitle: 'Häufige Fragen',
    faqs: [
      [
        'Ist die Analyse kostenlos?',
        'Die erste Fallprüfung hilft zu verstehen, ob eine weitere Analyse des Krypto-Falls sinnvoll ist und welche nächsten Schritte möglich sein könnten.',
      ],
      [
        'Garantieren Sie eine Rückgewinnung?',
        'Nein. Jede Situation ist unterschiedlich und wird individuell bewertet.',
      ],
      [
        'Welche Daten werden benötigt?',
        'Wallet-Adressen, Plattformname und Transaktionsinformationen.',
      ],
      [
        'Wie lange dauert eine Analyse?',
        'Die erste Einschätzung erfolgt normalerweise innerhalb von 24-48 Stunden.',
      ],
    ],
    whatsapp: 'WhatsApp',
  },
  en: {
    brandSub: 'Blockchain Analysis & Advisory',
    nav1: 'Analysis',
    nav2: 'Blockchains',
    nav3: 'Process',
    nav4: 'FAQ',
    ctaTop: 'Free Analysis',
    heroTitle: 'Blockchain Analysis for Suspicious Crypto Transactions',
    heroText:
      'We analyze wallet movements, trace transactions across multiple blockchains, and prepare structured reports to better understand complex crypto-related situations.',
    heroBtn1: 'Start Analysis',
    heroBtn2: 'How it works',
    langLabel: 'Language',
    intakeBadge: 'Case Review Intake',
    intakeJump: 'Go to Case Review',
    section1Title: 'What We Analyze',
    section1Text:
      'Blockchain transactions may involve complex fund flows. Our review focuses on tracing wallet transfers and presenting transaction history in a structured way.',
    items1: [
      'Wallet transaction analysis',
      'Tracing blockchain transfers',
      'Identification of related wallets',
      'Broker platform analysis',
      'Review of suspicious transaction chains',
      'Documentation of fund flows',
    ],
    section2Title: 'Supported Blockchain Networks',
    section3Title: 'Our Analysis Process',
    steps: [
      ['01', 'Case description and initial data collection'],
      ['02', 'Blockchain transaction analysis'],
      ['03', 'Structured analysis report'],
    ],
    formTitle: 'Free Case Review (Crypto Recovery Analysis)',
    formName: 'Your name',
    formEmail: 'Email address',
    formPlatform: 'Name of the platform or broker',
    formWallet: 'Wallet address (optional)',
    formTx: 'Transaction ID / hash (optional)',
    formDesc: 'Briefly describe your issue or lost crypto case',
    formBtn: 'Submit case for review',
    intakeIntro:
      'Use this form to briefly describe your case. The initial case review is designed to provide direction and help determine whether deeper analysis may be appropriate.',
    formNote:
      'For a stronger initial review, you may include the platform name, wallet address, transaction details, and a short summary of the issue.',
    formSecondaryCta: 'Go to form',
    formSecondaryText:
      'Use this form for the initial case review. A separate subpage can be added later if needed.',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      [
        'Is the analysis free?',
        'The first case review helps determine whether deeper analysis of the crypto case may be useful and what possible next steps could be considered.',
      ],
      [
        'Do you guarantee recovery?',
        'No. Every situation is different and is assessed individually.',
      ],
      [
        'What data is needed?',
        'Wallet addresses, platform name, and transaction details are helpful.',
      ],
      [
        'How long does analysis take?',
        'The initial review is usually provided within 24–48 hours.',
      ],
    ],
    whatsapp: 'WhatsApp',
  },
};

const chains = [
  { name: 'Bitcoin (BTC)', icon: '/btc.png', link: 'https://coinmarketcap.com/currencies/bitcoin/' },
  { name: 'Ethereum (ETH)', icon: '/eth.png', link: 'https://coinmarketcap.com/currencies/ethereum/' },
  { name: 'Tron (TRX)', icon: '/trx.png', link: 'https://coinmarketcap.com/currencies/tron/' },
  { name: 'BNB Chain', icon: '/bnb.png', link: 'https://coinmarketcap.com/currencies/bnb/' },
  { name: 'Polygon', icon: '/polygon.png', link: 'https://coinmarketcap.com/currencies/polygon/' },
  { name: 'Solana', icon: '/sol.png', link: 'https://coinmarketcap.com/currencies/solana/' },
];

export default function CapitalCryptoGermanyLanding() {
  const [lang, setLang] = useState<Language>('de');
  const t = translations[lang];

  return (
<main className="min-h-screen bg-gradient-to-b from-black via-red-950 to-amber-700 text-white font-bold">      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/logo-capital-crypto-germany.png"
              alt="Capital Crypto Germany"
              className="h-12 w-12 rounded-2xl object-cover"
            />
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">
                CAPITAL CRYPTO GERMANY
              </p>
              <p className="text-xs text-slate-300">{t.brandSub}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a href="#analyse" className="hover:text-white">
              {t.nav1}
            </a>
            <a href="#netzwerke" className="hover:text-white">
              {t.nav2}
            </a>
            <a href="#prozess" className="hover:text-white">
              {t.nav3}
            </a>
            <a href="#faq" className="hover:text-white">
              {t.nav4}
            </a>
          </nav>

          <a
            href="#kontakt-form"
            className="rounded-full bg-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-white"
          >
            {t.ctaTop}
          </a>
        </div>
      </header>

      <aside className="fixed right-4 top-1/2 z-40 -translate-y-1/2 rounded-2xl border border-white/10 bg-slate-900/80 p-2 shadow-xl backdrop-blur">
        <p className="px-2 pb-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">
          {t.langLabel}
        </p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setLang('de')}
            className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
              lang === 'de'
                ? 'bg-slate-200 text-slate-900'
                : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
            }`}
          >
            <span>🇩🇪</span>
            DE
          </button>
          <button
            onClick={() => setLang('en')}
            className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
              lang === 'en'
                ? 'bg-slate-200 text-slate-900'
                : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
            }`}
          >
            <span>🇬🇧</span>
            EN
          </button>
        </div>
      </aside>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/40 px-4 py-2 text-sm text-slate-200 shadow-sm">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              {t.intakeBadge}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-200">{t.heroText}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontakt-form"
                className="inline-flex animate-pulse items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/15 px-5 py-3 text-sm font-semibold text-amber-100 shadow-lg shadow-amber-900/20 transition hover:scale-[1.02] hover:bg-amber-300/20"
              >
                <span>↓</span>
                {t.intakeJump}
              </a>

              <a
                href="#kontakt-form"
                className="rounded-xl bg-slate-200 px-6 py-4 font-semibold text-slate-900 transition hover:bg-white"
              >
                {t.heroBtn1}
              </a>

              <a
                href="#prozess"
                className="rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                {t.heroBtn2}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-white/5 blur-3xl" />
            <img
              src="/hero-capital-crypto-germany.png"
              alt="Blockchain analysis dashboard"
              className="relative w-full rounded-[2rem] border border-white/10 shadow-2xl shadow-black/30"
            />
          </div>
        </div>
      </section>

      <section id="analyse" className="border-t border-white/10 bg-slate-800/35">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white">{t.section1Title}</h2>
            <p className="mt-4 text-slate-200">{t.section1Text}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.items1.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-900/35 p-6 shadow-sm"
              >
                <p className="text-sm text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="netzwerke" className="border-t border-white/10 bg-slate-800/25">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white">{t.section2Title}</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {chains.map((chain) => (
  <a
    key={chain.name}
    href={chain.link}
    target="_blank"
    rel="noreferrer"
    className="rounded-2xl border border-white/10 bg-slate-900/35 p-6 text-center shadow-sm hover:bg-slate-900/60 transition"
  >
    <img
      src={chain.icon}
      alt={chain.name}
      className="mx-auto mb-3 h-12 w-12 rounded-full object-contain"
    />
    <p className="font-semibold text-white">{chain.name}</p>
  </a>
))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-800/25">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <h2 className="mb-6 text-3xl font-semibold text-white">
      Crypto Market Information
    </h2>

    <p className="mb-10 text-slate-200">
      You can follow cryptocurrency market data through trusted public platforms.
    </p>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <a
        href="https://coinmarketcap.com"
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl border border-white/10 bg-slate-900/35 p-6 text-center transition hover:bg-slate-900/60"
      >
        <p className="font-semibold text-white">CoinMarketCap</p>
        <p className="mt-2 text-sm text-slate-300">
          Global crypto market data
        </p>
      </a>

      <a
        href="https://www.coingecko.com"
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl border border-white/10 bg-slate-900/35 p-6 text-center transition hover:bg-slate-900/60"
      >
        <p className="font-semibold text-white">CoinGecko</p>
        <p className="mt-2 text-sm text-slate-300">
          Prices and market analytics
        </p>
      </a>

      <a
        href="https://www.tradingview.com"
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl border border-white/10 bg-slate-900/35 p-6 text-center transition hover:bg-slate-900/60"
      >
        <p className="font-semibold text-white">TradingView</p>
        <p className="mt-2 text-sm text-slate-300">
          Professional market charts
        </p>
      </a>

      <a
        href="https://www.binance.com/en/markets"
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl border border-white/10 bg-slate-900/35 p-6 text-center transition hover:bg-slate-900/60"
      >
        <p className="font-semibold text-white">Binance Markets</p>
        <p className="mt-2 text-sm text-slate-300">
          Cryptocurrency trading markets
        </p>
      </a>
    </div>
  </div>
</section>
<section id="prozess" className="border-t border-white/10 bg-slate-800/35">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white">{t.section3Title}</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.steps.map(([step, text]) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-slate-900/35 p-6 shadow-sm"
              >
                <p className="font-semibold text-slate-300">{step}</p>
                <p className="mt-2 text-sm text-slate-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt-form" className="border-t border-white/10 bg-slate-800/25">
        <div className="mx-auto max-w-xl px-6 py-20 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/40 px-4 py-2 text-sm text-slate-200 shadow-sm">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            {t.intakeBadge}
          </div>

          <h2 className="text-3xl font-semibold text-white">{t.formTitle}</h2>

          <form
  action="https://formsubmit.co/support@capitalcryptogermany.com"
  method="POST"
  className="mt-8 grid gap-4 md:grid-cols-2"
>
            <p className="text-sm leading-7 text-slate-300">{t.intakeIntro}</p>

            <input
              type="text"
              name="name"
              placeholder={t.formName}
              className="w-full rounded-xl border border-white/10 bg-slate-900/45 px-4 py-3 text-white placeholder:text-slate-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder={t.formEmail}
              className="w-full rounded-xl border border-white/10 bg-slate-900/45 px-4 py-3 text-white placeholder:text-slate-400 outline-none"
            />
<input
  type="text"
  name="phone"
  placeholder="Phone Number"
  required
  className="w-full rounded-xl border border-white/10 bg-slate-900/45 px-4 py-3 text-white placeholder:text-slate-400 outline-none"
/>
            <input
              type="text"
              name="platform"
              placeholder={t.formPlatform}
              className="w-full rounded-xl border border-white/10 bg-slate-900/45 px-4 py-3 text-white placeholder:text-slate-400 outline-none"
            />

            <input
              type="text"
              name="wallet"
              placeholder={t.formWallet}
              className="w-full rounded-xl border border-white/10 bg-slate-900/45 px-4 py-3 text-white placeholder:text-slate-400 outline-none"
            />

            <input
              type="text"
              name="transactionHash"
              placeholder={t.formTx}
              className="w-full rounded-xl border border-white/10 bg-slate-900/45 px-4 py-3 text-white placeholder:text-slate-400 outline-none"
            />

            <textarea
              rows={4}
              name="description"
              placeholder={t.formDesc}
              className="w-full rounded-xl border border-white/10 bg-slate-900/45 px-4 py-3 text-white placeholder:text-slate-400 outline-none"
            />

            <p className="text-xs leading-6 text-slate-400">{t.formNote}</p>
            
<input type="hidden" name="_subject" value="New Case Review Submission" />
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_template" value="table" />
            <button type="submit"
              className="w-full rounded-xl bg-slate-200 px-6 py-3 font-semibold text-slate-900 transition hover:bg-white"
            >
              {t.formBtn}
            </button>

            <a
              href="#kontakt-form"
              className="block w-full rounded-xl border border-white/10 bg-slate-900/35 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-900/55"
            >
              {t.formSecondaryCta}
            </a>

            <p className="text-xs leading-6 text-slate-400">{t.formSecondaryText}</p>
          </form>
        </div>
      </section>

      <section id="faq" className="border-t border-white/10 bg-slate-800/35">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">{t.faqTitle}</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {t.faqs.map(([q, a]) => (
              <div
                key={q}
                className="rounded-2xl border border-white/10 bg-slate-900/35 p-6 shadow-sm"
              >
                <h3 className="font-semibold text-white">{q}</h3>
                <p className="mt-2 text-sm text-slate-200">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<footer className="border-t border-white/10 bg-slate-900 py-12 text-sm text-slate-300">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

    <div>
      <p className="font-semibold text-white mb-2">
        CAPITAL CRYPTO GERMANY
      </p>
      <p>
        Blockchain analysis and advisory related to digital investment platforms.
      </p>
    </div>

    <div>
      <p className="font-semibold text-white mb-2">Contact</p>

      <p>Email:</p>

      <a
        href="mailto:support@capitalcryptogermany.com"
        className="text-amber-400 hover:text-amber-300"
      >
        support@capitalcryptogermany.com
      </a>

    </div>

    <div>
      <p className="font-semibold text-white mb-2">Legal</p>

      <div className="flex flex-col gap-2">

        <a href="/privacy" className="hover:text-white">
          Privacy Policy
        </a>

        <a href="/cookies" className="hover:text-white">
          Cookies Policy
        </a>

        <a href="" className="hover:text-white">
          Contact
        </a>

      </div>

    </div>

  </div>

  <div className="text-center mt-10 text-xs text-slate-400">
    © 2026 Capital Crypto Germany. All rights reserved.
  </div>

</footer>

<a
  href="https://wa.me/4915783358244?text=Hallo%20ich%20ben%C3%B6tige%20eine%20Analyse%20zu%20meinem%20Krypto-Fall"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
>
  {t.whatsapp}
</a>
    </main>
  );
}