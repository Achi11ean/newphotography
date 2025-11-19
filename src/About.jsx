import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-green-900 to-stone-900 text-gray-100">
      {/* Banner */}
      <section className="relative w-full">
        <div
          className="h-[42vh] min-h-64 md:h-[56vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')",
            backgroundPosition: "center 60%",
          }}
          aria-label="Photography banner"
        />

        {/* Soft gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Overlapping Title Pill */}
        <div className="absolute bottom-[-40px] sm:bottom-[-90px] left-1/2 -translate-x-1/2 border-2 border-emerald-400 bg-gradient-to-r from-white/70 to-white/40 backdrop-blur-xl px-6 sm:px-10 py-4 rounded-xl shadow-2xl w-11/12 sm:w-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-center font-serif italic drop-shadow-xl tracking-widest text-emerald-950 leading-tight">
            About Amara’s Photo Hut
            <hr className="border-emerald-400 border-2 w-full mt-2" />
            <span className="text-base sm:text-xl md:text-2xl tracking-widest block sm:inline text-emerald-800">
              Our Story • Vision • Passion
            </span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { to: "/contact", label: "Contact" },
              { to: "/services", label: "Services" },
              { to: "/ourteam", label: "Team" },
            ].map((btn, i) => (
              <Link
                key={i}
                to={btn.to}
                className="text-white text-center px-6 py-3 font-semibold rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105"
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
                {btn.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Headline */}
        <motion.p
          className="mt-12 text-center text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-200 border-2 border-emerald-500 py-4 px-2 rounded-xl backdrop-blur-md bg-white/10 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Photography that captures emotion, nature, and the beauty of real moments.
        </motion.p>

        <hr className="border-emerald-400 border-2 w-full mt-6" />

        {/* Intro Paragraph */}
        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-center text-emerald-100 leading-relaxed max-w-4xl mx-auto bg-white/10 border-2 border-emerald-500 backdrop-blur-lg px-6 py-4 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          At Amara’s Photo Hut, we believe in natural lighting, organic styling,
          and meaningful storytelling. Every photo session is a moment to slow
          down, breathe, and capture the parts of life that matter most.
        </motion.p>

        {/* Info Grid */}
        <section className="mt-10 md:mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            
            {/* Mission */}
            <article className="bg-white/80 backdrop-blur-xl p-6 md:p-8 shadow-2xl border-emerald-400 border-4 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-serif text-center text-emerald-700 font-bold mb-4 border-b-4 border-emerald-500 pb-2">
                Our Mission
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                To create heartfelt and visually stunning photography that celebrates
                nature, authenticity, and each client’s unique story. We strive to
                bring warmth, elegance, and artistry to every project — big or small.
              </p>
            </article>

            {/* Values */}
            <article className="bg-white/80 backdrop-blur-xl p-6 md:p-8 shadow-2xl border-emerald-400 border-4 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-serif text-center text-emerald-700 font-bold mb-4 border-b-4 border-emerald-500 pb-2">
                Our Values
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                We value authenticity, natural beauty, kindness, connection, and
                creativity. Our photography is rooted in capturing genuine emotions
                and meaningful memories — with care, patience, and artistic focus.
              </p>
            </article>
          </div>
        </section>

        <div className="h-20" />
      </main>
    </div>
  );
}
