"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DetailLokal({ id }) {
  const [b, setB] = useState(undefined);

  useEffect(() => {
    try {
      const list = JSON.parse(localStorage.getItem("berita") || "[]");
      setB(list.find((x) => String(x.id) === id && x.status === "Terbit") ?? null);
    } catch {
      setB(null);
    }
  }, [id]);

  if (b === undefined) return <p className="py-20 text-center">Memuat...</p>;
  if (b === null) return <p className="py-20 text-center">Berita tidak ditemukan.</p>;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/berita" className="inline-flex rounded-full border-2 border-ocean px-5 py-2 text-sm font-semibold text-ocean hover:bg-ocean hover:text-white">
        Kembali ke Berita
      </Link>
      <h1 className="mt-6 font-display text-3xl font-bold text-ocean md:text-4xl">{b.judul}</h1>
      <time className="mt-3 block font-semibold text-sky">{b.tanggal}</time>
      <div className="mt-8 space-y-4 text-lg leading-relaxed text-midnight/90">
        {b.isi.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </article>
  );
}