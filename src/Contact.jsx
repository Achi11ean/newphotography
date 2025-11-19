import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, "").substring(0, 10);
    const area = input.substring(0, 3);
    const mid = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) input = `(${area}) ${mid}-${last}`;
    else if (input.length > 3) input = `(${area}) ${mid}`;
    else if (input.length > 0) input = `(${area}`;
    setPhone(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setStatus("✅ Thank you for reaching out! I’ll respond shortly.");
      setPhone("");
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-green-900 to-stone-900 text-emerald-50">

      {/* 🌿 Banner */}
      <div
        className="w-full h-80 md:h-96 bg-cover bg-center relative shadow-2xl border-b-4 border-emerald-500/60"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2400&auto=format&fit=crop')",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-xl px-8 py-3 rounded-xl border-2 border-emerald-400 shadow-2xl">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-widest text-emerald-950">
            Contact Me
          </h2>
        </div>
      </div>

      {/* 🌿 Contact Details */}
      <section className="max-w-6xl mx-auto p-10 pt-20 space-y-10">

        <p className="text-xl sm:text-3xl font-serif font-semibold text-center text-emerald-200 drop-shadow-lg">
          I'd love to help you capture your moments 📸✨
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {/* Email */}
          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border-4 border-emerald-500/40 hover:shadow-emerald-300/40 transition">
            <FaEnvelope size={36} className="mx-auto text-emerald-700 mb-4" />
            <p className="text-lg font-semibold text-emerald-900">Email</p>
            <a href="mailto:amara@example.com" className="text-emerald-700 hover:underline">
              amara@example.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border-4 border-emerald-500/40 hover:shadow-emerald-300/40 transition">
            <FaPhoneAlt size={36} className="mx-auto text-emerald-700 mb-4" />
            <p className="text-lg font-semibold text-emerald-900">Phone</p>
            <a href="tel:1234567890" className="text-emerald-700 hover:underline">
              (123) 456-7890
            </a>
          </div>

          {/* Location */}
          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border-4 border-emerald-500/40 hover:shadow-emerald-300/40 transition">
            <FaMapMarkerAlt size={36} className="mx-auto text-emerald-700 mb-4" />
            <p className="text-lg font-semibold text-emerald-900">Studio Location</p>
            <p className="text-emerald-700">123 Forest Trail, Natureview, USA</p>
          </div>
        </div>

        {/* 🌿 Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 border-2 border-emerald-400 rounded-2xl p-8 shadow-2xl backdrop-blur-xl"
        >
          <h3 className="text-3xl font-serif font-bold text-center mb-6 text-emerald-100 underline underline-offset-4">
            Send a Message
          </h3>

          {/* Name & Email */}
          {["Name", "Email"].map((label) => (
            <div key={label} className="mb-4">
              <label className="block mb-1 text-emerald-100 font-semibold">{label}</label>
              <input
                type={label === "Email" ? "email" : "text"}
                required
                className="w-full p-3 rounded-xl bg-emerald-900/60 text-white border border-emerald-500 focus:ring-2 focus:ring-emerald-300"
              />
            </div>
          ))}

          {/* Phone */}
          <div className="mb-4">
            <label className="block mb-1 text-emerald-100 font-semibold">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(123) 456-7890"
              className="w-full p-3 rounded-xl bg-emerald-900/60 text-white border border-emerald-500 focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block mb-1 text-emerald-100 font-semibold">Message</label>
            <textarea
              rows="4"
              required
              className="w-full p-3 rounded-xl bg-emerald-900/60 text-white border border-emerald-500 focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          {/* Terms */}
          <div className="mb-4 flex items-center gap-2">
            <input type="checkbox" required className="w-4 h-4" />
            <span
              onClick={() => setShowTerms(!showTerms)}
              className="text-sm underline cursor-pointer hover:text-emerald-200"
            >
              I agree to the Terms & Conditions
            </span>
          </div>

          <AnimatePresence>
            {showTerms && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 text-sm text-emerald-100 bg-emerald-900/60 p-3 rounded-xl"
              >
                <p>
                  By sending this message, you give consent for Amara’s Photo Hut to contact you.
                  Please avoid including sensitive or confidential information.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 rounded-xl font-bold text-lg text-white shadow-xl"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Status */}
          {status && (
            <p className="mt-4 text-center font-semibold text-emerald-300">
              {status}
            </p>
          )}
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="text-center text-emerald-200/70 pb-10 font-medium tracking-wide">
        © Amara’s Photo Hut • Capturing Life, Nature & Moments 🌿📸
      </footer>
    </div>
  );
}
