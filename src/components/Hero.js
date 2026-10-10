import Link from "next/link";
import Gambar from "./Gambar";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight text-white">
      {/* Foto latar */}
      <Gambar
        src="/sekolah.jpg"
        alt="Gedung SMK Negeri 2 Pekalongan"
        label=""
        warna="bg-midnight"
        className="absolute inset-0 -z-20 h-full w-full object-[50%_30%]"
      />
      {/* Lapisan gelap supaya teks terbaca */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,32,91,0.95), rgba(0,32,91,0.75) 55%, rgba(0,32,91,0.35))",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 pb-32 pt-20 md:pb-40 md:pt-28">
        <p className="flex items-center gap-3 font-semibold text-sun">
          <span className="h-0.5 w-10 bg-sun" />
          Selamat datang di SMK Negeri 2 Pekalongan
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight md:text-6xl">
          Terampil, Berkarakter, dan <span className="text-sun">Siap Bekerja</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
          Sekolah kejuruan negeri di Kota Pekalongan yang membekali siswa dengan
          keterampilan, sikap, dan pengalaman praktik untuk masa depan.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-full bg-sun px-7 py-3 font-semibold text-midnight transition hover:bg-sand"
          >
            Tentang Sekolah
          </Link>
          <Link
            href="/berita"
            className="rounded-full bg-white px-7 py-3 font-semibold text-midnight transition hover:bg-mist"
          >
            Lihat Berita
          </Link>
        </div>
      </div>
    </section>
  );
}