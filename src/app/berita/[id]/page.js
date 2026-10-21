import Link from "next/link";
import DetailLokal from "@/components/DetailLokal";
import Gambar from "@/components/Gambar";
import { daftarBerita } from "@/data/berita";

export function generateStaticParams() {
  return daftarBerita.map((b) => ({ id: b.id }));
}

export default async function DetailBerita({ params }) {
  const { id } = await params;
  const berita = daftarBerita.find((b) => b.id === id);

  if (!berita) {
  return <DetailLokal id={id} />;
}

  return (
    <article>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Link
          href="/berita"
          className="inline-flex rounded-full border-2 border-ocean px-5 py-2 text-sm font-semibold text-ocean transition hover:bg-ocean hover:text-white"
        >
          Kembali ke Berita
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-ocean md:text-4xl">
          {berita.judul}
        </h1>
        <time className="mt-3 block font-semibold text-sky">{berita.tanggal}</time>

        <Gambar
  src={berita.gambar}
  alt={berita.judul}
  label={berita.label}
  className={`mt-6 h-64 w-full rounded-3xl md:h-96 ${berita.posisi || ""}`}
/>

        <div className="mt-8 space-y-4 text-lg leading-relaxed text-midnight/90">
          {berita.isi.map((paragraf, i) => (
            <p key={i}>{paragraf}</p>
          ))}
        </div>

        <Link
          href="/berita"
          className="mt-10 inline-flex rounded-full bg-sun px-7 py-3 font-semibold text-midnight transition hover:bg-sand"
        >
          Kembali ke Berita
        </Link>
      </div>
    </article>
  );
}