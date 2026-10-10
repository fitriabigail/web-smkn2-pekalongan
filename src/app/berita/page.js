import Link from "next/link";
import BeritaCard from "@/components/BeritaCard";
import { daftarBerita } from "@/data/berita";

export const metadata = { title: "Berita | SMK Negeri 2 Pekalongan" };

export default function Berita() {
  return (
    <>
      <section
        className="text-white"
        style={{ backgroundImage: "linear-gradient(90deg, #00205b, #003087)" }}
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Berita sekolah</h1>
          <p className="mt-3 text-white/85">
            <Link href="/" className="hover:text-sun">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-sun">Berita</span>
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
          {daftarBerita.map((b) => (
            <BeritaCard key={b.id} berita={b} />
          ))}
        </div>
      </section>
    </>
  );
}