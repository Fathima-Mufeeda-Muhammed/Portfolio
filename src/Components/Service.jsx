import React from "react";

const Services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using React.js, HTML, CSS and JavaScript.",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Developing secure and scalable backend applications using Python and REST APIs.",
  },
  {
    id: 3,
    title: "Full Stack Development",
    description:
      "Creating complete web applications using React for frontend and Python with MySQL for backend.",
  },
  {
    id: 4,
    title: "API Integration",
    description:
      "Integrating REST APIs and third-party services to connect frontend applications with backend systems.",
  },
  {
    id: 5,
    title: "Database Management",
    description:
      "Designing and managing databases using MySQL for efficient data storage and retrieval.",
  },
  {
    id: 6,
    title: "Responsive Web Design",
    description:
      "Designing modern, mobile-friendly websites using Tailwind CSS and modern UI principles.",
  },
];

function Service() {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {service.id}
              </div>

              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>

              <p className="mt-2 text-gray-300">{service.description}</p>

              <a
                href="#contact"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Contact
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;