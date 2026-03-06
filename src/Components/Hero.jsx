import React from "react";
import HeroImage from "../assets/hero-image.jpeg";

function Hero() {
  return (
    <div className="bg-black text-white text-center py-16">

      <img
        src={HeroImage}
        alt="Fathimathul Mufeeda"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />

      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Fathimathul Mufeeda
        </span>{" "}
        - Full Stack Developer
      </h1>

      <p className="mt-4 text-lg text-gray-300">
        Full Stack Developer with 2.7 years of experience building modern and
        responsive web applications using React.js, JavaScript, Python
        (FastAPI), and MySQL.
      </p>

      {/* Skills Section */}
      <div className="mt-6">
        <p className="text-gray-400 text-sm mb-2">Tech Stack</p>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="bg-gray-800 px-4 py-1 rounded-full">React.js</span>
          <span className="bg-gray-800 px-4 py-1 rounded-full">JavaScript</span>
          <span className="bg-gray-800 px-4 py-1 rounded-full">HTML</span>
          <span className="bg-gray-800 px-4 py-1 rounded-full">CSS</span>
          <span className="bg-gray-800 px-4 py-1 rounded-full">Tailwind CSS</span>
          <span className="bg-gray-800 px-4 py-1 rounded-full">Python</span>
          <span className="bg-gray-800 px-4 py-1 rounded-full">FastAPI</span>
          <span className="bg-gray-800 px-4 py-1 rounded-full">PHP</span>
          <span className="bg-gray-800 px-4 py-1 rounded-full">MySQL</span>
          <span className="bg-gray-800 px-4 py-1 rounded-full">API Integration</span>
        </div>
      </div>

      <div className="mt-8">
        <a href="#contact">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-10 py-2 rounded-full">
            Contact Me
          </button>
        </a>
      </div>

    </div>
  );
}

export default Hero;