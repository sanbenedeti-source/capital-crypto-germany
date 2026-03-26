'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
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
  heroBadge: string;
  heroTitle: string;
  heroText: string;
  heroBtn1: string;
  heroBtn2: string;
  section1Title: string;
  section1Text: string;
  items1: string[];
  section2Title: string;
  section3Title: string;
  steps: [string, string][];
  formTitle: string;
  formIntro: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formPlatform: string;
  formWallet: string;
  formTx: string;
  formDesc: string;
  formNote: string;
  formBtn: string;
  faqTitle: string;
  faqs: [string, string][];
  importantTitle: string;
  importantText: string;
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
    heroBadge: 'Blockchain Analyse',
    heroTitle:
      'Strukturierte Blockchain-Analyse bei verdächtigen Krypto-Transaktionen',
    heroText:
      'Wir analysieren Wallet-Bewegungen, Transaktionsketten und Plattformangaben, um komplexe Krypto-Fälle strukturiert zu bewerten.',
    heroBtn1: 'Fallprüfung starten',
    heroBtn2: 'Mehr über den Ablauf',
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
    formIntro:
      'Nutzen Sie dieses Formular, um Ihren Fall kurz zu schildern. Die erste Fallprüfung dient der Orientierung und hilft zu verstehen, ob eine weiterführende Analyse sinnvoll sein könnte.',
    formName: 'Ihr Name',
    formEmail: 'E-Mail Adresse',
    formPhone: 'Telefonnummer',
    formPlatform: 'Name der Plattform oder des Brokers',
    formWallet: 'Wallet-Adresse (optional)',
    formTx: 'Transaktions-ID / Hash (optional)',
    formDesc:
      'Beschreiben Sie kurz Ihr Problem oder den verlorenen Krypto-Fall',
    formNote:
      'Für eine bessere erste Einschätzung können Sie Plattformname, Wallet-Adresse, Transaktionsdaten und eine kurze Beschreibung des Problems angeben.',
    formBtn: 'Fall zur Prüfung senden',
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
    importantTitle: 'Wichtiger Hinweis',
    importantText:
      'Es wird keine Rückgewinnung von Vermögenswerten garantiert. Jede Anfrage wird individuell geprüft. Die erste Fallprüfung dient der Orientierung und ersetzt keine rechtliche oder finanzielle Beratung.',
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
    heroBadge: 'Blockchain Analysis',
    heroTitle:
      'Structured Blockchain Analysis for Suspicious Crypto Transactions',
    heroText:
      'We analyze wallet movements, transaction chains, and platform details to assess complex crypto-related cases in a structured way.',
    heroBtn1: 'Start Case Review',
    heroBtn2: 'Learn more about the process',
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
    formIntro:
      'Use this form to briefly describe your case. The initial case review is intended to provide direction and help determine whether further analysis may be appropriate.',
    formName: 'Your Name',
    formEmail: 'Email Address',
    formPhone: 'Phone Number',
    formPlatform: 'Name of the platform or broker',
    formWallet: 'Wallet Address (optional)',
    formTx: 'Transaction ID / Hash (optional)',
    formDesc: 'Briefly describe your issue or lost crypto case',
    formNote:
      'For a better initial review, you may include the platform name, wallet address, transaction details, and a short description of the issue.',
    formBtn: 'Submit case for review',
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
    importantTitle: 'Important Notice',
    importantText:
      'No recovery of assets is guaranteed. Every request is reviewed individually. This initial case review is for orientation only and does not replace legal or financial advice.',
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

export default function HomePage() {
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

      setMessage(`${t.sendSuccess} Lead ID: ${data.leadId}`);
      form.reset();

      const text = encodeURIComponent(
        'Guten Tag, hier ist CAPITAL CRYPTO BROKER. Eine neue Anfrage wurde soeben über die Website eingereicht.'
      );

      setTimeout(() => {
        window.location.href = `https://wa.me/4915783358244?text=${text}`;
      }, 300);
    } catch {
      setMessage(t.networkError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo-capital-crypto-germany.png"
              alt="Capital Crypto Germany"
              className="h-8 w-8 object-contain"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide text-white">
                CAPITAL CRYPTO GERMANY
              </p>
              <p className="text-xs text-slate-300">{t.brandSub}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
            <Link href="/fallanalyse" className="transition hover:text-[#F3D24F]">
              {t.nav1}
            </Link>
            <a href="#netzwerke" className="transition hover:text-[#F3D24F]">
              {t.nav2}
            </a>
            <a href="#ablauf" className="transition hover:text-[#F3D24F]">
              {t.nav3}
            </a>
            <a href="#faq" className="transition hover:text-[#F3D24F]">
              {t.nav4}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/fallanalyse"
              className="hidden rounded-full bg-[#F3D24F] px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-105 md:inline-flex"
            >
              {t.ctaTop}
            </Link>

            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0A1328] px-4 py-2 text-sm font-semibold text-white"
              >
                <span>{lang === 'de' ? 'DE' : 'EN'}</span>
                <span>{lang === 'de' ? '🇩🇪' : '🇬🇧'}</span>
                <span className="text-xs">▼</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 top-12 z-50 min-w-[150px] rounded-2xl border border-white/10 bg-[#0A1328] p-2 shadow-2xl">
                  <button
                    type="button"
                    onClick={() => {
                      setLang('de');
                      setLangMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm ${
                      lang === 'de'
                        ? 'bg-[#F3D24F] text-black'
                        : 'text-white hover:bg-white/5'
                    }`}
                  >
                    🇩🇪 Deutsch
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setLang('en');
                      setLangMenuOpen(false);
                    }}
                    className={`mt-1 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm ${
                      lang === 'en'
                        ? 'bg-[#F3D24F] text-black'
                        : 'text-white hover:bg-white/5'
                    }`}
                  >
                    🇬🇧 English
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-white/10 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div className="pt-4">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A1328] px-5 py-3 text-sm font-medium text-white">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              {t.heroBadge}
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.15] tracking-tight text-white lg:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200">
              {t.heroText}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/fallanalyse"
                className="rounded-2xl bg-[#F3D24F] px-8 py-4 text-lg font-semibold text-black transition hover:brightness-105"
              >
                {t.heroBtn1}
              </Link>

              <a
                href="#ablauf"
                className="rounded-2xl border border-white/10 bg-[#0A1328] px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/5"
              >
                {t.heroBtn2}
              </a>
            </div>
          </div>

          <div
            id="kontakt-form"
            className="rounded-[30px] border border-white/10 bg-[#0A1328] p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] lg:p-8"
          >
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white lg:text-5xl">
              {t.formTitle}
            </h2>

            <p className="mt-8 text-base leading-8 text-slate-200">
              {t.formIntro}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  {t.formName}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={t.formName}
                  className="w-full rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-base text-white placeholder:text-slate-500 outline-none focus:border-[#F3D24F]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  {t.formEmail}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={t.formEmail}
                  className="w-full rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-base text-white placeholder:text-slate-500 outline-none focus:border-[#F3D24F]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  {t.formPhone}
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder={t.formPhone}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-base text-white placeholder:text-slate-500 outline-none focus:border-[#F3D24F]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  {t.formPlatform}
                </label>
                <input
                  type="text"
                  name="platform"
                  placeholder={t.formPlatform}
                  className="w-full rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-base text-white placeholder:text-slate-500 outline-none focus:border-[#F3D24F]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  {t.formWallet}
                </label>
                <input
                  type="text"
                  name="wallet"
                  placeholder={t.formWallet}
                  className="w-full rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-base text-white placeholder:text-slate-500 outline-none focus:border-[#F3D24F]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  {t.formTx}
                </label>
                <input
                  type="text"
                  name="transactionHash"
                  placeholder={t.formTx}
                  className="w-full rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-base text-white placeholder:text-slate-500 outline-none focus:border-[#F3D24F]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-white">
                  {t.formDesc}
                </label>
                <textarea
                  rows={6}
                  name="description"
                  placeholder={t.formDesc}
                  className="w-full rounded-2xl border border-white/10 bg-[#020817] px-5 py-4 text-base text-white placeholder:text-slate-500 outline-none focus:border-[#F3D24F]"
                />
              </div>

              <p className="md:col-span-2 text-sm leading-8 text-slate-300">
                {t.formNote}
              </p>

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 rounded-2xl bg-[#F3D24F] px-8 py-5 text-lg font-semibold text-black transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? t.sendLoading : t.formBtn}
              </button>

              {message && (
                <div className="md:col-span-2 rounded-2xl border border-white/10 bg-[#07101F] px-5 py-4 text-sm text-white">
                  {message}
                </div>
              )}

              <div className="md:col-span-2 rounded-2xl border border-white/10 bg-[#07101F] px-5 py-5">
                <p className="text-base font-semibold text-white">
                  {t.importantTitle}
                </p>
                <p className="mt-3 text-sm leading-8 text-slate-200">
                  {t.importantText}
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

      <section id="netzwerke" className="border-t border-white/10 bg-[#020817]">
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
            <h2 className="text-3xl font-semibold text-white">{t.section3Title}</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.steps.map(([step, text]) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-[#111827] p-6"
              >
                <p className="text-sm font-semibold text-[#F3D24F]">{step}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-white/10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-white">{t.faqTitle}</h2>

          <div className="mt-10 space-y-4">
            {t.faqs.map(([question, answer]) => (
              <div
                key={question}
                className="rounded-2xl border border-white/10 bg-[#111827] p-6"
              >
                <p className="font-semibold text-white">{question}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{answer}</p>
              </div>
            ))}
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
              className="text-[#F3D24F] transition hover:text-[#F7DA68]"
            >
              support@capitalcryptogermany.com
            </a>
          </div>

          <div>
            <p className="mb-2 font-semibold text-white">Legal</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/privacy" className="text-slate-300 transition hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-slate-300 transition hover:text-white">
                Cookies Policy
              </Link>
              <Link href="/contact" className="text-slate-300 transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-slate-400">
          © 2026 Capital Crypto Germany. All rights reserved.
        </div>
      </footer>

      <a
        href="https://wa.me/4915783358244?text=Für%20eine%20detaillierte%20Beratung%20hinterlassen%20Sie%20bitte%20eine%20passende%20Uhrzeit%20für%20einen%20Kontakt%20per%20E-Mail%20oder%20Telefon."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
      >
        {t.whatsapp}
      </a>
    </main>
  );
}