// Services.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Services({
  contactPath = "/contact",
  services = [],
  theme = {
    pageBg: "bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900",
    cardBg: "bg-white",
    cardHoverBg: "hover:bg-gray-50",
    primaryTextGrad: "bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500",
    accentTextGrad: "bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400  ",
    border: "border-white/10",
    headingText: "text-white",
    bodyText: "text-gray-700",
  },
}) {
  const [selectedService, setSelectedService] = useState(null);

  // fallback default services if none are passed
const defaultServices = services.length
  ? services
  : [
      {
        title: "Web Development",
        desc: "Custom websites and web apps tailored to your business.",
        details:
          "We create responsive, high-performing web solutions using modern technologies that align with your goals.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Mobile Apps",
        desc: "iOS & Android apps designed for seamless user experiences.",
        details:
          "From wireframes to app store deployment, we bring your mobile vision to life with sleek and functional design.",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Branding & Design",
        desc: "Creative design solutions to elevate your brand identity.",
        details:
          "Logos, color palettes, and full brand kits to make your business unforgettable.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Consulting",
        desc: "Expert guidance to help streamline your business operations.",
        details:
          "We provide tailored advice, audits, and strategies for growth and efficiency.",
        image:
          "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Budget Saving",
        desc: "Smart solutions designed to maximize value while reducing costs.",
        details:
          "Our budget saving strategies analyze your spending, identify inefficiencies, and deliver cost-effective alternatives that protect quality while improving profitability.",
        image:
          "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Customer Service",
        desc: "Reliable, friendly support that strengthens client relationships.",
        details:
          "We help businesses implement customer service systems that improve satisfaction, increase retention, and build brand loyalty—whether through training, live support, or digital solutions.",
        image:
          "https://media.istockphoto.com/id/1397818637/photo/low-angle-shot-of-an-attractive-young-call-centre-agent-sitting-alone-in-the-office-and-using.jpg?s=612x612&w=0&k=20&c=UwAyTFFIDnNrYOtOhu5rvyL84hbpTJ-F9Htplww-V-o=",
      },
    ];


  const ContactButton = () => (
    <div className="flex justify-center my-10">
      <Link to={contactPath}>
        <button
          className={`px-12 py-2 text-black  rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 ${theme.accentTextGrad}  font-bold border-4 border-white text-2xl border-amber-300/40 hover:border-amber-300`}
        >
          Contact Us
        </button>
      </Link>
    </div>
  );

  return (
    <div className={`min-h-screen ${theme.pageBg} pb-16`}>
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-12">
        <div className="text-center">
          <h1
            className={`text-3xl border-b-4  sm:text-4xl md:text-5xl font-extrabold ${theme.headingText}`}
          >
            Services
          </h1>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Explore what we offer. Click a service card to learn more.
          </p>
        </div>
      </div>
        <ContactButton />

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {defaultServices.map((s, i) => (
            <button
              key={i}
              onClick={() => setSelectedService(s)}
              className={`text-left rounded-2xl overflow-hidden shadow-xl border ${theme.border} transition transform hover:-translate-y-1 hover:shadow-2xl ${theme.cardBg} ${theme.cardHoverBg}`}
            >
              {s.image && (
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-5">
                <h3
                  className={`text-xl font-bold mb-2 text-transparent bg-clip-text ${theme.primaryTextGrad}`}
                >
                  {s.title}
                </h3>
                <p className={`${theme.bodyText}`}>{s.desc}</p>
              </div>
            </button>
          ))}
        </section>

      </div>

      {/* Modal */}
   {selectedService && (
  <div
    className="fixed inset-0 z-50"
    aria-modal="true"
    role="dialog"
  >
    {/* Backdrop */}
    <div
      onClick={() => setSelectedService(null)}
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
    />

    {/* Panel */}
    <div className="relative z-10 flex min-h-full items-center justify-center p-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-white/90 backdrop-blur-md animate-[fadeInUp_.25s_ease]">
        {/* Header */}
        <div className="relative">
          {selectedService.image && (
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="h-56 w-full object-cover"
            />
          )}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
          <button
            onClick={() => setSelectedService(null)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow hover:bg-white transition"
            aria-label="Close"
            title="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
            {selectedService.title}
          </h3>
          <div className="mt-3 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <p className="mt-4 text-gray-700 leading-relaxed">
            {selectedService.details}
          </p>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between border-t bg-white/80 px-6 py-4 backdrop-blur">
          <div className="w-full sm:w-auto">
            <ContactButton />
          </div>
          <button
            onClick={() => setSelectedService(null)}
            className="w-full sm:w-auto rounded-xl bg-gray-900 px-5 py-2.5 font-semibold text-white shadow hover:bg-gray-800 transition"
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
