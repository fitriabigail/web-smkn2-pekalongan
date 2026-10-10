"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Gambar from "./Gambar";

const menu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/berita", label: "Berita" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [terbuka, setTerbuka] = useState(false);

  const aktif = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const kelasLink = (href) =>
    `font-semibold transition ${
      aktif(href) ? "text-sun" : "text-midnight hover:text-sky"
    }`;

  return (
    <>
      {/* Bar info atas */}
      <div className="hidden bg-midnight text-sm text-white/90 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <p>Jl. Perintis Kemerdekaan No. 29, Kota Pekalongan, Jawa Tengah</p>
          <a
            href="https://smk2pekalongan.sch.id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sun"
          >
            smk2pekalongan.sch.id
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setTerbuka(false)}
          >
            <Gambar
             src="/logo.png"
              alt="Logo SMK Negeri 2 Pekalongan"
              className="h-14 w-14 object-contain"
              label="2"
            />
            <span className="font-display text-base font-bold leading-tight text-ocean sm:whitespace-nowrap sm:text-xl">
  SMK Negeri 2 Pekalongan
</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-8">
              {menu.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className={kelasLink(m.href)}>
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/berita"
              className="rounded-full bg-sun px-6 py-2.5 font-semibold text-midnight transition hover:bg-sand"
            >
              Lihat Berita
            </Link>
          </div>

          <button
            type="button"
            className="rounded-lg border-2 border-ocean px-3 py-2 font-semibold text-ocean md:hidden"
            aria-expanded={terbuka}
            aria-controls="menu-mobile"
            onClick={() => setTerbuka(!terbuka)}
          >
            {terbuka ? "Tutup" : "Menu"}
          </button>
        </nav>

        {terbuka && (
          <ul
            id="menu-mobile"
            className="flex flex-col gap-1 border-t border-mist px-4 pb-4 pt-2 md:hidden"
          >
            {menu.map((m) => (
              <li key={m.href}>
                <Link
                  href={m.href}
                  className={`block py-2 ${kelasLink(m.href)}`}
                  onClick={() => setTerbuka(false)}
                >
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}