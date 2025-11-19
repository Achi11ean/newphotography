import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const photos = [
  // Artistic Portrait – Warm, Emotional
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop",

  // Nature Close-Up – Soft Greens
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2070&auto=format&fit=crop",

  // Lifestyle Portrait – Natural Light, Outdoors
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop",

  // Forest Path – Moody & Cinematic
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
];

const fadeDuration = 2; // fade time

const PhotoSlider = () => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevious(current);
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 6000); // 6 seconds (2 fade + 4 display)
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="w-full h-[32rem] overflow-hidden relative rounded-b-3xl shadow-2xl">

      {/* Vignette + Overlay (Artistic Nature Theme) */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-black/10 via-black/30 to-emerald-900/50 mix-blend-multiply opacity-80"></div>
      <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]"></div>

      {/* Previous Image Fading Out */}
      {previous !== null && (
        <motion.img
          key={`previous-${previous}`}
          src={photos[previous]}
          alt=""
          initial={{ opacity: 1, scale: 1.05 }}
          animate={{ opacity: 0, scale: 1 }}
          transition={{ duration: fadeDuration, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover"
        />
      )}

      {/* Current Image Fading In */}
      <motion.img
        key={`current-${current}`}
        src={photos[current]}
        alt={`Slide ${current + 1}`}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: fadeDuration, ease: "easeInOut" }}
        className="absolute w-full h-full object-cover"
      />

      {/* Soft Handwritten Text (Optional, Beautiful Touch) */}
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-center"
      >
        <h2 className="text-white/90 text-3xl sm:text-4xl font-semibold tracking-wide drop-shadow-xl font-serif italic">
          Capturing Your Story
        </h2>

        <p className="text-white/80 text-sm sm:text-base mt-2 tracking-widest drop-shadow-md font-light">
          One Moment at a Time
        </p>
      </motion.div>
    </div>
  );
};

export default PhotoSlider;
