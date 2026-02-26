export default function MixesSection() {
  const services = [
    {
      title: "Mariages / Fiançailles",
      desc: "Musique élégante et émouvante pour célébrer les plus beaux moments de votre vie.",
      tone: "#F5D5E0",
    },
    {
      title: "Anniversaires / Soirées privées",
      desc: "Ambiance festive et personnalisée pour célébrer en musique avec vos proches.",
      tone: "#7B337E",
    },
    {
      title: "Événements corporate / Afterworks",
      desc: "Sets professionnels et dynamiques pour vos événements d'entreprise.",
      tone: "#6667AB",
    },
    {
      title: "Clubs & Opening Sets",
      desc: "Grooves hypnotiques, techno mélodique et basses enveloppantes pour faire vibrer la piste.",
      tone: "#210635",
    },
    {
      title: "Brunchs, Rooftops & Sunset Sessions",
      desc: "Ambiance chill et élégante, sons doux et mélodiques pour des moments agréables.",
      tone: "#420D4B",
    },
    {
      title: "Festivals & Soirées thématiques",
      desc: "Sets énergiques, transitions serrées, drops qui font lever les mains et créent l'électrochoc.",
      tone: "#7B337E",
    },
  ];

  return (
    <section
      id="mixes"
      className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur lg:grid-cols-3"
    >
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-bold">Mes prestations</h2>
        <p className="mt-3 text-sm text-white/80">
          Ambiances variées: clubs, rooftops, afterworks, mariages, événements corporate.
        </p>
      </div>
      <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
        {services.map((item) => (
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
  );
}
