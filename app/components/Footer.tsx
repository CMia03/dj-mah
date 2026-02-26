"use client";
import { Facebook, Instagram } from "lucide-react";
import { FaTiktok } from 'react-icons/fa';

interface FooterProps {
  onNavClick: (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-12 lg:px-20">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {/* Colonne 1: À propos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">À propos</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              DJ MA, créateur d&apos;ambiances lunaires. Spécialiste des sets house, afro et techno qui font vibrer clubs, festivals et événements privés. Une palette sonore unique inspirée de la nuit.
            </p>
          </div>

          {/* Colonne 2: Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="#hero"
                onClick={(e) => onNavClick(e, "hero")}
                className="text-sm text-white/80 hover:text-white transition"
              >
                À propos
              </a>
              <a
                href="#mixes"
                onClick={(e) => onNavClick(e, "mixes")}
                className="text-sm text-white/80 hover:text-white transition"
              >
                Mixes & services
              </a>
               <a
                href="#social"
                onClick={(e) => onNavClick(e, "social")}
                className="text-sm text-white/80 hover:text-white transition"
              >
                Réseaux sociaux
              </a>
              <a
                href="#clients"
                onClick={(e) => onNavClick(e, "clients")}
                className="text-sm text-white/80 hover:text-white transition"
              >
                Ils nous ont choisi
              </a>
             
              <a
                href="#contact"
                onClick={(e) => onNavClick(e, "contact")}
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
            © {fullYear} DJ MA — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
