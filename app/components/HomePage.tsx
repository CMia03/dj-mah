/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";

const palette = {
  blush: "#F5D5E0",
  periwinkle: "#6667AB",
  magenta: "#7B337E",
  violet: "#420D4B",
  midnight: "#210635",
};

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

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
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, details }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Envoi impossible");
      }
      setStatus("success");
      setEmail("");
      setDetails("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Envoi impossible");
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden text-white scroll-smooth"
      style={{
        background: `radial-gradient(circle at 20% 20%, ${palette.magenta} 0, rgba(123,51,126,0.15) 25%, transparent 40%), radial-gradient(circle at 80% 10%, ${palette.periwinkle} 0, rgba(102,103,171,0.15) 20%, transparent 35%), linear-gradient(140deg, ${palette.midnight} 0%, ${palette.violet} 50%, ${palette.magenta} 100%)`,
      }}
    >
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-center px-6 py-4">
        <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur">
          <span>DJ Mah</span>
          <nav className="flex items-center gap-4">
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
        </div>
      </header>

      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
        <div className="absolute right-12 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#6667AB]/40 to-transparent blur-3xl" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-16 pt-28 md:px-12 lg:px-20">
        <section
          id="hero"
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/15 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#F5D5E0]" />
              DJ Mah — Moonlight grooves
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Des sets qui font vibrer chaque événement.
            </h1>
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
              { src: "/images/mix3.jpeg", alt: "Mix chez MU" },
              { src: "/images/ifm1.jpeg", alt: "SN16 à l'IFM" },
              { src: "/images/mah.JPG", alt: "Portrait DJ Mah" },
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
          className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#210635]/70 via-[#420D4B]/70 to-[#7B337E]/70 p-8 shadow-2xl backdrop-blur lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-4">
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

          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/90">
                  Email / contact
                </label>
                <input
                  type="email"
                  placeholder="ton.email@exemple.com"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/90">
                  Détails de l&apos;événement
                </label>
                <textarea
                  rows={4}
                  placeholder="Date, lieu, type d'événement, ambiance..."
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none"
                  required
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-[#F5D5E0] px-4 py-3 text-sm font-bold text-[#210635] shadow-lg shadow-[#F5D5E0]/30 transition hover:-translate-y-0.5 hover:shadow-[#F5D5E0]/50"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Envoi..." : "Envoyer la demande"}
              </button>
              {status === "success" && (
                <p className="text-xs font-semibold text-green-200">
                  Demande envoyée, merci !
                </p>
              )}
              {status === "error" && (
                <p className="text-xs font-semibold text-red-200">
                  {error || "Erreur lors de l’envoi."}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
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
              src={selectedImage.src}
              alt={selectedImage.alt}
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

