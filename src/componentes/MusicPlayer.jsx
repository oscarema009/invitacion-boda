import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";
import { motion } from "framer-motion";
import bodaAudio from "../imagenes/boda.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;
    audio.loop = true;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    const tryAutoplay = async () => {
      try {
        await audio.play();
        setAutoplayBlocked(false);
      } catch (err) {
        // Autoplay bloqueado por políticas del navegador
        console.log("Autoplay bloqueado:", err?.message || err);
        setAutoplayBlocked(true);
      }
    };
    tryAutoplay();

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  const toggleMusic = async (e) => {
    e?.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play(); // como es un gesto del usuario, normalmente permitirá reproducción
        setAutoplayBlocked(false);
      } catch (err) {
        console.log("No se pudo reproducir:", err?.message || err);
      }
    } else {
      audio.pause();
    }
    // el estado isPlaying se sincroniza con los listeners 'play'/'pause'
  };

  return (
    <>
      <motion.div
        className="fixed top-4 right-4 z-50 bg-white/70 backdrop-blur-md shadow-md rounded-full p-3 cursor-pointer hover:bg-white/90 transition-all"
        onClick={toggleMusic}
        whileHover={{ scale: 1.05 }}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        role="button"
      >
        {isPlaying ? (
          <Volume2 className="text-[#344C92]" size={26} />
        ) : (
          <VolumeX className="text-[#344C92]" size={26} />
        )}
        <audio ref={audioRef} src={bodaAudio} preload="auto" className="hidden" />
      </motion.div>

      {autoplayBlocked && !isPlaying && (
        <div
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 text-[#1C2751] px-4 py-2 rounded-full shadow-md cursor-pointer"
          onClick={toggleMusic}
          role="button"
          aria-label="Tocar para activar audio"
        >
          <Play size={18} className="inline-block mr-2" />
          Toca para activar el audio
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
