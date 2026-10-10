import Link from "next/link";
import Hero from "@/components/Hero";
import BeritaCard from "@/components/BeritaCard";
import Gambar from "@/components/Gambar";
import { daftarBerita } from "@/data/berita";

const fitur = [
  {
    judul: "Praktik langsung",
    teks: "Belajar di kelas dan di laboratorium sesuai program keahlian.",
  },
  {
    judul: "Laboratorium komputer",
    teks: "Tersedia beberapa laboratorium komputer untuk praktik siswa.",
  },
  {
    judul: "Praktik kerja lapangan",
    teks: "Siswa berlatih langsung di dunia usaha dan dunia industri.",
  },
  {
    judul: "Perpustakaan",
    teks: "Ruang baca dan koleksi buku untuk menunjang belajar.",
  },
];

const jurusan = [
  {
    singkatan: "AK",
    nama: "Akuntansi",
    deskripsi: "Mencatat, menghitung, dan menyusun laporan keuangan dengan teliti.",
    warna: "bg-ocean text-white",
  },
  {
    singkatan: "MPLB",
    nama: "Manajemen Perkantoran dan Layanan Bisnis",
    deskripsi: "Mengelola administrasi kantor, arsip, dan layanan bisnis.",
    warna: "bg-sky text-white",
  },
  {
    singkatan: "PM",
    nama: "Pemasaran",
    deskripsi: "Belajar menjual, mempromosikan, dan mengelola usaha.",
    warna: "bg-sun text-midnight",
  },
  {
    singkatan: "TJKT",
    nama: "Teknik Jaringan Komputer dan Telekomunikasi",
    deskripsi: "Merakit komputer, membangun jaringan, dan mengelola sistem telekomunikasi.",
    warna: "bg-midnight text-white",
  },
  {
    singkatan: "PPLG",
    nama: "Pengembangan Perangkat Lunak dan Gim",
    deskripsi: "Membuat aplikasi, website, dan gim dengan pemrograman.",
    warna: "bg-ocean text-white",
  },
  {
    singkatan: "PSPT",
    nama: "Produksi dan Siaran Program Televisi",
    deskripsi: "Belajar memproduksi dan menyiarkan program televisi dari ide sampai tayang.",
    warna: "bg-sky text-white",
  },
];

const statistik = [
  { angka: "1967", nama: "Tahun berdiri" },
  { angka: String(jurusan.length), nama: "Program keahlian" },
  { angka: "50", nama: "Ruang kelas" },
  { angka: "7", nama: "Laboratorium komputer" },
];

export default function Home() {
  const terbaru = daftarBerita.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Kartu fitur, menumpuk di bawah hero */}
      <section className="relative z-10 mx-auto -mt-20 max-w-6xl px-4">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fitur.map((f) => (
            <div
              key={f.judul}
              className="rounded-2xl border-t-4 border-sun bg-white p-6 shadow-xl"
            >
              <h3 className="font-display text-lg font-semibold text-ocean">
                {f.judul}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-midnight/75">
                {f.teks}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tentang singkat */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 md:grid-cols-2">
        <div className="relative pb-8 pr-8">
          <Gambar
            src="/about.jpg"
            alt="Kegiatan belajar di SMK Negeri 2 Pekalongan"
            label="Foto kegiatan (public/about.jpg)"
            className="h-80 w-full rounded-3xl md:h-[26rem]"
          />
          <Gambar
            src="/kegiatan.jpg"
            alt="Siswa SMK Negeri 2 Pekalongan"
            label="Foto kedua"
            warna="bg-sky text-white"
            className="absolute bottom-0 right-0 h-36 w-36 rounded-3xl border-4 border-white shadow-xl md:h-44 md:w-44"
          />
          <div className="absolute -left-3 top-8 rounded-2xl bg-sun px-5 py-4 text-midnight shadow-xl">
            <p className="font-display text-3xl font-bold leading-none">1967</p>
            <p className="mt-1 text-sm font-semibold">Mulai mendidik</p>
          </div>
        </div>

        <div>
          <p className="flex items-center gap-3 font-semibold text-sun">
            <span className="h-0.5 w-8 bg-sun" />
            Tentang kami
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ocean md:text-4xl">
            Mengenal SMK Negeri 2 Pekalongan
          </h2>
          <p className="mt-4 leading-relaxed text-midnight/80">
            Selamat datang di website SMK Negeri 2 Pekalongan. Kami berkomitmen
            membekali siswa dengan keterampilan kerja, sikap yang baik, dan
            kepercayaan diri untuk melangkah ke dunia usaha, dunia industri,
            maupun pendidikan lanjutan.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="border-l-4 border-sun pl-4">
              <p className="font-display font-semibold text-ocean">Lokasi</p>
              <p className="text-sm text-midnight/75">
                Jl. Perintis Kemerdekaan No. 29, Kota Pekalongan
              </p>
            </li>
            <li className="border-l-4 border-sky pl-4">
              <p className="font-display font-semibold text-ocean">Status</p>
              <p className="text-sm text-midnight/75">Sekolah menengah kejuruan negeri</p>
            </li>
          </ul>
          <Link
            href="/about"
            className="mt-8 inline-flex rounded-full bg-ocean px-7 py-3 font-semibold text-white transition hover:bg-midnight"
          >
            Selengkapnya
          </Link>
        </div>
      </section>

      {/* Statistik */}
      <section
        className="text-white"
        style={{
          backgroundImage: "linear-gradient(90deg, #00205b, #003087)",
        }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-14 text-center md:grid-cols-4">
          {statistik.map((s) => (
            <div key={s.nama}>
              <p className="font-display text-4xl font-bold text-sun md:text-5xl">
                {s.angka}
              </p>
              <p className="mt-1 text-white/85">{s.nama}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program keahlian */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-sun">Program keahlian</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ocean md:text-4xl">
              Pilih bidang yang paling kamu minati
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jurusan.map((j) => (
              <div
                key={j.nama}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
              >
                <div
                  className={`flex h-28 items-center justify-center font-display text-4xl font-bold ${j.warna}`}
                >
                  {j.singkatan}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold leading-snug text-ocean">
                    {j.nama}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-midnight/75">
                    {j.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Berita terbaru */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-semibold text-sun">Berita</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ocean md:text-4xl">
              Kabar terbaru sekolah
            </h2>
          </div>
          <Link
            href="/berita"
            className="rounded-full border-2 border-ocean px-6 py-2 font-semibold text-ocean transition hover:bg-ocean hover:text-white"
          >
            Semua berita
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {terbaru.map((b) => (
            <BeritaCard key={b.id} berita={b} />
          ))}
        </div>
      </section>

      {/* Ajakan */}
      <section className="bg-ocean text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-14 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Ingin tahu lebih banyak tentang sekolah kami?
            </h2>
            <p className="mt-2 text-white/85">
              Baca profil, sejarah, visi, dan misi di halaman About.
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 rounded-full bg-sun px-8 py-3 font-semibold text-midnight transition hover:bg-sand"
          >
            Buka halaman About
          </Link>
        </div>
      </section>
    </>
  );
}