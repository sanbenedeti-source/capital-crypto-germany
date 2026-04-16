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
  heroBadge: string;
  heroTitle: string;
  heroText: string;
  heroBtn1: string;
  heroBtn2: string;
  formBadge: string;
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
  importantTitle: string;
  importantText: string;
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
    heroBadge: 'Fallprüfung',
    heroTitle:
      'Strukturierte Blockchain-Analyse bei verdächtigen Krypto-Transaktionen',
    heroText:
      'Wir analysieren Wallet-Bewegungen, Transaktionsketten und Plattformangaben, um komplexe Krypto-Fälle strukturiert zu bewerten.',
    heroBtn1: 'Fallprüfung starten',
    heroBtn2: 'Mehr über den Ablauf',
    formBadge: 'Fallprüfung',
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
    importantTitle: 'Wichtiger Hinweis',
    importantText:
      'Es wird keine Rückgewinnung von Vermögenswerten garantiert. Jede Anfrage wird individuell geprüft. Diese erste Fallprüfung dient der Orientierung und ersetzt keine rechtliche oder finanzielle Beratung.',
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
    heroBadge: 'Case Review',
    heroTitle:
      'Structured Blockchain Analysis for Suspicious Crypto Transactions',
    heroText:
      'We analyze wallet movements, transaction chains, and platform details to assess complex crypto-related cases in a structured way.',
    heroBtn1: 'Start Case Review',
    heroBtn2: 'Learn more about the process',
    formBadge: 'Case Review',
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
    importantTitle: 'Important Notice',
    importantText:
      'No recovery of assets is guaranteed. Every request is reviewed individually. This initial case review is for orientation only and does not replace legal or financial advice.',
    sendLoading: 'Sending...',
    sendSuccess: 'Case submitted successfully.',
    sendError: 'Something went wrong while sending.',
    networkError: 'Network error. Please try again.',
  },
};

export default function FallAnalysePage() {
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
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      platform: String(formData.get('platform') || '').trim(),
      wallet: String(formData.get('wallet') || '').trim(),
      transactionHash: String(formData.get('transactionHash') || '').trim(),
      description: String(formData.get('description') || '').trim(),
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

      // Meta Pixel lead event
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead');
      }

      // Google Ads conversion event
      // IMPORTANT:
      // Replace AW-18084183990/XXXXXXXXXXX with the exact send_to value
      // from Google Ads > See event snippet
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
        send_to: 'AW-18084183990/iWJZCPbwgJ0cELb_mq9D',
        });
      }

      setMessage(`${t.sendSuccess} Lead ID: ${data.leadId}`);
      form.reset();

      const text = encodeURIComponent(
        'Guten Tag, hier ist CAPITAL CRYPTO GERMANY. Eine neue Anfrage wurde soeben über die Website eingereicht.'
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
      <header className="border-b border-white/10 bg-[#020817]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
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
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
            <a href="#" className="transition hover:text-[#F3D24F]">
              {t.nav1}
            </a>
            <a href="#" className="transition hover:text-[#F3D24F]">
              {t.nav2}
            </a>
            <a href="#" className="transition hover:text-[#F3D24F]">
              {t.nav3}
            </a>
            <a href="#" className="transition hover:text-[#F3D24F]">
              {t.nav4}
            </a>
          </nav>

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
      </header>

      <section className="px-6 py-10 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div className="pt-6">
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
              <a
                href="#case-form"
                className="rounded-2xl bg-[#F3D24F] px-8 py-4 text-lg font-semibold text-black transition hover:brightness-105"
              >
                {t.heroBtn1}
              </a>

              <a
                href="#"
                className="rounded-2xl border border-white/10 bg-[#0A1328] px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/5"
              >
                {t.heroBtn2}
              </a>
            </div>
          </div>

          <div
            id="case-form"
            className="rounded-[30px] border border-white/10 bg-[#0A1328] p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] lg:p-8"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#07101F] px-5 py-3 text-sm font-medium text-white">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              {t.formBadge}
            </div>

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
    </main>
  );
}