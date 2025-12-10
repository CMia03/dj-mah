import Image from "next/image";

const palette = {
  blush: "#F5D5E0",
  periwinkle: "#6667AB",
  magenta: "#7B337E",
  violet: "#420D4B",
  midnight: "#210635",
};

export default function HomePage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        background: `radial-gradient(circle at 20% 20%, ${palette.magenta} 0, rgba(123,51,126,0.15) 25%, transparent 40%), radial-gradient(circle at 80% 10%, ${palette.periwinkle} 0, rgba(102,103,171,0.15) 20%, transparent 35%), linear-gradient(140deg, ${palette.midnight} 0%, ${palette.violet} 50%, ${palette.magenta} 100%)`,
      }}
    >
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
        <div className="absolute right-12 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#6667AB]/40 to-transparent blur-3xl" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 md:px-12 lg:px-20">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
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
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/90">
                  Email / contact
                </label>
                <input
                  type="email"
                  placeholder="ton.email@exemple.com"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none"
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
                />
              </div>
              <button
                type="button"
                className="w-full rounded-xl bg-[#F5D5E0] px-4 py-3 text-sm font-bold text-[#210635] shadow-lg shadow-[#F5D5E0]/30 transition hover:-translate-y-0.5 hover:shadow-[#F5D5E0]/50"
              >
                Envoyer la demande
              </button>
              <p className="text-xs text-white/70">
                Ce formulaire est statique. Branche-le à ton outil préféré
                (Formspree, Resend, Airtable...) pour recevoir les demandes.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

