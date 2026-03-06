import React from "react";
import AboutMeImage from "../assets/hero-image.jpeg";

function About() {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">

          <img
            src={AboutMeImage}
            alt="Fathimathul Mufeeda"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />

          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate Frontend and Full Stack Developer with around
              2.7 years of professional experience in building modern and
              responsive web applications. I specialize in React.js,
              JavaScript, HTML, CSS, and API integration, and I also have
              backend development experience using Python (FastAPI) and MySQL.

              I have worked on several real-world projects including
              taxtower.in, indiataxprofessional.com, and
              splashshinesolutions.com. I enjoy building responsive,
              user-friendly interfaces and scalable systems that solve
              real-world problems.
            </p>

            <div className="mt-12 flex justify-between text-center">

              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  2.7+
                </h3>
                <p>Years Experience</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p>Major Live Projects</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  React + FastAPI
                </h3>
                <p>Main Tech Stack</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;