import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-display text-4xl font-bold text-ocean">
        Berita tidak ditemukan
      </h1>
      <p className="mt-3 text-midnight/80">
        Alamat berita ini tidak ada. Coba pilih dari daftar berita.
      </p>
      <Link
        href="/berita"
        className="mt-6 inline-flex rounded-full bg-sun px-7 py-3 font-semibold text-midnight transition hover:bg-sand"
      >
        Kembali ke Berita
      </Link>
    </div>
  );
}