import React from "react";
import TaxTowerImage from "../assets/taxtower.jpeg";
import IndiaTaxImage from "../assets/indiatax.jpeg";
import SplashImage from "../assets/splashshine.jpeg";

const projects = [
  {
    id: 1,
    name: "TaxTower Platform",
    technologies: "React.js, JavaScript, API Integration",
    image: TaxTowerImage,
    link: "https://taxtower.in",
  },
  {
    id: 2,
    name: "India Tax Professionals",
    technologies: "React.js, JavaScript, Frontend Development",
    image: IndiaTaxImage,
    link: "https://indiataxprofessionals.com",
  },
  {
    id: 3,
    name: "Splash Shine Solutions",
    technologies: "React.js, Python FastAPI, MySQL",
    image: SplashImage,
    link: "https://splashshinesolutions.com",
  },
];

function Project() {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >

              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />

              <h3 className="text-2xl font-bold mb-2">
                {project.name}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.technologies}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
              >
                View Project
              </a>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Project;