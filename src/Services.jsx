// Services.jsx — Amara’s Photo Hut Theme 🌿📸
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Services({
  contactPath = "/contact",
}) {
  const [selectedService, setSelectedService] = useState(null);

  // Photography-themed services 🌿📸
  const services = [
    {
      title: "Portrait Photography",
      desc: "Stunning natural-light portraits for individuals, couples, and families.",
      details:
        "Using soft natural lighting and warm, organic tones, portrait sessions are crafted to capture emotion, personality, and genuine expression. Sessions include guidance on posing, styling suggestions, and full-resolution edits.",
      image:
        "https://learn.captureone.com/wp-content/uploads/sites/2/alexander-vinogradov-1900x1267.jpg",
    },
    {
      title: "Nature & Landscape Shoots",
      desc: "Peaceful, nature-inspired photography in breathtaking outdoor settings.",
      details:
        "Whether at the beach, forest, mountains, or gardens, these sessions highlight the beauty of natural light and scenery. Perfect for wall art, albums, and personal keepsakes.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9l8AEKkS9xhynUVZ0V_eTPmgcBq0ALyNcsw&s",
    },
    {
      title: "Event Photography",
      desc: "Elegant coverage for celebrations, gatherings, and special moments.",
      details:
        "From birthdays to engagements to community events—Amara captures authentic moments with a warm, documentary-style approach. All photos include full edit suites.",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Lifestyle Sessions",
      desc: "Candid, relaxed storytelling photography for everyday moments.",
      details:
        "Lifestyle sessions are captured in your home, favorite café, or meaningful outdoor location. These shoots are designed to feel natural and emotional—perfect for families and creatives.",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Professional Editing",
      desc: "High-end retouching that enhances color, clarity, and beauty.",
      details:
        "Every image is hand-edited using natural, film-like tones. Includes color correction, lighting adjustments, skin retouching (when requested), and detailed artistic enhancements.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Prints & Wall Art",
      desc: "High-quality prints, albums, and museum-grade wall art.",
      details:
        "Choose from matte, glossy, metal, and canvas finishes. Each print is crafted with precise color grading to preserve the warmth and richness of the original photograph.",
      image:
        "https://m.media-amazon.com/images/I/81ycg8-LCiL._AC_UF894,1000_QL80_.jpg",
    },
  ];

  // Emerald-gradient contact button 🌿
  const ContactButton = () => (
    <div className="flex justify-center my-10">
      <Link to={contactPath}>
        <button
          className="px-10 py-3 rounded-full text-white font-semibold text-xl shadow-lg border-2 border-emerald-500 transition-all duration-500 transform hover:scale-105"
          style={{
            background:
              "linear-gradient(90deg, #166534, #0d9488, #064e3b)",
            backgroundSize: "200% 200%",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundPosition = "right center")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundPosition = "left center")
          }
        >
          Contact Me
        </button>
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-green-900 to-stone-900 pb-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-14 text-center">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-emerald-200 tracking-widest drop-shadow-lg">
          Photography Services
        </h1>
        <p className="mt-4 text-emerald-100/80 max-w-2xl mx-auto text-lg">
          Explore my full range of offerings. Click a service card to learn more.
        </p>
      </div>

      <ContactButton />

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setSelectedService(s)}
              className="rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-500/40 bg-white/80
                         backdrop-blur-xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-emerald-400/40"
            >
              {s.image && (
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-5">
                <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-700">{s.desc}</p>
              </div>
            </button>
          ))}
        </section>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
          {/* Backdrop */}
          <div
            onClick={() => setSelectedService(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <div className="relative z-10 flex min-h-full items-center justify-center p-4">
            <div className="w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl border-4 border-emerald-500 bg-white/90 backdrop-blur-xl transform animate-[fadeInUp_.25s_ease]">

              {/* Header Image */}
              <div className="relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="h-64 w-full object-cover"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute right-4 top-4 h-10 w-10 flex items-center justify-center rounded-full bg-white/90 text-gray-700 shadow hover:bg-white transition"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-3xl font-serif font-bold text-emerald-800">
                  {selectedService.title}
                </h3>
                <div className="mt-3 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {selectedService.details}
                </p>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white/80 px-6 py-4 border-t backdrop-blur">
                <ContactButton />
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto rounded-xl bg-emerald-800 px-6 py-3 text-white font-semibold shadow hover:bg-emerald-900 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>

          {/* Keyframes */}
          <style>
            {`
              @keyframes fadeInUp {
                from { opacity: 0; transform: translate3d(0, 10px, 0); }
                to   { opacity: 1; transform: translate3d(0, 0, 0); }
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
}
