import Link from "next/link";
import Gambar from "@/components/Gambar";

export const metadata = { title: "About | SMK Negeri 2 Pekalongan" };

const sejarah = [
  {
    tahun: "1967",
    teks: "Pembelajaran dimulai dengan nama SMEA Persiapan Negeri di Jalan Salak No. 22-24, dengan jurusan Tata Perusahaan dan Tata Buku.",
  },
  {
    tahun: "1970",
    teks: "Sekolah ditetapkan menjadi SMEA Negeri Pekalongan dengan jurusan Tata Buku, Tata Usaha, dan Tata Niaga.",
  },
  {
    tahun: "1981",
    teks: "Sekolah pindah ke gedung baru di Jl. Perintis Kemerdekaan No. 29 dan menambah jurusan Koperasi.",
  },
  {
    tahun: "Kini",
    teks: "Nama berubah menjadi SMK Negeri 2 Pekalongan dengan enam program keahlian: Akuntansi, Administrasi Perkantoran, Pemasaran, Teknik Komputer dan Jaringan, Pengembangan Perangkat Lunak dan Gim, serta Broadcasting dan Perfilman.",
  },
];

const misi = [
  { judul: "Disiplin", teks: "Membiasakan siswa tertib, tepat waktu, dan bertanggung jawab.", garis: "border-sun" },
  { judul: "Terampil", teks: "Membekali siswa dengan kompetensi sesuai kebutuhan dunia kerja.", garis: "border-sky" },
  { judul: "Berkarakter", teks: "Menumbuhkan sikap jujur, santun, dan peduli sesama.", garis: "border-ocean" },
  { judul: "Kolaboratif", teks: "Bekerja sama dengan dunia usaha dan industri untuk praktik kerja.", garis: "border-midnight" },
];

const fasilitas = [
  { angka: "50", nama: "Ruang kelas" },
  { angka: "7", nama: "Laboratorium komputer" },
  { angka: "2", nama: "Perpustakaan" },
  { angka: "1", nama: "Laboratorium bahasa" },
];

export default function About() {
  return (
    <>
      {/* Judul halaman */}
      <section
        className="text-white"
        style={{ backgroundImage: "linear-gradient(90deg, #00205b, #003087)" }}
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="font-display text-4xl font-bold md:text-5xl">
            Tentang SMK Negeri 2 Pekalongan
          </h1>
          <p className="mt-3 text-white/85">
            <Link href="/" className="hover:text-sun">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-sun">About</span>
          </p>
        </div>
      </section>

      {/* Profil */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-ocean">Profil sekolah</h2>
          <p className="mt-4 leading-relaxed text-midnight/80">
            SMK Negeri 2 Pekalongan adalah sekolah menengah kejuruan negeri yang
            berfokus pada bidang bisnis, manajemen, dan teknologi informasi.
            Siswa belajar teori di kelas dan berlatih langsung melalui praktik
            di sekolah serta praktik kerja lapangan.
          </p>
          <dl className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="flex gap-4 p-4">
              <dt className="w-24 shrink-0 font-display font-semibold text-sun">Berdiri</dt>
              <dd>1967</dd>
            </div>
            <div className="flex gap-4 p-4">
              <dt className="w-24 shrink-0 font-display font-semibold text-sun">Status</dt>
              <dd>Sekolah negeri</dd>
            </div>
            <div className="flex gap-4 p-4">
              <dt className="w-24 shrink-0 font-display font-semibold text-sun">Alamat</dt>
              <dd>Jl. Perintis Kemerdekaan No. 29, Kota Pekalongan, Jawa Tengah</dd>
            </div>
          </dl>
        </div>
        <Gambar
          src="/about.jpg"
          alt="Kegiatan belajar di SMK Negeri 2 Pekalongan"
          label="Foto kegiatan sekolah (public/about.jpg)"
          className="h-72 w-full rounded-3xl md:h-[26rem]"
        />
      </section>

      {/* Sejarah */}
      <section className="bg-mist">
        <div className="mx-auto max-w-4xl px-4 py-20">
          <h2 className="font-display text-3xl font-bold text-ocean">Sejarah singkat</h2>
          <ol className="mt-8 space-y-5 border-l-4 border-sun pl-6">
            {sejarah.map((s) => (
              <li key={s.tahun} className="relative rounded-2xl bg-white p-5 shadow-md">
                <span className="absolute -left-[2.15rem] top-6 h-4 w-4 rounded-full border-4 border-sun bg-ocean" />
                <p className="font-display text-xl font-bold text-ocean">{s.tahun}</p>
                <p className="mt-1 leading-relaxed text-midnight/80">{s.teks}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Visi dan misi */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        {/* TODO: ganti dengan visi resmi sekolah */}
        <div className="rounded-3xl bg-ocean p-8 text-white md:p-12">
          <h2 className="font-display text-3xl font-bold text-sun">Visi</h2>
          <p className="mt-3 max-w-3xl text-xl leading-relaxed">
            Menjadi sekolah kejuruan yang menghasilkan lulusan terampil,
            berkarakter, dan siap bersaing di dunia kerja.
          </p>
        </div>

        <h2 className="mt-14 font-display text-3xl font-bold text-ocean">Misi</h2>
        <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {misi.map((m, i) => (
            <li
              key={m.judul}
              className={`rounded-2xl border-t-4 bg-white p-6 shadow-md ${m.garis}`}
            >
              <span className="font-display text-4xl font-bold text-sun">{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ocean">{m.judul}</h3>
              <p className="mt-1 text-sm leading-relaxed text-midnight/75">{m.teks}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Fasilitas dan alamat */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="font-display text-3xl font-bold text-ocean">Fasilitas</h2>
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
            {fasilitas.map((f) => (
              <div key={f.nama} className="rounded-2xl bg-white p-6 text-center shadow-md">
                <p className="font-display text-5xl font-bold text-ocean">{f.angka}</p>
                <p className="mt-1 font-semibold text-midnight/80">{f.nama}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-midnight p-8 text-white md:p-10">
            <h2 className="font-display text-2xl font-bold text-sun">Alamat sekolah</h2>
            <address className="mt-3 text-lg not-italic leading-relaxed">
              SMK Negeri 2 Pekalongan
              <br />
              Jl. Perintis Kemerdekaan No. 29
              <br />
              Kota Pekalongan, Jawa Tengah
            </address>
          </div>
        </div>
      </section>
    </>
  );
}