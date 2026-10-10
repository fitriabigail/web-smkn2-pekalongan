import Link from "next/link";
import Gambar from "./Gambar";

export default function BeritaCard({ berita }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-midnight shadow-md transition hover:shadow-xl">
      <Gambar
        src={berita.gambar}
        alt={berita.judul}
        label={berita.label}
        className={`h-48 w-full ${berita.posisi || ""}`}
      />
      <div className="flex flex-1 flex-col p-5">
        <time className="text-sm font-semibold text-sky">{berita.tanggal}</time>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug">
          {berita.judul}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-midnight/75">
          {berita.ringkasan}
        </p>
        <Link
          href={`/berita/${berita.id}`}
          className="mt-4 inline-flex w-fit rounded-full bg-sun px-5 py-2 text-sm font-semibold text-midnight transition hover:bg-sand"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
}