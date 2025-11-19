import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Team", path: "/ourteam" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
   { name: "Login", path: "/login" },
  ];

  return (
    <nav className="backdrop-blur-xl bg-emerald-900/70 border-b border-emerald-700 shadow-xl sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-2 relative">

        {/* Logo */}
        <Link
          to="/"
          className="transition duration-500 ease-in-out transform hover:scale-110 hover:brightness-110"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-20 sm:h-24 md:h-28 object-contain drop-shadow-xl"
          />
        </Link>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer text-emerald-200 z-50"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </div>

        {/* Navigation Container */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:space-x-10 w-full md:w-auto 
          absolute md:static top-16 left-0 right-0 
          bg-emerald-900/95 md:bg-transparent 
          backdrop-blur-xl shadow-lg md:shadow-none 
          rounded-b-2xl p-6 md:p-0 transition-all duration-500 ease-in-out z-40`}
        >
          {/* Nav Items */}
          <div className="flex flex-col md:flex-row md:space-x-10 text-center space-y-6 md:space-y-0">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white text-lg font-semibold uppercase tracking-wide transition duration-300 
                border-b-2 border-transparent hover:border-emerald-400 hover:text-emerald-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end space-x-5 mt-6 md:mt-0">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-white text-3xl transition duration-300 transform hover:scale-110"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-white text-3xl transition duration-300 transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
