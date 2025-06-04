import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";  // Import Link

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About Us", path: "about" },
    // aap yahan aur routes add kar sakte hain
    { name: "Testimonials", path: "testimonials" },
    { name: "Gallery", path: "/gallary" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "contactus" },
  ];

  return (
    <nav className="bg-[#0b1a2e] text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[#00AEEF] font-bold text-xl">SAWARIYA</span>
            <span className="text-[#00AEEF] font-bold text-xl">Interior</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`px-3 py-1 rounded transition duration-200 ${
                  name === "Home"
                    ? "bg-[#d99852] text-white hover:bg-[#d99852]"
                    : "hover:bg-[#d99852] hover:text-white"
                }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } bg-[#0c1220]`}
      >
        <div className="flex flex-col px-4 pb-4 space-y-2">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`py-2 px-3 rounded transition duration-200 ${
                name === "Home"
                  ? "bg-[#d99852] text-white hover:bg-[#d99852]"
                  : "hover:bg-[#d99852] hover:text-white"
              }`}
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
