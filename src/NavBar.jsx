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
  ];

  return (
    <>
      <nav className="backdrop-blur-md bg-blue-900/80 shadow-lg w-full sticky top-0 z-50 border-b border-blue-700">
        <div className="container mx-auto flex justify-between items-center px-6 relative">
          {/* Logo */}
          <Link
            to="/"
            className="transition duration-500 ease-in-out transform hover:scale-110"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZlaUXIWozu3xqknYB3S9nknCPGFPAEVZLA&s"
              alt="Company Logo"
              className="h-20 sm:h-24 md:h-28 object-contain transition-transform duration-300"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden cursor-pointer text-white z-50"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row md:space-x-12 w-full md:w-auto absolute md:static top-16 left-0 right-0 bg-blue-900 md:bg-transparent rounded-b-2xl shadow-lg md:shadow-none transition-all duration-500 ease-in-out p-6 md:p-0 z-40`}
          >
            <div className="flex flex-col md:flex-row md:space-x-12 text-center space-y-6 md:space-y-0">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:text-yellow-400 text-lg font-semibold uppercase tracking-wide transition duration-300 border-b-2 border-transparent hover:border-yellow-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-end space-x-4 mt-6 md:mt-0">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-white text-2xl transition duration-300 transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-white text-2xl transition duration-300 transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
