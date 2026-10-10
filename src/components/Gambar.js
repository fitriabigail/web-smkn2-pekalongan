"use client";

import { useState } from "react";


export default function Gambar({
  src,
  alt,
  label = "Foto",
  warna = "bg-ocean text-white",
  className = "",
}) {
  const [gagal, setGagal] = useState(false);

  if (!src || gagal) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center p-4 text-center font-display font-semibold ${warna} ${className}`}
      >
        {label}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setGagal(true)}
      className={`object-cover ${className}`}
    />
  );
}