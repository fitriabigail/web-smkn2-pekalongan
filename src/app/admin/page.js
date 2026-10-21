"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const dataAwal = [];

const TABS = ["Semua", "Terbit", "Draft"];
const PER_HALAMAN = 5;
const KOLOM = "grid grid-cols-[48px_1fr_150px_110px_170px] items-center gap-4";

export default function AdminPage() {
  const [berita, setBerita] = useState(dataAwal);
  const [tab, setTab] = useState("Semua");
  const [cari, setCari] = useState("");
  const [halaman, setHalaman] = useState(1);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ judul: "", tanggal: "", ringkasan: "", isi: "" });
  const [siap, setSiap] = useState(false);

  useEffect(() => {
  const tersimpan = localStorage.getItem("berita");
  if (tersimpan) {
    setBerita(JSON.parse(tersimpan).map((b) => ({ ...b, status: b.status ?? "Terbit" })));
  }
  setSiap(true);
}, []);

useEffect(() => {
  if (siap) localStorage.setItem("berita", JSON.stringify(berita));
}, [berita, siap]);

  const terfilter = berita.filter(
    (b) =>
      (tab === "Semua" || b.status === tab) &&
      b.judul.toLowerCase().includes(cari.toLowerCase())
  );
  const totalHalaman = Math.max(1, Math.ceil(terfilter.length / PER_HALAMAN));
  const halamanAktif = Math.min(halaman, totalHalaman);
  const mulai = (halamanAktif - 1) * PER_HALAMAN;
  const tampil = terfilter.slice(mulai, mulai + PER_HALAMAN);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function tambah(e) {
  e.preventDefault();
  if (!form.judul || !form.tanggal) return;
  setBerita([
    {
      id: String(Date.now()),
      ...form,
      isi: form.isi.split("\n").filter(Boolean),
      status: "Draft",
    },
    ...berita,
  ]);
  setForm({ judul: "", tanggal: "", ringkasan: "", isi: "" });
  setModal(false);
}

  function hapus(id) {
    setBerita(berita.filter((b) => b.id !== id));
  }

  function ubahStatus(id) {
    setBerita(
      berita.map((b) =>
        b.id === id ? { ...b, status: b.status === "Terbit" ? "Draft" : "Terbit" } : b
      )
    );
  }

  function formatTanggal(t) {
    return new Date(t).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  const input =
    "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-midnight placeholder:text-slate-400 focus:outline-2 focus:outline-ocean";

  return (
    <main className="min-h-screen bg-mist px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-xl md:flex-row">
        {/* ===== Sidebar ===== */}
        <aside className="flex flex-col bg-ocean p-6 text-white md:w-60">
          <h2 className="font-display text-xl font-bold">
            Admin<span className="text-sun">.</span>
          </h2>

          <nav className="mt-8 flex flex-row gap-2 md:flex-col">
            <span className="rounded-full bg-white px-5 py-2.5 font-semibold text-ocean">
              Berita
            </span>
            <Link href="/" className="rounded-full px-5 py-2.5 text-white/80 transition hover:bg-white/10">
              Lihat Website
            </Link>
            <Link href="/about" className="rounded-full px-5 py-2.5 text-white/80 transition hover:bg-white/10">
              About
            </Link>
          </nav>

          <p className="mt-6 text-xs text-white/60 md:mt-auto">
            SMK Negeri 2 Pekalongan
          </p>
        </aside>

        {/* ===== Konten ===== */}
        <section className="flex-1 overflow-x-auto p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl font-bold text-midnight">Berita</h1>
              <p className="text-sm text-slate-500">{terfilter.length} berita ditemukan</p>
            </div>
            <div className="flex items-center gap-3">
              <input
                value={cari}
                onChange={(e) => { setCari(e.target.value); setHalaman(1); }}
                placeholder="Cari judul..."
                className="rounded-full border border-slate-200 px-4 py-2 text-sm text-midnight placeholder:text-slate-400 focus:outline-2 focus:outline-ocean"
              />
              <button
                onClick={() => setModal(true)}
                className="rounded-full bg-sun px-5 py-2 text-sm font-semibold text-midnight transition hover:opacity-85"
              >
                + Tambah
              </button>
            </div>
          </div>

          {/* Tab */}
          <div className="mt-6 flex gap-6 border-b border-slate-100">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setHalaman(1); }}
                className={`-mb-px border-b-2 pb-2 text-sm font-medium transition ${
                  tab === t
                    ? "border-ocean text-ocean"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Tabel */}
          <div className="mt-4 min-w-[640px]">
            <div className={`${KOLOM} rounded-lg bg-mist px-4 py-2.5 text-xs font-semibold text-slate-500`}>
              <span>No</span>
              <span>Judul</span>
              <span>Tanggal</span>
              <span>Status</span>
              <span>Aksi</span>
            </div>

            <div className="mt-3 grid gap-3">
              {tampil.length === 0 && (
                <p className="py-10 text-center text-slate-400">Belum ada berita.</p>
              )}

              {tampil.map((b, i) => (
                <article
                  key={b.id}
                  className={`${KOLOM} rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm shadow-sm transition hover:border-ocean hover:shadow-md`}
                >
                  <span className="text-slate-400">{mulai + i + 1}</span>

                  <div>
                    <p className="font-semibold text-midnight">{b.judul}</p>
                    <p className="line-clamp-1 text-xs text-slate-400">{b.ringkasan}</p>
                  </div>

                  <span className="text-slate-500">{formatTanggal(b.tanggal)}</span>

                  <button
                    onClick={() => ubahStatus(b.id)}
                    title="Klik untuk ubah status"
                    className={`flex w-fit items-center gap-1.5 text-xs font-semibold ${
                      b.status === "Terbit" ? "text-hijau" : "text-amber-600"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        b.status === "Terbit" ? "bg-hijau" : "bg-sun"
                      }`}
                    />
                    {b.status}
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={() => ubahStatus(b.id)}
                      className="rounded-full bg-mist px-3 py-1.5 text-xs font-semibold text-ocean transition hover:bg-ocean hover:text-white"
                    >
                      {b.status === "Terbit" ? "Jadikan Draft" : "Terbitkan"}
                    </button>
                    <button
                      onClick={() => hapus(b.id)}
                      className="rounded-full bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:opacity-85"
                    >
                      Hapus
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <span>
              Menampilkan {terfilter.length === 0 ? 0 : mulai + 1}-{mulai + tampil.length} dari {terfilter.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setHalaman(halamanAktif - 1)}
                disabled={halamanAktif === 1}
                className="rounded-full px-3 py-1.5 transition hover:bg-mist disabled:opacity-30"
              >
                ‹
              </button>
              {Array.from({ length: totalHalaman }, (_, n) => n + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setHalaman(n)}
                  className={`h-8 w-8 rounded-full font-semibold transition ${
                    n === halamanAktif ? "bg-ocean text-white" : "hover:bg-mist"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setHalaman(halamanAktif + 1)}
                disabled={halamanAktif === totalHalaman}
                className="rounded-full px-3 py-1.5 transition hover:bg-mist disabled:opacity-30"
              >
                ›
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ===== Modal Tambah ===== */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/60 p-4">
          <form onSubmit={tambah} className="grid w-full max-w-md gap-3 rounded-2xl bg-white p-6 shadow-2xl">
            <h3 className="font-display text-lg font-bold text-ocean">Tambah Berita</h3>
            <input name="judul" placeholder="Judul berita" value={form.judul} onChange={handleChange} className={input} />
            <input name="tanggal" type="date" value={form.tanggal} onChange={handleChange} className={input} />
            <textarea name="ringkasan" placeholder="Ringkasan berita" rows={3} value={form.ringkasan} onChange={handleChange} className={input} />
            <textarea name="isi" placeholder="Isi berita (satu baris = satu paragraf)" rows={5} value={form.isi} onChange={handleChange} className={input} />
            <div className="mt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setModal(false)}
                className="rounded-full px-5 py-2 text-sm font-semibold text-slate-500 hover:bg-mist"
              >
                Batal
              </button>
              <button
                type="submit"
                className="rounded-full bg-sun px-5 py-2 text-sm font-semibold text-midnight transition hover:opacity-85"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}