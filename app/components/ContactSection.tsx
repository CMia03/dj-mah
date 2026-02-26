export default function ContactSection() {
  const palette = {
    blush: "#F5D5E0",
    periwinkle: "#6667AB",
    magenta: "#7B337E",
    violet: "#420D4B",
    midnight: "#210635",
  };

  const tags = [
    { label: "Sonorisation & setup DJ", color: palette.periwinkle },
    { label: "Warm-up ou closing", color: palette.blush },
    { label: "Afro/House/Techno", color: palette.magenta },
  ];

  return (
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
          {tags.map((tag) => (
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
                <a href="mailto:mhfrananja@gmail.com" className="text-white/80 hover:text-white transition">
                  mhfrananja@gmail.com
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
                <a href="tel:+261326914314" className="text-white/80 hover:text-white transition">
                  +261 32 69 143 14
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
