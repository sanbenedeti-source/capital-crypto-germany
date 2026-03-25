'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

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
  formPhone: string;
  formPlatform: string;
  formWallet: string;
  formTx: string;
  formDesc: string;
  formBtn: string;
  intakeIntro: string;
  formNote: string;
  faqTitle: string;
  faqs: [string, string][];
  whatsapp: string;
  sendLoading: string;
  sendSuccess: string;
  sendError: string;
  networkError: string;
};

const translations: Record<Language, Translation> = {
  de: {
    brandSub: 'Blockchain Analyse & Beratung',
    nav1: 'Analyse',
    nav2: 'Blockchains',
    nav3: 'Ablauf',
    nav4: 'FAQ',
    ctaTop: 'Kostenlose Analyse',
    heroTitle: 'Strukturierte Blockchain-Analyse bei verdächtigen Krypto-Transaktionen',
    heroText:
      'Wir analysieren Wallet-Bewegungen, Transaktionsketten und Plattformangaben, um komplexe Krypto-Fälle strukturiert zu bewerten.',
    heroBtn1: 'Fallprüfung starten',
    heroBtn2: 'Mehr über den Ablauf',
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
    formPhone: 'Telefonnummer',
    formPlatform: 'Name der Plattform oder des Brokers',
    formWallet: 'Wallet-Adresse (optional)',
    formTx: 'Transaktions-ID / Hash (optional)',
    formDesc: 'Beschreiben Sie kurz Ihr Problem oder den verlorenen Krypto-Fall',
    formBtn: 'Fall zur Prüfung senden',
    intakeIntro:
      'Nutzen Sie dieses Formular, um Ihren Fall kurz zu schildern. Die erste Fallprüfung dient der Orientierung und hilft zu verstehen, ob eine weiterführende Analyse sinnvoll sein könnte.',
    formNote:
      'Für eine bessere erste Einschätzung können Sie Plattformname, Wallet-Adresse, Transaktionsdaten und eine kurze Beschreibung des Problems angeben.',
    faqTitle: 'Häufige Fragen',
    faqs: [
      [
        'Ist die erste Fallprüfung kostenlos?',
        'Ja. Die erste Fallprüfung dient der ersten Orientierung und hilft, die Situation besser einzuordnen.',
      ],
      [
        'Wie schnell erhalte ich eine Rückmeldung?',
        'In der Regel innerhalb von 24 bis 48 Stunden.',
      ],
      [
        'Wird eine Rückgewinnung garantiert?',
        'Nein. Jeder Fall ist unterschiedlich und wird individuell geprüft.',
      ],
      [
        'Was passiert nach dem Absenden?',
        'Ihr Fall wird geprüft und Sie erhalten eine Rückmeldung per E-Mail oder Telefon.',
      ],
    ],
    whatsapp: 'WhatsApp',
    sendLoading: 'Wird gesendet...',
    sendSuccess: 'Fall erfolgreich gesendet.',
    sendError: 'Beim Senden ist ein Fehler aufgetreten.',
    networkError: 'Netzwerkfehler. Bitte versuchen Sie es erneut.',
  },
  en: {
    brandSub: 'Blockchain Analysis & Advisory',
    nav1: 'Analysis',
    nav2: 'Blockchains',
    nav3: 'Process',
    nav4: 'FAQ',
    ctaTop: 'Free Analysis',
    heroTitle: 'Structured Blockchain Analysis for Suspicious Crypto Transactions',
    heroText:
      'We analyze wallet movements, transaction chains, and platform details to assess complex crypto-related cases in a structured way.',
    heroBtn1: 'Start Case Review',
    heroBtn2: 'How it works',
    langLabel: 'Language',
    intakeBadge: 'Case Review',
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
    formPhone: 'Phone number',
    formPlatform: 'Name of the platform or broker',
    formWallet: 'Wallet address (optional)',
    formTx: 'Transaction ID / hash (optional)',
    formDesc: 'Briefly describe your issue or lost crypto case',
    formBtn: 'Submit case for review',
    intakeIntro:
      'Use this form to briefly describe your case. The initial case review is intended to provide direction and help determine whether further analysis may be appropriate.',
    formNote:
      'For a better initial review, you may include the platform name, wallet address, transaction details, and a short description of the issue.',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      [
        'Is the initial case review free?',
        'Yes. The initial case review is intended to provide orientation and help assess the situation more clearly.',
      ],
      [
        'How quickly will I receive a response?',
        'In most cases, an initial response is provided within 24 to 48 hours.',
      ],
      [
        'Is recovery guaranteed?',
        'No. Every case is different and is assessed individually.',
      ],
      [
        'What happens after submission?',
        'Your case is reviewed first and you will receive a response by email or phone.',
      ],
    ],
    whatsapp: 'WhatsApp',
    sendLoading: 'Sending...',
    sendSuccess: 'Case submitted successfully.',
    sendError: 'Something went wrong while sending.',
    networkError: 'Network error. Please try again.',
  },
};

const chains = [
  {
    name: 'Bitcoin (BTC)',
    icon: '/btc.png',
    link: 'https://coinmarketcap.com/currencies/bitcoin/',
  },
  {
    name: 'Ethereum (ETH)',
    icon: '/eth.png',
    link: 'https://coinmarketcap.com/currencies/ethereum/',
  },
  {
    name: 'Tron (TRX)',
    icon: '/trx.png',
    link: 'https://coinmarketcap.com/currencies/tron/',
  },
  {
    name: 'BNB Chain',
    icon: '/bnb.png',
    link: 'https://coinmarketcap.com/currencies/bnb/',
  },
  {
    name: 'Polygon',
    icon: '/polygon.png',
    link: 'https://coinmarketcap.com/currencies/polygon/',
  },
  {
    name: 'Solana',
    icon: '/sol.png',
    link: 'https://coinmarketcap.com/currencies/solana/',
  },
];

export default function CapitalCryptoGermanyLanding() {
  const [lang, setLang] = useState<Language>('de');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const t = translations[lang];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      platform: String(formData.get('platform') || ''),
      wallet: String(formData.get('wallet') || ''),
      transactionHash: String(formData.get('transactionHash') || ''),
      description: String(formData.get('description') || ''),
    };

    try {
      const res = await fetch('/api/case-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || t.sendError);
        return;
      }

if (typeof window !== 'undefined' && window.fbq) {
  window.fbq('track', 'Lead');
}

if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'conversion', {
    send_to: 'AW-18036682227/TEY7CJuY2o4cEPPbx5hD',
    value: 1.0,
    currency: 'USD',
  });
}
      setMessage(`${t.sendSuccess} Lead ID: ${data.leadId}`);
      form.reset();

      const text = encodeURIComponent(
  `Guten Tag, hier ist CAPITAL CRYPTO BROKER. Eine neue Anfrage wurde soeben über die Website eingereicht.`
);

      setTimeout(() => {
        window.location.href = `https://wa.me/4915212289889?text=${text}`;
      }, 300);
    } catch {
      setMessage(t.networkError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F19]/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="/"
            className="flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] active:scale-95"
          >
            <img
              src="/logo-capital-crypto-germany.png"
              alt="Capital Crypto Germany"
              className="h-6 w-6 object-cover"
            />
            <div>
              <p className="text-xs font-semibold tracking-wide text-white">
                CAPITAL CRYPTO GERMANY
              </p>
              <p className="text-xs text-slate-400">{t.brandSub}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a href="#analyse" className="transition hover:text-[#FCD34D]">
              {t.nav1}
            </a>
            <a href="#netzwerke" className="transition hover:text-[#FCD34D]">
              {t.nav2}
            </a>
            <a href="#ablauf" className="transition hover:text-[#FCD34D]">
              {t.nav3}
            </a>
            <a href="#faq" className="transition hover:text-[#FCD34D]">
              {t.nav4}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111827] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1F2937]"
              >
                <span>{lang === 'de' ? '🇩🇪' : '🇬🇧'}</span>
                <span>{lang === 'de' ? 'DE' : 'EN'}</span>
                <span className="text-xs opacity-80">▾</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 top-12 z-50 min-w-[160px] rounded-2xl border border-white/10 bg-[#111827] p-2 shadow-2xl">
                  <button
                    type="button"
                    onClick={() => {
                      setLang('de');
                      setLangMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                      lang === 'de'
                        ? 'bg-[#FCD34D] text-black'
                        : 'text-white hover:bg-[#1F2937]'
                    }`}
                  >
                    <span>🇩🇪</span>
                    <span>Deutsch</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setLang('en');
                      setLangMenuOpen(false);
                    }}
                    className={`mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                      lang === 'en'
                        ? 'bg-[#FCD34D] text-black'
                        : 'text-white hover:bg-[#1F2937]'
                    }`}
                  >
                    <span>🇬🇧</span>
                    <span>English</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-white/10 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111827] px-4 py-2 text-sm text-slate-200 shadow-sm">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              {t.intakeBadge}
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.heroTitle}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {t.heroText}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontakt-form"
                className="rounded-xl bg-[#FCD34D] px-6 py-4 font-semibold text-black transition hover:bg-[#FBBF24]"
              >
                {t.heroBtn1}
              </a>

              <a
                href="#ablauf"
                className="rounded-xl border border-white/10 bg-[#111827] px-6 py-4 font-semibold text-white transition hover:bg-[#1F2937]"
              >
                {t.heroBtn2}
              </a>
            </div>
          </div>

          <div
            id="kontakt-form"
            className="rounded-3xl border border-white/10 bg-[#111827] p-6 shadow-2xl shadow-black/30"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0B0F19] px-4 py-2 text-sm text-slate-200 shadow-sm">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              {t.intakeBadge}
            </div>

            <h2 className="text-3xl font-semibold text-white">{t.formTitle}</h2>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
              <p className="md:col-span-2 text-sm leading-7 text-slate-300">
                {t.intakeIntro}
              </p>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  {t.formName}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={t.formName}
                  className="w-full rounded-xl border border-white/10 bg-[#020617] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-[#FCD34D]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  {t.formEmail}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={t.formEmail}
                  className="w-full rounded-xl border border-white/10 bg-[#020617] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-[#FCD34D]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  {t.formPhone}
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder={t.formPhone}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#020617] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-[#FCD34D]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  {t.formPlatform}
                </label>
                <input
                  type="text"
                  name="platform"
                  placeholder={t.formPlatform}
                  className="w-full rounded-xl border border-white/10 bg-[#020617] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-[#FCD34D]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  {t.formWallet}
                </label>
                <input
                  type="text"
                  name="wallet"
                  placeholder={t.formWallet}
                  className="w-full rounded-xl border border-white/10 bg-[#020617] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-[#FCD34D]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  {t.formTx}
                </label>
                <input
                  type="text"
                  name="transactionHash"
                  placeholder={t.formTx}
                  className="w-full rounded-xl border border-white/10 bg-[#020617] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-[#FCD34D]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  {t.formDesc}
                </label>
                <textarea
                  rows={5}
                  name="description"
                  placeholder={t.formDesc}
                  className="w-full rounded-2xl border border-white/10 bg-[#020617] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-[#FCD34D]"
                />
              </div>

              <p className="md:col-span-2 text-xs leading-6 text-slate-400">
                {t.formNote}
              </p>

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 w-full rounded-xl bg-[#FCD34D] px-6 py-4 font-semibold text-black transition hover:bg-[#FBBF24] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? t.sendLoading : t.formBtn}
              </button>

              {message && (
                <div className="md:col-span-2 rounded-xl border border-white/10 bg-[#0B0F19] px-4 py-3 text-sm text-slate-200">
                  {message}
                </div>
              )}
import TradingViewChart from "./components/TradingViewChart";
              <div className="md:col-span-2 rounded-2xl border border-white/10 bg-[#0B0F19] px-5 py-4 text-sm leading-6 text-slate-300">
                <p className="font-medium text-white">Wichtiger Hinweis</p>
                <p className="mt-2">
                  Es wird keine Rückgewinnung von Vermögenswerten garantiert. Jede
                  Anfrage wird individuell geprüft. Die erste Fallprüfung dient der
                  Orientierung und ersetzt keine rechtliche oder finanzielle Beratung.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="analyse" className="border-t border-white/10 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white">{t.section1Title}</h2>
            <p className="mt-4 text-slate-300">{t.section1Text}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.items1.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#111827] p-6 shadow-sm"
              >
                <p className="text-sm text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FCD34D]/15 text-lg text-[#FCD34D]">
              🔎
            </div>
            <h3 className="text-lg font-semibold text-white">Strukturierte Analyse</h3>
            <p className="mt-2 text-sm text-slate-300">
              Detaillierte Auswertung von Wallet-Aktivitäten und Transaktionsverläufen.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FCD34D]/15 text-lg text-[#FCD34D]">
              ⛓️
            </div>
            <h3 className="text-lg font-semibold text-white">Mehrere Netzwerke</h3>
            <p className="mt-2 text-sm text-slate-300">
              Analyse über verschiedene Blockchain-Netzwerke hinweg.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FCD34D]/15 text-lg text-[#FCD34D]">
              ⚡
            </div>
            <h3 className="text-lg font-semibold text-white">
              Schnelle Einschätzung
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Erste Rückmeldung innerhalb von 24–48 Stunden.
            </p>
          </div>
        </div>
      </section>

      <section id="netzwerke" className="border-t border-white/10 bg-[#0F172A]">
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
                className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center shadow-sm transition hover:bg-[#1F2937]"
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

      <section id="ablauf" className="border-t border-white/10 bg-[#0F172A]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white">Wie es weitergeht</h2>
            <p className="mt-4 text-slate-300">
              Nach dem Absenden Ihrer Anfrage erfolgt eine erste strukturierte Prüfung
              Ihres Falls.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
              <p className="text-sm font-semibold text-[#FCD34D]">01</p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                Anfrage absenden
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Sie übermitteln die wichtigsten Angaben zu Ihrer Situation über das
                Formular.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
              <p className="text-sm font-semibold text-[#FCD34D]">02</p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                Erste Fallprüfung
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Ihr Fall wird anhand der übermittelten Informationen vorläufig
                eingeordnet.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
              <p className="text-sm font-semibold text-[#FCD34D]">03</p>
              <h3 className="mt-2 text-lg font-semibold text-white">Rückmeldung</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Sie erhalten eine Rückmeldung per E-Mail oder Telefon mit den
                möglichen nächsten Schritten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="prozess" className="border-t border-white/10 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white">{t.section3Title}</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.steps.map(([step, text]) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-[#111827] p-6 shadow-sm"
              >
                <p className="font-semibold text-[#FCD34D]">{step}</p>
                <p className="mt-2 text-sm text-slate-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-white/10 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">{t.faqTitle}</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {t.faqs.map(([q, a]) => (
              <div
                key={q}
                className="rounded-2xl border border-white/10 bg-[#111827] px-6 py-5 transition hover:bg-[#1F2937]"
              >
                <h3 className="font-semibold text-white">{q}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0F172A] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white">
              Warum Capital Crypto Germany?
            </h2>
            <p className="mt-4 text-slate-300">
              Unsere Arbeit konzentriert sich auf strukturierte Blockchain-Analysen,
              nachvollziehbare Fallprüfung und eine klare erste Einschätzung Ihrer
              Situation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
              <h3 className="text-lg font-semibold text-white">
                Strukturierte Fallprüfung
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Jede Anfrage wird auf Basis der übermittelten Angaben geordnet und
                nachvollziehbar geprüft.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
              <h3 className="text-lg font-semibold text-white">
                Fokus auf Blockchain-Daten
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Wallet-Bewegungen, Transaktionsketten und Plattformangaben werden
                strukturiert ausgewertet.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
              <h3 className="text-lg font-semibold text-white">
                Klare Rückmeldung
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Sie erhalten eine erste Einschätzung und eine klare Orientierung zu
                möglichen nächsten Schritten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0A0F1A] text-slate-200">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
          <div>
            <p className="mb-2 font-semibold text-white">CAPITAL CRYPTO GERMANY</p>
            <p className="text-sm leading-6 text-slate-300">
              Blockchain analysis and advisory related to digital investment platforms.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold text-white">Contact</p>
            <p className="text-sm text-slate-300">Email:</p>

            <a
              href="mailto:support@capitalcryptogermany.com"
              className="text-[#FCD34D] transition hover:text-[#FBBF24]"
            >
              support@capitalcryptogermany.com
            </a>
          </div>

          <div>
            <p className="mb-2 font-semibold text-white">Legal</p>

            <div className="flex flex-col gap-2 text-sm">
              <a href="/privacy" className="text-slate-300 transition hover:text-white">
                Privacy Policy
              </a>

              <a href="/cookies" className="text-slate-300 transition hover:text-white">
                Cookies Policy
              </a>

              <a href="/contact" className="text-slate-300 transition hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-slate-400">
          © 2026 Capital Crypto Germany. All rights reserved.
        </div>
      </footer>

      <a
        href="https://wa.me/4915212289889?text=Für%20eine%20detaillierte%20Beratung%20hinterlassen%20Sie%20bitte%20eine%20passende%20Uhrzeit%20für%20einen%20Kontakt%20per%20E-Mail%20oder%20Telefon."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
      >
        {t.whatsapp}
      </a>
    </main>
  );
}