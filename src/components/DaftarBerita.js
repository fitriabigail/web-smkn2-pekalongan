"use client";

import { useEffect, useState } from "react";
import BeritaCard from "@/components/BeritaCard";
import { daftarBerita } from "@/data/berita";

export default function DaftarBerita() {
  const [semua, setSemua] = useState(daftarBerita);

  useEffect(() => {
    try {
      const tersimpan = JSON.parse(localStorage.getItem("berita") || "[]");
      const terbit = tersimpan.filter((b) => b.status === "Terbit" && b.isi);
      setSemua([...terbit, ...daftarBerita]);
    } catch {}
  }, []);

  return semua.map((b) => <BeritaCard key={b.id} berita={b} />);
}