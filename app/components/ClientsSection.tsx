"use client";
import Image from "next/image";

interface ClientsSectionProps {
  onImageClick: (image: { src: string; alt: string }) => void;
}

export default function ClientsSection({ onImageClick }: ClientsSectionProps) {
  const clientImages = [
    { src: "/images/mix.jpeg", alt: "DJ MA en mix" },
    { src: "/images/mix3.jpeg", alt: "Final slam National IFM" },
    { src: "/images/ifm1.jpeg", alt: "SN16 à l'IFM" },
    { src: "/images/mah.JPG", alt: "Portrait DJ MA" },
    { src: "/images/sary1.jpeg", alt: "Evénement MU" },
    { src: "/images/sary2.jpeg", alt: "Fin d'année MU" },
    { src: "/images/sary5.jpeg", alt: "Evenement privée" },
    { src: "/images/anniv.jpeg", alt: "Anniversaire Andz" },
  ];

  return (
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
        {clientImages.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => onImageClick(img)}
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
  );
}
