import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// 🌿 Photography-themed team data
const teamMembers = [
  {
    name: "Amara Devon",
    role: "Lead Photographer",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
    bio: `Founder and creative mind behind Amara’s Photo Hut.

I specialize in portrait, nature, and lifestyle photography with a warm, natural-light style.

I believe the most meaningful images come from calm, authentic moments — where emotion and environment blend into something timeless.`,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2400&auto=format&fit=crop')",
  },
  {
    name: "Lena Hart",
    role: "Assistant Photographer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: `I capture candid details, soft transitions, and behind-the-scenes magic.

My style mixes natural tones with dreamy composition.

On weekends, you'll find me hiking with my camera or editing in a cozy café.`,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2400&auto=format&fit=crop')",
  },
  {
    name: "Elias Monroe",
    role: "Editing & Retouching Expert",
    image:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=800&auto=format&fit=crop",
    bio: `I turn raw captures into polished, gallery-worthy images.

My work focuses on fine color grading, film-like tones, and natural retouching.

I love warm palettes, golden-hour accents, and images that feel alive.`,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2400&auto=format&fit=crop')",
  },
  {
    name: "Sienna Brooks",
    role: "Client Experience & Styling",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    bio: `I help clients feel confident, peaceful, and beautifully prepared for their session.

Wardrobe curation, accessory guidance, and posing support are my passion.

Outside the studio: tea tasting, plant collecting, and vintage markets.`,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2400&auto=format&fit=crop')",
  },
  {
    name: "Rowan Ellis",
    role: "Nature Location Scout",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    bio: `I find the hidden gems — forests, cliffs, gardens, shorelines — where the most magical photos are taken.

I believe environment shapes emotion in every photo.

My life is part explorer, part mapmaker, all nature lover.`,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2400&auto=format&fit=crop')",
  },
  {
    name: "Milo Rivera",
    role: "Studio Coordinator",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop",
    bio: `I make sure your session flows smoothly — booking, planning, scheduling, and support.

I love meeting new clients and making photography feel easy, joyful, and stress-free.`,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop')",
  },
];

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-green-900 to-stone-900 text-emerald-50">

      {/* 🌿 Hero Banner */}
      <div
        className="w-full h-80 md:h-96 bg-cover bg-center relative shadow-2xl border-b-4 border-emerald-500/60"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2400&auto=format&fit=crop')",
          backgroundPosition: "center 60%",
        }}
      >
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-full border-2 border-emerald-400 bg-white/20 backdrop-blur-xl px-8 py-3 shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-emerald-950 tracking-widest">
              Our Team
            </h1>
          </div>
        </div>
      </div>

      {/* 🌿 Team Grid */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-20">
        <p className="text-emerald-100/85 text-center max-w-3xl mx-auto mb-10 leading-relaxed text-lg">
          Meet the creative souls behind Amara’s Photo Hut —
          a warm, nature-inspired photography studio built on storytelling,
          artistry, and authentic connection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((m) => (
            <motion.button
              key={m.name}
              onClick={() => setSelectedMember(m)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="text-left cursor-pointer rounded-3xl p-6 shadow-xl border-4 border-emerald-500/40 bg-white/80 
                         backdrop-blur-md transition-all duration-300 hover:shadow-emerald-400/40"
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-24 h-24 rounded-2xl object-cover shadow-lg"
              />

              <div className="mt-4">
                <h3 className="text-xl font-serif font-bold text-emerald-900">
                  {m.name}
                </h3>
                <p className="text-sm font-medium text-emerald-700/80">
                  {m.role}
                </p>
              </div>

              <p className="mt-4 text-emerald-900/80 bg-white/70 rounded-xl p-3 max-h-40 overflow-y-auto leading-relaxed">
                {m.bio}
              </p>
            </motion.button>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-500 bg-white/20 
                       backdrop-blur-xl px-8 py-3 font-semibold text-emerald-50 hover:bg-emerald-900/20 
                       hover:shadow-emerald-300 transition"
          >
            Contact Our Studio
          </Link>
        </div>
      </section>

      {/* 🌿 Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-500"
              style={{
                backgroundImage: selectedMember.backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/85 via-emerald-900/75 to-emerald-900/90" />

              <div className="relative p-6 sm:p-10 text-emerald-50">

                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-28 h-28 rounded-2xl object-cover border-4 border-white/80 shadow-xl"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-3xl font-serif font-bold">
                      {selectedMember.name}
                    </h3>
                    <p className="text-emerald-200 font-medium">
                      {selectedMember.role}
                    </p>
                  </div>
                </div>

                <div className="mt-6 max-h-64 overflow-y-auto rounded-2xl bg-white/90 p-4 text-emerald-900 leading-7">
                  {selectedMember.bio.split("\n").map((line, idx) => (
                    <p key={idx} className="mb-3">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-end gap-4">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="rounded-xl px-5 py-2.5 font-semibold bg-white text-emerald-900 border border-emerald-200 hover:bg-emerald-50"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    className="rounded-xl px-5 py-2.5 font-semibold bg-emerald-200/90 text-emerald-900 hover:bg-emerald-200"
                  >
                    Contact
                  </Link>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="text-center text-emerald-200/80 pb-10 font-medium tracking-wide">
        © Amara’s Photo Hut — Capturing Life, Nature, and Moments 🌿
      </footer>
    </div>
  );
}
