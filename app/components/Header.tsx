"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onNavClick: (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-center px-4 py-3 sm:px-6">
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-6 py-4 text-sm font-semibold text-white/90 backdrop-blur">
        <span>DJ MA</span>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            className="hover:text-white"
            href="#hero"
            onClick={(e) => onNavClick(e, "hero")}
          >
            À propos
          </a>
          <a
            className="hover:text-white"
            href="#mixes"
            onClick={(e) => onNavClick(e, "mixes")}
          >
            Mixes & services
          </a>
           <a
            className="hover:text-white"
            href="#social"
            onClick={(e) => onNavClick(e, "social")}
          >
            Réseaux sociaux
          </a>
          <a
            className="hover:text-white"
            href="#clients"
            onClick={(e) => onNavClick(e, "clients")}
          >
            Ils nous ont choisi
          </a>
          <a
            className="hover:text-white"
            href="#blog"
            onClick={(e) => onNavClick(e, "blog")}
          >
            Blog
          </a>
          <a
            className="hover:text-white"
            href="#contact"
            onClick={(e) => onNavClick(e, "contact")}
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 px-4 md:hidden">
          <nav className="flex flex-col gap-5 text-center items-center justify-center">
            <a
              className="text-xl font-semibold text-white hover:text-[#F5D5E0] transition-colors"
              href="#hero"
              onClick={(e) => {
                onNavClick(e, "hero");
                setNavOpen(false);
              }}
            >
              À propos
            </a>
            <a
              className="text-xl font-semibold text-white hover:text-[#F5D5E0] transition-colors"
              href="#mixes"
              onClick={(e) => {
                onNavClick(e, "mixes");
                setNavOpen(false);
              }}
            >
              Mixes & services
            </a>
           
            <a
              className="text-xl font-semibold text-white hover:text-[#F5D5E0] transition-colors"
              href="#social"
              onClick={(e) => {
                onNavClick(e, "social");
                setNavOpen(false);
              }}
            >
              Réseaux sociaux
            </a>
             <a
              className="text-xl font-semibold text-white hover:text-[#F5D5E0] transition-colors"
              href="#clients"
              onClick={(e) => {
                onNavClick(e, "clients");
                setNavOpen(false);
              }}
            >
              Ils nous ont choisi
            </a>
            <a
              className="text-xl font-semibold text-white hover:text-[#F5D5E0] transition-colors"
              href="#blog"
              onClick={(e) => {
                onNavClick(e, "blog");
                setNavOpen(false);
              }}
            >
              Blog
            </a>
            <a
              className="text-xl font-semibold text-white hover:text-[#F5D5E0] transition-colors"
              href="#contact"
              onClick={(e) => {
                onNavClick(e, "contact");
                setNavOpen(false);
              }}
            >
              Contact
            </a>
          </nav>
          <button
            type="button"
            className="absolute top-6 right-6 rounded-full border border-white/20 bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
            onClick={() => setNavOpen(false)}
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>
        </div>
      )}
    </header>
  );
}
