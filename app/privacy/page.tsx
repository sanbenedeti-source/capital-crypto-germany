'use client';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-red-950 to-amber-700 text-white font-bold">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-2 transition hover:opacity-80">
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
          </a>

          <a
            href="/"
            className="rounded-full bg-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-white"
          >
            Back to Home
          </a>
        </div>
      </header>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-slate-900/35 p-8 shadow-lg lg:p-12">
          <h1 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
            Privacy Policy
          </h1>

          <p className="mb-6 text-sm text-slate-300">
            Effective date: 2026
          </p>

          <p className="mb-4 text-slate-200">
            Capital Crypto Germany values your privacy and is committed to
            handling personal information in a responsible, transparent, and
            secure manner. This Privacy Policy explains what information may be
            collected through this website, how it may be used, and the steps
            taken to protect it.
          </p>

          <p className="mb-4 text-slate-200">
            By using this website, submitting a contact request, or providing
            information through any form or communication channel, you
            acknowledge that you have read and understood this Privacy Policy.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
            1. Information We May Collect
          </h2>

          <p className="mb-4 text-slate-200">
            We may collect information that you voluntarily provide when
            contacting us, requesting a case review, or submitting a form
            through the website.
          </p>

          <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-200">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number, if provided</li>
            <li>Platform or broker name</li>
            <li>Wallet address or transaction details, if voluntarily shared</li>
            <li>Messages, case descriptions, and supporting information</li>
            <li>Technical information such as browser type, device type, and basic site interaction data</li>
          </ul>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
            2. Purpose of Data Collection
          </h2>

          <p className="mb-4 text-slate-200">
            Personal information is collected only for legitimate business and
            communication purposes related to the services presented on this
            website.
          </p>

          <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-200">
            <li>To review submitted inquiries or case descriptions</li>
            <li>To respond to contact requests</li>
            <li>To provide general information regarding blockchain analysis or digital investment platform situations</li>
            <li>To improve website usability and visitor experience</li>
            <li>To maintain internal records of communication</li>
            <li>To help detect abuse, spam, or unauthorized activity</li>
          </ul>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
            3. Lawful and Responsible Use
          </h2>

          <p className="mb-4 text-slate-200">
            We aim to process personal data in a fair and proportionate manner.
            Information is used only to the extent reasonably necessary to
            understand the inquiry submitted, communicate with visitors, and
            provide an initial orientation regarding the described situation.
          </p>

          <p className="mb-4 text-slate-200">
            Submission of a form or communication through this website does not
            automatically establish a formal client relationship, legal
            representation, or guaranteed service outcome.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
            4. Storage and Security
          </h2>

          <p className="mb-4 text-slate-200">
            We take reasonable technical and organizational measures to protect
            submitted information against unauthorized access, misuse,
            alteration, disclosure, or destruction.
          </p>

          <p className="mb-4 text-slate-200">
            While no internet-based transmission or electronic storage method
            can be guaranteed to be completely secure, we strive to use
            appropriate safeguards and responsible handling practices to reduce
            risk as much as reasonably possible.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
            5. Data Sharing
          </h2>

          <p className="mb-4 text-slate-200">
            We do not sell personal information and do not share submitted data
            with unrelated third parties for commercial marketing purposes.
          </p>

          <p className="mb-4 text-slate-200">
            Information may be shared only when reasonably necessary for website
            operation, communication handling, technical support, security, or
            compliance with applicable legal obligations.
          </p>

          <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-200">
            <li>Website hosting or infrastructure providers</li>
            <li>Email and communication service providers</li>
            <li>Technical support or security service providers</li>
            <li>Authorities or legal processes, if required by law</li>
          </ul>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
            6. Data Retention
          </h2>

          <p className="mb-4 text-slate-200">
            Personal information is retained only for as long as reasonably
            necessary to respond to inquiries, maintain communication records,
            comply with legal obligations, resolve disputes, or support
            legitimate operational needs.
          </p>

          <p className="mb-4 text-slate-200">
            When information is no longer required for these purposes, it may be
            deleted or anonymized where appropriate.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
            7. Your Rights
          </h2>

          <p className="mb-4 text-slate-200">
            Depending on the applicable laws in your jurisdiction, you may have
            certain rights regarding your personal data.
          </p>

          <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-200">
            <li>The right to request access to your personal information</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion, where applicable</li>
            <li>The right to object to certain forms of processing</li>
            <li>The right to request clarification about how your data is used</li>
          </ul>

          <p className="mb-4 text-slate-200">
            Requests related to personal data may be submitted using the contact
            information provided on this website.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
            8. Website Analytics and Technical Data
          </h2>

          <p className="mb-4 text-slate-200">
            This website may collect limited technical and usage information,
            such as browser type, device type, general location data, referring
            pages, and interaction with website content. This information is
            generally used to improve performance, monitor technical issues, and
            better understand how visitors use the site.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
            9. External Links
          </h2>

          <p className="mb-4 text-slate-200">
            This website may contain links to external websites or third-party
            services. We are not responsible for the privacy practices,
            security, or content of third-party websites. Visitors are
            encouraged to review the privacy policies of any external site they
            choose to visit.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
            10. International Visitors
          </h2>

          <p className="mb-4 text-slate-200">
            If you access this website from outside the primary operating
            region, please be aware that information you submit may be processed
            and stored in locations where data protection rules may differ from
            those in your country.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
            11. Children’s Privacy
          </h2>

          <p className="mb-4 text-slate-200">
            This website is not intended for children, and we do not knowingly
            collect personal information from individuals who are legally
            considered minors under applicable law without appropriate
            authorization.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
            12. Policy Updates
          </h2>

          <p className="mb-4 text-slate-200">
            This Privacy Policy may be updated from time to time to reflect
            changes in website functionality, legal requirements, or internal
            practices. The most current version will be published on this page.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
            13. Contact
          </h2>

          <p className="mb-2 text-slate-200">
            If you have questions regarding this Privacy Policy or would like to
            make a request related to your personal information, you may contact
            us at:
          </p>

          <a
            href="mailto:support@capitalcryptogermany.com"
            className="text-amber-300 transition hover:text-amber-200"
          >
            support@capitalcryptogermany.com
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-900 py-10 text-center text-sm text-slate-300">
        © 2026 CAPITAL CRYPTO GERMANY
      </footer>
    </main>
  );
}