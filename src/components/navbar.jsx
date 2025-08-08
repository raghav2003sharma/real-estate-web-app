import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaHouse } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Featured Properties', path: '/properties' },
  ];

  return (
    <header className="bg-[#3f3b2e] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
       
        <div className="flex items-center gap-2">
            <FaHouse/>
          <h1 className="text-lg font-semibold">Sharma real estate</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-[#6b5e44] transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Us Button */}
        <Link
          to="/contact"
          className="hidden border border-white md:inline-block bg-[#3f3b2e] text-white px-5 py-2 rounded-full text-sm hover:opacity-90"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#f8f3e9] px-6 pb-4 text-sm font-medium space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block hover:text-[#6b5e44]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-block mt-2 bg-[#3f3b2e] text-white px-4 py-2 rounded-full"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
