"use client";
import { useState, useEffect, useRef } from "react";
import { X, Play, Pause } from "lucide-react";

interface AudioPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  audioSrc: string;
}

export default function AudioPlayer({ isOpen, onClose, audioSrc }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      if (audio.currentTime) {
        setCurrentTime(audio.currentTime);
      }
    };

    const updateDuration = () => {
      if (audio.duration) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isOpen) {
      audio.currentTime = 0;
      setCurrentTime(0);
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error('Play error:', error);
      });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, [isOpen]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error('Play error:', error);
      });
    }
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Fermer seulement si on clique sur le backdrop (l'élément parent)
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div 
        className="mx-4 w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-br from-[#210635]/90 to-[#420D4B]/90 p-6 shadow-2xl backdrop-blur"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">DJ MA - Mix</h3>
          <button
            onClick={handleClose}
            className="cursor-pointer rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Fermer le lecteur"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <button
              onClick={togglePlayPause}
              className="cursor-pointer flex h-16 w-16 items-center justify-center rounded-full bg-[#F5D5E0] text-[#210635] shadow-lg shadow-[#F5D5E0]/30 transition hover:scale-105 hover:shadow-[#F5D5E0]/50"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>

          <p className="text-center text-sm text-white/80">
            "Moonlight Grooves" - DJ MA
          </p>
        </div>

        <audio
          ref={audioRef}
          src={audioSrc}
          preload="metadata"
        />
      </div>
    </div>
  );
}
