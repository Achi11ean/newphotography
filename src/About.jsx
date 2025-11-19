import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-blue-900 text-gray-900">
      {/* Banner */}
      <section className="relative w-full bg-black">
        <div
          className="h-[42vh] min-h-64 md:h-[56vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop')",
            backgroundPosition: "center 60%",
          }}
          aria-label="Company banner"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        {/* Original Overlapping Title Pill */}
        <div className="absolute bottom-[-40px] sm:bottom-[-100px] left-1/2 -translate-x-1/2 border-2 border-blue-400 bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-lg px-6 sm:px-10 py-3 sm:py-5 rounded shadow-xl w-11/12 sm:w-auto">
          <h1 className="text-2xl sm:text-4xl text-center md:text-6xl font-serif italic drop-shadow-lg tracking-wider leading-tight text-black">
            About Us
            <hr className="border-blue-400 border-2 w-full mt-2" />
            <span className="text-base sm:text-xl md:text-2xl tracking-widest block sm:inline text-black">
              Learn our story & values
            </span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        {/* Quick Links row */}
        <nav aria-label="Primary">
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-3 font-semibold text-white rounded-xl shadow-lg bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 hover:from-indigo-500 hover:via-blue-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            >
              Contact
            </Link>
            <Link
              to="/services"
              className="block w-full text-center px-6 py-3 font-semibold text-white rounded-xl shadow-lg bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-600 hover:to-indigo-500 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-300"
            >
              Services
            </Link>
            <Link
              to="/ourteam"
              className="block w-full text-center px-6 py-3 font-semibold text-white rounded-xl shadow-lg bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 hover:from-cyan-500 hover:via-sky-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
            >
              Team
            </Link>
          </div>
        </nav>

        {/* Headline */}
        <motion.p
          className="mt-12 text-center text-xl  sm:text-2xl border-l-2 border-r-2 border-t-2 md:text-3xl font-extrabold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We craft simple, scalable experiences that help people do their best work.
        </motion.p>
<hr className="border-white border-2 w-full mt-4" />

        {/* Intro */}
        <motion.p
          className="mt-4 text-base sm:text-lg border-b-2 border-r-2 border-l-2 md:text-xl text-center text-white max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          Our team focuses on clarity, performance, and thoughtful design. From idea to launch,
          we keep things intuitive and reliable—so you can move faster with confidence.
        </motion.p>

        {/* Info Grid */}
        <section className="mt-10 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <article className=" bg-white p-6 md:p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-center border-b-2 border-blue-800 text-blue-800">Our Mission</h2>
              <p className="text-base md:text-lg leading-7 md:leading-8 text-gray-700">
                Build delightful, dependable products that empower creators and teams—
                keeping the experience fast, accessible, and easy to maintain.
              </p>
            </article>
            <article className=" bg-white p-6 md:p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-center border-b-2 border-blue-800 text-blue-800">Our Values</h2>
              <p className="text-base md:text-lg leading-7 md:leading-8 text-gray-700">
                Simplicity, trust, and quality. We ship thoughtfully, listen closely,
                and iterate with care to deliver results that last.
              </p>
            </article>
          </div>
        </section>

        <div className="h-16" />
      </main>
    </div>
  );
}
