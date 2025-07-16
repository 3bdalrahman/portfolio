import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const NavbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "Projects", link: "#projects" },
    { id: 5, name: "Certificates", link: "#certificates" },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all transition-colors transition-shadow duration-700 ease-in-out ${scrolled ? 'bg-[#801b9c]/60 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* Logo*/}
        <a href="#home" className="text-4xl font-bold italic text-white">
          Abdulrhman
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-8 h-8 text-white" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-gray-200 text-lg"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact">
            <button
              className="inline-flex text-white border-2 py-2 px-6 focus:outline-none
                  hover:bg-purple-800 rounded-full text-lg"
            >
              Contact
            </button>
          </a>
        </nav>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden fixed top-0 right-0 w-4/5 max-w-xs h-screen bg-[#801b9c]/80 backdrop-blur-lg shadow-2xl rounded-l-3xl border-l-4 border-purple-400 flex flex-col items-center justify-center space-y-8 pt-16 transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white bg-purple-700/70 hover:bg-purple-900 rounded-full p-2 shadow-lg transition"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-8 h-8" />
        </button>
        {/* Mobile Navigation */}
        {NavbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="text-lg text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-900/70 hover:text-purple-200 transition shadow-md border border-white/10"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        {/* Contact Button */}
        <a href="#contact">
          <button
            className="inline-flex text-white border-2 border-purple-300 py-2 px-8 focus:outline-none hover:bg-purple-800 hover:text-purple-200 hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg font-bold transition mt-4 shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </button>
        </a>
      </div>
    </header>
  );
}
