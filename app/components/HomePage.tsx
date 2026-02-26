"use client";
import { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import MixesSection from "./MixesSection";
import SocialSection from "./SocialSection";
import ClientsSection from "./ClientsSection";
import ContactSection from "./ContactSection";
import BlogSection from "./BlogSection";
import Footer from "./Footer";
import ImageModal from "./ImageModal";
import AudioPlayer from "./AudioPlayer";

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
  const [isAudioPlayerOpen, setIsAudioPlayerOpen] = useState(false);

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

  const handleImageClick = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePlayMix = () => {
    setIsAudioPlayerOpen(true);
  };

  const handleCloseAudioPlayer = () => {
    setIsAudioPlayerOpen(false);
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden text-white scroll-smooth"
      style={{
        background: `radial-gradient(circle at 20% 20%, ${palette.magenta} 0, rgba(123,51,126,0.15) 25%, transparent 40%), radial-gradient(circle at 80% 10%, ${palette.periwinkle} 0, rgba(102,103,171,0.15) 20%, transparent 35%), linear-gradient(140deg, ${palette.midnight} 0%, ${palette.violet} 50%, ${palette.magenta} 100%)`,
      }}
    >
      <Header onNavClick={handleNavClick} />

      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
        <div className="absolute right-12 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#6667AB]/40 to-transparent blur-3xl" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-16 pt-28 sm:px-6 md:px-12 lg:px-20">
        <HeroSection onPlayMix={handlePlayMix} />
        <MixesSection />
        <SocialSection />
        <ClientsSection onImageClick={handleImageClick} />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer onNavClick={handleNavClick} />
      <ImageModal selectedImage={selectedImage} onClose={handleCloseModal} />
      <AudioPlayer 
        isOpen={isAudioPlayerOpen} 
        onClose={handleCloseAudioPlayer} 
        audioSrc="/mix/mixMa.mp3" 
      />
    </div>
  );
}
