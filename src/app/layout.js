import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SMK Negeri 2 Pekalongan",
  description:
    "Website profil SMK Negeri 2 Pekalongan: informasi sekolah, program keahlian, dan berita terbaru.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${poppins.variable} ${inter.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}