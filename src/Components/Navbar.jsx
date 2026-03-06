import React from "react";

function Navbar() {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex justify-between items-center">

        <div className="text-2xl font-bold hidden md:inline">
          Fathimathul Mufeeda
        </div>

        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        <a href="#contact">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full">
            Contact Me
          </button>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;