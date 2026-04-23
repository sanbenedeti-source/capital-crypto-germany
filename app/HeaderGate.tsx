"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderGate() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold">
          CAPITAL CRYPTO GERMANY
        </Link>

   <nav className="hidden md:flex gap-8 text-sm">
  <Link href="/analyse" className="hover:text-[#F3D24F]">
    Analyse
  </Link>
  <Link href="/anlage" className="hover:text-[#F3D24F]">
    Anlage
  </Link>
  <Link href="/invest" className="hover:text-[#F3D24F]">
    Invest
  </Link>
  <Link href="/kontakt" className="hover:text-[#F3D24F]">
    Kontakt
  </Link>
</nav>

        <Link
          href="/analyse"
          className="rounded-full bg-[#F3D24F] px-5 py-2 text-sm font-semibold text-black hover:brightness-110"
        >
          Kostenlose Analyse
        </Link>
      </div>
    </header>
  );
}