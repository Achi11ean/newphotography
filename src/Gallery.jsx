import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("all");

  const API_BASE = "https://photographybackend-n68z.onrender.com";

  // Fetch images
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const url =
          filterType === "all"
            ? `${API_BASE}/api/gallery`
            : `${API_BASE}/api/gallery?photo_type=${filterType}`;

        const res = await fetch(url);
        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        console.error("Gallery fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [filterType]);

  const photoTypes = [
    "all",
    "portrait",
    "couples",
    "events",
    "cosplay",
    "pets",
    "misc",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-green-900 to-stone-900 text-white pb-20 pt-28">

      {/* Header */}
      <h1 className="text-center text-4xl md:text-5xl font-serif italic text-emerald-200 tracking-widest drop-shadow-lg">
        Photo Gallery
      </h1>
      <hr className="border-emerald-400 w-1/3 mx-auto my-4" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-4 mb-10">
        {photoTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:scale-105
              ${
                filterType === type
                  ? "bg-emerald-500 text-white border-2 border-emerald-300"
                  : "bg-white/20 text-emerald-100 border border-emerald-300/40"
              }
            `}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-emerald-200 text-lg">Loading images…</p>
      )}

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-6 max-w-7xl mx-auto">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            layout
            className="mb-4 cursor-pointer break-inside-avoid"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelected(photo)}
          >
            <img
              src={photo.image_url}
              alt={photo.caption || "Photo"}
              className="w-full rounded-xl shadow-xl object-cover transition-all hover:opacity-90"
            />
            {photo.caption && (
              <p className="text-sm text-emerald-200 mt-2 italic">
                {photo.caption}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-white/10 rounded-2xl p-4 shadow-2xl border border-emerald-300/40"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-white bg-emerald-700 hover:bg-emerald-600 p-2 rounded-full shadow"
              >
                <FaTimes size={20} />
              </button>

              {/* Image */}
              <img
                src={selected.image_url}
                alt="preview"
                className="w-full rounded-xl shadow-xl object-contain max-h-[80vh]"
              />

              {/* Caption */}
              {selected.caption && (
                <p className="text-center text-emerald-200 text-lg mt-4">
                  {selected.caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
