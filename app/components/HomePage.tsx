/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from 'react-icons/fa';
import { useState } from "react";

const palette = {
  blush: "#F5D5E0",
  periwinkle: "#6667AB",
  magenta: "#7B337E",
  violet: "#420D4B",
  midnight: "#210635",
};

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;
    const offset = 80; // height of header + spacing
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setNavOpen(false);
  };


  return (
    <div
      className="relative min-h-screen overflow-hidden text-white scroll-smooth"
      style={{
        background: `radial-gradient(circle at 20% 20%, ${palette.magenta} 0, rgba(123,51,126,0.15) 25%, transparent 40%), radial-gradient(circle at 80% 10%, ${palette.periwinkle} 0, rgba(102,103,171,0.15) 20%, transparent 35%), linear-gradient(140deg, ${palette.midnight} 0%, ${palette.violet} 50%, ${palette.magenta} 100%)`,
      }}
    >
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-center px-4 py-3 sm:px-6">
        <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur">
          <span>DJ Mah</span>
          <nav className="hidden items-center gap-4 md:flex">
            <a
              className="hover:text-white"
              href="#hero"
              onClick={(e) => handleNavClick(e, "hero")}
            >
              À propos
            </a>
            <a
              className="hover:text-white"
              href="#mixes"
              onClick={(e) => handleNavClick(e, "mixes")}
            >
              Mixes & services
            </a>
             <a
              className="hover:text-white"
              href="#social"
              onClick={(e) => handleNavClick(e, "social")}
            >
              Réseaux sociaux
            </a>
            <a
              className="hover:text-white"
              href="#clients"
              onClick={(e) => handleNavClick(e, "clients")}
            >
              Ils nous ont choisi
            </a>
           
            <a
              className="hover:text-white"
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </a>
          </nav>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs text-white md:hidden"
            onClick={() => setNavOpen((v) => !v)}
            aria-label={navOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {navOpen ? <X size={18} /> : <Menu size={18} />}
            <span className="leading-none">{navOpen ? "Fermer" : "Menu"}</span>
          </button>
        </div>
        {navOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 md:hidden">
            <nav className="flex flex-col gap-6 text-center">
              <a
                className="text-2xl font-semibold text-white hover:text-[#F5D5E0]"
                href="#hero"
                onClick={(e) => handleNavClick(e, "hero")}
              >
                À propos
              </a>
              <a
                className="text-2xl font-semibold text-white hover:text-[#F5D5E0]"
                href="#mixes"
                onClick={(e) => handleNavClick(e, "mixes")}
              >
                Mixes & services
              </a>
             
              <a
                className="text-2xl font-semibold text-white hover:text-[#F5D5E0]"
                href="#social"
                onClick={(e) => handleNavClick(e, "social")}
              >
                Réseaux sociaux
              </a>
               <a
                className="text-2xl font-semibold text-white hover:text-[#F5D5E0]"
                href="#clients"
                onClick={(e) => handleNavClick(e, "clients")}
              >
                Ils nous ont choisi
              </a>
              <a
                className="text-2xl font-semibold text-white hover:text-[#F5D5E0]"
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>
            </nav>
            <button
              type="button"
              className="absolute top-6 right-6 rounded-full border border-white/20 bg-white/10 p-3 text-white"
              onClick={() => setNavOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>
          </div>
        )}
      </header>

      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
        <div className="absolute right-12 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#6667AB]/40 to-transparent blur-3xl" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-16 pt-28 sm:px-6 md:px-12 lg:px-20">
        <section
          id="hero"
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/15 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#F5D5E0]" />
              DJ Mah — Moonlight grooves
            </span>
            <h4 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Des sets qui font vibrer chaque événement.
            </h4>
            <p className="max-w-2xl text-lg text-white/80">
              DJ Mah mélange house, afro, techno et edits surprises pour faire
              danser clubs, festivals, afterworks ou cérémonies. Un son lunaire
              inspiré de la palette Moon: profond, chaud et électrique, jour et
              nuit.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#F5D5E0] px-5 py-3 text-sm font-semibold text-[#210635] shadow-lg shadow-[#F5D5E0]/30 transition hover:-translate-y-0.5 hover:shadow-[#F5D5E0]/50"
              >
                Réserver une date
              </a>
              <a
                href="#mixes"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                Écouter un mix
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {["House", "Afro vibes", "Techno", "Edits & remixes"].map(
                (style) => (
                  <span
                    key={style}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/15"
                  >
                    {style}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl backdrop-blur">
              <Image
                src="/images/mah.JPG"
                alt="DJ Mah avec sa console"
                width={900}
                height={1200}
                className="h-full w-full object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#210635]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-black/30 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur">
                <span>Live mix session</span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white/70">
                  Moon palette
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="mixes"
          className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur lg:grid-cols-3"
        >
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold">Mixes & services</h2>
            <p className="mt-3 text-sm text-white/80">
              Sélectionne l&apos;ambiance idéale: clubs, rooftops, afterworks,
              mariages, événements corporate.
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
            {[
              {
                title: "Club / Festival",
                desc: "Sets énergiques, transitions serrées, drops qui font lever les mains.",
                tone: "#420D4B",
              },
              {
                title: "Privé / Corporate",
                desc: "Playlists sur-mesure, volume maîtrisé, vibe élégante et mémorable.",
                tone: "#7B337E",
              },
              {
                title: "Sunset / Chill",
                desc: "Deep house, afro chill, mélodies aériennes pour golden hours.",
                tone: "#6667AB",
              },
              {
                title: "After / Late night",
                desc: "Grooves hypnotiques, techno mélodique et basses enveloppantes.",
                tone: "#210635",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className="absolute inset-0 opacity-60 blur-2xl transition duration-500 group-hover:opacity-80"
                  style={{
                    background: `radial-gradient(circle at 20% 20%, ${item.tone}, transparent 55%)`,
                  }}
                  aria-hidden
                />
                <div className="relative space-y-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="social"
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Réseaux sociaux
              </p>
              <h2 className="text-2xl font-bold">Suivez DJ Mah</h2>
              <p className="text-sm text-white/80">
                Retrouvez tous les mixes, extraits et actualités sur les réseaux.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
            <a
              href="https://web.facebook.com/search/top?q=rananja%20mahefa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <Facebook size={24} className="text-[#1877F2]" />
              <span className="font-semibold">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/rananja_mahefa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <Instagram size={24} className="text-[#E4405F]" />
              <span className="font-semibold">Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@rananja.m?_r=1&_t=ZS-94DcPISxr5Z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <FaTiktok size={24} className="text-black" />
              <span className="font-semibold">TikTok</span>
            </a>
          </div>
        </section>
        <section
          id="clients"
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Ils nous ont choisi
              </p>
              <h2 className="text-2xl font-bold">Clubs, événements & partenaires</h2>
              <p className="text-sm text-white/80">
                Quelques visuels des dates récentes où Mah a joué.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/images/mix.jpeg", alt: "DJ Mah en mix" },
              { src: "/images/mix3.jpeg", alt: "Final slam National IFM" },
              { src: "/images/ifm1.jpeg", alt: "SN16 à l'IFM" },
              { src: "/images/mah.JPG", alt: "Portrait DJ Mah" },
              { src: "/images/sary1.jpeg", alt: "Evénement MU" },
              { src: "/images/sary2.jpeg", alt: "Fin d'année MU" },
              { src: "/images/sary5.jpeg", alt: "Evenement privée" },
              { src: "/images/anniv.jpeg", alt: "Anniversaire Andz" },
            ].map((img) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setSelectedImage(img)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#F5D5E0]/70"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={600}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#210635]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition" />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
                  {img.alt}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#210635]/70 via-[#420D4B]/70 to-[#7B337E]/70 p-8 shadow-2xl backdrop-blur lg:grid-cols-2"
        >
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Booking
            </p>
            <h2 className="text-3xl font-bold">Parlons de ta date.</h2>
            <p className="text-base text-white/80">
              Dispo pour clubs, open airs, événements privés ou corporate.
              Partage la date, la ville et l&apos;ambiance recherchée.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Sonorisation & setup DJ", color: palette.periwinkle },
                { label: "Warm-up ou closing", color: palette.blush },
                { label: "Afro/House/Techno", color: palette.magenta },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="rounded-full px-3 py-1 text-xs font-semibold text-[#210635]"
                  style={{ backgroundColor: tag.color }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/10 p-3">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90">Email</p>
                    <a href="mailto:test@test.com" className="text-white/80 hover:text-white transition">
                      test@test.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/10 p-3">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90">Téléphone</p>
                    <a href="tel:+261344643256" className="text-white/80 hover:text-white transition">
                      +261 34 46 432 56
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-12 lg:px-20">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            {/* Colonne 1: À propos */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">À propos</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                DJ Mah, créateur d&apos;ambiances lunaires. Spécialiste des sets house, afro et techno qui font vibrer clubs, festivals et événements privés. Une palette sonore unique inspirée de la nuit.
              </p>
            </div>

            {/* Colonne 2: Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Navigation</h3>
              <nav className="flex flex-col gap-2">
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, "hero")}
                  className="text-sm text-white/80 hover:text-white transition"
                >
                  À propos
                </a>
                <a
                  href="#mixes"
                  onClick={(e) => handleNavClick(e, "mixes")}
                  className="text-sm text-white/80 hover:text-white transition"
                >
                  Mixes & services
                </a>
                 <a
                  href="#social"
                  onClick={(e) => handleNavClick(e, "social")}
                  className="text-sm text-white/80 hover:text-white transition"
                >
                  Réseaux sociaux
                </a>
                <a
                  href="#clients"
                  onClick={(e) => handleNavClick(e, "clients")}
                  className="text-sm text-white/80 hover:text-white transition"
                >
                  Ils nous ont choisi
                </a>
               
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="text-sm text-white/80 hover:text-white transition"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Colonne 3: Follow me */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Follow me</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://web.facebook.com/search/top?q=rananja%20mahefa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-[#1877F2]" />
                </a>
                <a
                  href="https://www.instagram.com/rananja_mahefa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-[#E4405F]" />
                </a>
                <a
                  href="https://www.tiktok.com/@rananja.m?_r=1&_t=ZS-94DcPISxr5Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
                  aria-label="TikTok"
                >
                  <FaTiktok size={20} className="text-black" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/60">
              © 2026 Dj Mah — Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-black/40 backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage?.src || ""}
              alt={selectedImage?.alt || ""}
              width={1600}
              height={1000}
              className="h-full w-full max-h-[85vh] object-contain"
              priority
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white/80 hover:bg-black/90"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

