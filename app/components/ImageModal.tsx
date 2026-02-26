"use client";
import Image from "next/image";

interface ImageModalProps {
  selectedImage: { src: string; alt: string } | null;
  onClose: () => void;
}

export default function ImageModal({ selectedImage, onClose }: ImageModalProps) {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
      onClick={onClose}
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
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white/80 hover:bg-black/90"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
