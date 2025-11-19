import React from "react";
import { Link } from "react-router-dom";
import PhotoSlider from "./PhotoSlider";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="relative text-center min-h-screen  bg-gradient-to-b from-emerald-900 via-green-900 to-stone-900">
      {/* Photo Slider Section */}
      <div className="relative">
        <PhotoSlider />

        {/* Overlapping Title */}
        <div className="absolute bottom-[-50px] border-2 border-emerald-400 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-white/70 to-white/40 backdrop-blur-xl px-6 sm:px-10 py-2 rounded-xl shadow-2xl w-11/12 sm:w-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-emerald-950 tracking-widest italic drop-shadow-xl leading-tight">
              Amara’s Photo Hut
              <br />
              <hr className="border-emerald-400 border-2 w-full sm:mt-2" />
              <span className="text-lg sm:text-xl md:text-2xl tracking-widest block sm:inline text-emerald-800">
                Capturing Life • Nature • Moments
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-2">
        {/* Navigation Buttons */}
        <div className="mt-28 sm:mt-20 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 px-4">
          {[
            { label: "About Me", to: "/about" },
            { label: "Contact", to: "/contact" },
            { label: "Services", to: "/services" },
          ].map((btn, i) => (
            <Link
              key={i}
              to={btn.to}
              className="text-white w-full sm:w-auto text-center px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md transition-all duration-500 transform hover:scale-105"
              style={{
                background:
                  "linear-gradient(90deg, #166534, #065f46, #064e3b)",
                backgroundSize: "200% 200%",
                transition: "background-position 0.5s ease",
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

        {/* Info / Bio Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl p-6 border-emerald-500 border-4 mx-auto my-10 w-11/12 md:w-3/4 lg:w-1/2 text-center space-y-6">
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-emerald-700 font-bold leading-snug sm:leading-normal px-4 sm:px-6">
            📸 Welcome to Amara’s Photo Hut 🌿
          </h2>

          <hr className="border-t-4 border-emerald-400 w-full my-2" />

          <p className="text-gray-700 text-lg leading-relaxed">
            Where every photograph tells a story. Amara’s Photo Hut blends{" "}
            <span className="font-semibold text-emerald-700">
              natural lighting, organic settings, and artistic elegance
            </span>{" "}
            to capture unforgettable moments.
          </p>

          <p className="text-gray-700 text-lg mb-2 leading-relaxed">
            Specializing in{" "}
            <span className="font-semibold text-emerald-700">
              portraits, events, landscapes, and lifestyle photography
            </span>{" "}
            — all through a warm, nature-inspired lens.
          </p>

          <Link
            to="/contact"
            className="text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md transition-all duration-500 transform hover:scale-105"
            style={{
              background:
                "linear-gradient(90deg, #166534, #0d9488, #064e3b)",
              backgroundSize: "200% 200%",
              transition: "background-position 0.5s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundPosition = "right center")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundPosition = "left center")
            }
          >
            Book a Session
          </Link>
        </div>
      </div>
      <section className="bg-gradient-to-b from-stone-900 via-green-900 to-emerald-900 text-emerald-100 py-8 pb-10 border-t-4 border-emerald-500/40 shadow-inner">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 
                  divide-y divide-emerald-700/40 lg:divide-y-0 lg:divide-x lg:divide-emerald-700/40">

    {/* Studio Info */}
    <div className="pr-0 lg:pr-6 text-center lg:text-left py-4">
      <h3 className="text-xl font-serif font-bold text-emerald-300 border-b-2 border-emerald-400 inline-block pb-1 mb-3">
        Amara’s Photo Hut
      </h3>
      <p className="text-sm leading-relaxed text-emerald-200/90">
        Capturing life, nature, and meaningful moments through warm, natural-light photography.
        <br />
        Every image tells a story. 🌿
      </p>
    </div>

    {/* Quick Links */}
    <div className="pt-6 sm:pt-0 lg:px-6 text-center lg:text-left">
      <h4 className="text-lg font-semibold text-emerald-100 mb-3">
        Quick Links
      </h4>
      <ul className="grid grid-cols-2 gap-2 text-sm">
        <li><Link to="/about" className="hover:text-emerald-300">About</Link></li>
        <li><Link to="/services" className="hover:text-emerald-300">Services</Link></li>
        <li><Link to="/ourteam" className="hover:text-emerald-300">Our Team</Link></li>
        <li><Link to="/gallery" className="hover:text-emerald-300">Gallery</Link></li>
        <li><Link to="/contact" className="hover:text-emerald-300">Contact</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="pt-6 sm:pt-0 lg:pl-6 text-center lg:text-left">
      <h4 className="text-lg font-semibold text-emerald-100 mb-3">
        Get in Touch
      </h4>
      <p className="text-sm">📍 Natureview, USA</p>
      <p className="text-sm mt-1">
        📧{" "}
        <a
          href="mailto:amara@example.com"
          className="hover:text-emerald-300 underline"
        >
          amara@example.com
        </a>
      </p>

      {/* Social Icons */}
      <div className="flex justify-center lg:justify-start items-center space-x-5 mt-6 border-t pt-3 border-emerald-500/40">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-300"
        >
          <FaInstagram className="text-2xl" />
        </a>

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-300"
        >
          <FaFacebook className="text-2xl" />
        </a>

        <a
          href="mailto:amara@example.com"
          className="hover:text-emerald-300"
        >
          <FaEnvelope className="text-2xl" />
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-8 text-center text-xs text-emerald-300/70">
    <Link to="/privacy" className="hover:text-emerald-200">
      Privacy Policy
    </Link>
  </div>
</section>

    </div>
  );
}
