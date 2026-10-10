import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-4 border-sun bg-midnight text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h2 className="font-display text-xl font-bold">
            SMK Negeri 2 Pekalongan
          </h2>
          <p className="mt-2 max-w-xs text-white/75">
            Terampil, berkarakter, dan siap bekerja.
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sun">Alamat</h3>
          <address className="mt-2 not-italic text-white/75">
            Jl. Perintis Kemerdekaan No. 29
            <br />
            Kota Pekalongan, Jawa Tengah
          </address>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sun">Menu</h3>
          <ul className="mt-2 space-y-1 text-white/75">
            <li>
              <Link href="/" className="hover:text-sun">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sun">About</Link>
            </li>
            <li>
              <Link href="/berita" className="hover:text-sun">Berita</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-white/60">
        © 2026 SMK Negeri 2 Pekalongan. Dibuat untuk tugas UTS Pemrograman Web.
      </div>
    </footer>
  );
}