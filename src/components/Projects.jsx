import React, { useState } from "react";
import bimar from "../assets/projects/Bimar.png";
import ducksrow from "../assets/projects/ducks row.png";
import cryptocipher from "../assets/projects/cryptocipher.png";
import taxi from "../assets/projects/taxi total amount.png";
import meca from "../assets/projects/meca.png";
import wagbat from "../assets/projects/wagbat.png";
import { trackProjectInteraction, trackSectionView } from "../utils/analytics";
const projects = [
  {
    title: "Bimar – AI-Powered Healthcare Platform",
    date: "Oct 2024 – Present",
    description: "Full-stack healthtech app for managing patient records, AI doctor recommendations, appointment scheduling, chat, and virtual consultations.",
    tech: ["React", "React Native", "Node.js", "Express.js", "MongoDB", "Postman", "Figma"],
    image: bimar,
    repos: [
      { label: "Source Code", url: "https://github.com/Kareem2003/Bimar" },
      { label: "Video Demo", url: "https://drive.google.com/file/d/1Vo0HxnLfla4KZfaBzVSgJA4-FXWdOFpW/view" },
    ],
  },
  {
    title: "Ducks Row Website (Back-End Development)",
    date: "Nov 2022 – Jul 2023",
    description: "Dynamic website for planning hangouts based on budget and preferences. ",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Ajax"],
    image: ducksrow,
    repos: [
      { label: "Source Code", url: "https://github.com/Duck-s-Row/Duck-s-Row.github.io" },
      { label: "Video Demo", url: "https://drive.google.com/file/d/1ik9xPV1pVP98K5UzzxmzBbhck7Wtwn1q/view" },
    ],
  },
  {
    title: "MECA Egypt Website Enhancement",
    date: "Nov 2024 – Jul 2025",
    description: "Led backend development and database enhancements for the MECA Egypt student activity website, integrating new UI features, optimizing database performance, and improving system stability.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: meca,
    repos: [
      { label: "Live Link", url: "https://mecaegypt.com/" },
    ],
  },
  {
    title: "CryptoCipher – Mobile CryptographyApp",
    date: "Apr 2025 – May 2025",
    description: "Cross-platform app for encoding/decoding classical ciphers (Caesar, Vigenère, Rail Fence) and cryptanalysis.",
    tech: ["React Native", "Node.js", "Express", "JavaScript", "Axios", "Expo"],
    image: cryptocipher,
    repos: [
      { label: "Source Code", url: "https://github.com/Abdalla28/IOT" },
      { label: "Video Demo", url: "https://drive.google.com/file/d/1knufviR3SpnEHyrZJOUAz31x281CGCVD/view?usp=sharing" },
    ],
  },
  {
    title: "WagBat Mobile Application",
    date: "May 2024 – June 2024",
    description: "Mobile app for NCTU students to order food from nearby restaurants.",
    tech: ["Kotlin", "Firebase", "XML"],
    image: wagbat,
    repos: [
      { label: "Source Code", url: "https://github.com/3bdalrahman/wagbat" },
    ],
  },
  {
    title: "Taxi Total Amount Prediction",
    date: "Apr 2025 – May 2025",
    description: "ML project to predict NYC taxi fares using regression, Random Forest, SVM, MLP, Tabnet, Wide & Deep, Logistic Regression.",
    tech: ["Python"],
    image: taxi,
    repos: [
      { label: "Source Code", url: "https://github.com/3bdalrahman/Taxi-Total-amount-prediction" },
    ],
  },
];

export default function Projects() {
  const [activeMobileCard, setActiveMobileCard] = useState(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  React.useEffect(() => {
    trackSectionView('Projects');
  }, []);

  const handleProjectInteraction = (projectName, action, linkType) => {
    trackProjectInteraction(projectName, action, linkType);
  };

  const handleCardClick = (title) => {
    if (!isMobile) return;
    setActiveMobileCard((prev) => (prev === title ? null : title));
  };

  return (
    <section
      id="projects"
      data-aos="fade-up"
      data-aos-delay="300"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
    >
      <div
        className="pointer-events-none absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"
      ></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white uppercase tracking-wider mb-4">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg">
          A showcase of my recent work, demonstrating my skills in full-stack development and problem-solving.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 hover:bg-purple-800 transition-all duration-300 border border-white/10 rounded-2xl shadow-xl overflow-hidden flex flex-col"
              onClick={() => handleCardClick(project.title)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {/* Overlay for desktop and for mobile if active */}
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-4 transition-opacity duration-300
                  ${activeMobileCard === project.title ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                  sm:opacity-0 sm:pointer-events-auto sm:hover:opacity-100 sm:flex`}
                >
                  {project.repos.map((repo, index) => (
                    <a
                      key={index}
                      href={repo.url}
                      className="cursor-pointer bg-white/20 text-white px-4 py-2 rounded-full border-2 border-white/30 font-semibold backdrop-blur-md hover:bg-white/30 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleProjectInteraction(project.title, 'click', repo.label)}
                    >
                      <span className="mr-2">
                        {repo.label === "Live Link" ? "🔗" : 
                         repo.label === "Source Code" ? "📁" : 
                         repo.label === "Video Demo" ? "🎥" : "🔗"}
                      </span>
                      {repo.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-purple-700 text-white shadow hover:scale-105 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 