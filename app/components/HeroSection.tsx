"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] relative"
    >
      <div className="absolute inset-x-[-16px] inset-y-[-112px] lg:hidden">
        <Image
          src="/images/mah.JPG"
          alt="DJ MA avec sa console"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#210635]/70 via-[#210635]/50 to-[#210635]/90" />
      </div>

      <div className="flex flex-col gap-6 relative z-10 lg:col-span-1">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/15 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#F5D5E0]" />
          DJ MA — Moonlight grooves
        </span>
        <h4 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Des sets qui font vibrer chaque événement.
        </h4>
        <p className="max-w-2xl text-lg text-white/80">
          DJ MA mélange house, afro, techno et edits surprises pour faire
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

      <div className="hidden lg:flex relative items-center justify-center">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-2xl" />
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl backdrop-blur">
          <Image
            src="/images/mah.JPG"
            alt="DJ MA avec sa console"
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
  );
}
