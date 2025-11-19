import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiAcorn } from "react-icons/gi";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPageTemplate() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, "").substring(0, 10);
    const areaCode = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) {
      input = `(${areaCode}) ${middle}-${last}`;
    } else if (input.length > 3) {
      input = `(${areaCode}) ${middle}`;
    } else if (input.length > 0) {
      input = `(${areaCode}`;
    }
    setPhone(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setStatus("✅ Thank you! We will reach out shortly.");
      setPhone("");
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-blue-900 text-blue-50">
      {/* Banner */}
      <div
        className="w-full h-80 md:h-96 bg-cover bg-center relative shadow-2xl border-b-4 border-blue-400"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2400')",
          backgroundPosition: "center 25%",
        }}
      >
        <div className="absolute sm:bottom-[-50px] bottom-[-40px] left-1/2 -translate-x-1/2 bg-blue-800/70 backdrop-blur px-6 py-3 rounded flex items-center gap-3 border-2 border-blue-300 shadow-xl">
          <h2 className="text-5xl font-bold tracking-widest">Contact</h2>
        </div>
      </div>

      {/* Contact details */}
      <section className="max-w-6xl mx-auto p-10 pt-20 space-y-10">
        <p className="text-xl border-b-2  sm:text-3xl font-bold text-center">
          ✨ We’d love to hear from you ✨
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-blue-400/50 transition">
            <FaEnvelope size={36} className="mx-auto text-blue-600 mb-4" />
            <p className="text-lg font-semibold text-blue-900">Email Us</p>
            <a href="mailto:info@example.com" className="text-blue-600 hover:underline">
              info@example.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-blue-400/50 transition">
            <FaPhoneAlt size={36} className="mx-auto text-blue-600 mb-4" />
            <p className="text-lg font-semibold text-blue-900">Call Us</p>
            <a href="tel:1234567890" className="text-blue-600 hover:underline">
              (123) 456-7890
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-blue-400/50 transition">
            <FaMapMarkerAlt size={36} className="mx-auto text-blue-600 mb-4" />
            <p className="text-lg font-semibold text-blue-900">Visit Us</p>
            <p className="text-blue-600">123 Main Street, Anywhere, USA</p>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 border border-blue-400 rounded-2xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-center mb-6 underline">
            Send Us a Message
          </h3>

          {["Name", "Email"].map((label) => (
            <div key={label} className="mb-4">
              <label className="block mb-1 text-blue-100 font-semibold">
                {label}
              </label>
              <input
                type={label === "Email" ? "email" : "text"}
                name={label.toLowerCase()}
                required
                className="w-full p-3 rounded-xl bg-blue-800 text-white border border-blue-500 focus:ring-2 focus:ring-blue-300"
              />
            </div>
          ))}

          <div className="mb-4">
            <label className="block mb-1 text-blue-100 font-semibold">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(123) 456-7890"
              className="w-full p-3 rounded-xl bg-blue-800 text-white border border-blue-500 focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-blue-100 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-3 rounded-xl bg-blue-800 text-white border border-blue-500 focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center gap-2">
            <input type="checkbox" required className="w-4 h-4" />
            <span
              onClick={() => setShowTerms(!showTerms)}
              className="text-sm underline cursor-pointer hover:text-blue-200"
            >
              I agree to the Terms and Conditions
            </span>
          </div>
          <AnimatePresence>
            {showTerms && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 text-sm text-blue-100 bg-blue-800/60 p-3 rounded-xl"
              >
                <p>
                  By submitting this form, you consent to our team contacting you
                  using the provided information. Please avoid sensitive data.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-lg text-white shadow-lg transition"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </motion.button>

          {status && (
            <p
              className={`mt-4 text-center font-semibold ${
                status.includes("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </motion.form>
      </section>


    </div>
  );
}
