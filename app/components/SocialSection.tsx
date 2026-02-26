"use client";
import { Facebook, Instagram } from "lucide-react";
import { FaTiktok } from 'react-icons/fa';

export default function SocialSection() {
  return (
    <section
      id="social"
      className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Réseaux sociaux
          </p>
          <h2 className="text-2xl font-bold">Suivez DJ MA</h2>
          <p className="text-sm text-white/80">
            Retrouvez tous les mixes, extraits et actualités sur les réseaux.
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-4 justify-between w-full sm:flex-nowrap">
        <a
          href="https://web.facebook.com/search/top?q=rananja%20mahefa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 w-full"
        >
          <Facebook size={24} className="text-[#1877F2]" />
          <span className="font-semibold">Facebook</span>
        </a>
        <a
          href="https://www.instagram.com/rananja_mahefa/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 w-full"
        >
          <Instagram size={24} className="text-[#E4405F]" />
          <span className="font-semibold">Instagram</span>
        </a>
        <a
          href="https://www.tiktok.com/@rananja.m?_r=1&_t=ZS-94DcPISxr5Z"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 w-full"
        >
          <FaTiktok size={24} className="text-black" />
          <span className="font-semibold">TikTok</span>
        </a>
      </div>
    </section>
  );
}
