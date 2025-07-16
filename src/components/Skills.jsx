import React, { useState } from "react";
import imageHero from "../assets/imghero.png";
import "./certificates-animations.css";
import { trackSectionView } from "../utils/analytics";
import { trackEvent } from "../utils/analytics";

const SkillsData = [
  // Frontend
  {
    id: 1,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML5",
    description: "The standard markup language for creating web pages.",
    category: "Frontend",
  },
  {
    id: 2,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    title: "CSS3",
    description: "Style sheet language used for describing the look of web pages.",
    category: "Frontend",
  },
  {
    id: 3,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "JavaScript",
    description: "High-level, versatile programming language for the web.",
    category: "Frontend",
  },
  {
    id: 4,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React",
    description: "JavaScript library for building user interfaces.",
    category: "Frontend",
  },
  // Mobile
  {
    id: 5,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React Native",
    description: "Framework for building native apps using React.",
    category: "Mobile",
  },
  {
    id: 22,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    title: "Kotlin Compose",
    description: "Modern toolkit for building native Android UIs with Kotlin.",
    category: "Mobile",
  },
  // Backend
  {
    id: 6,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
    description: "JavaScript runtime for server-side programming.",
    category: "Backend",
  },
  {
    id: 7,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    title: "Express",
    description: "Minimal and flexible Node.js web application framework.",
    category: "Backend",
  },
  {
    id: 8,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    title: "PHP",
    description: "Popular server-side scripting language for web development.",
    category: "Backend",
  },
  // Database
  {
    id: 9,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    title: "MySQL",
    description: "Popular open-source relational database management system.",
    category: "Database",
  },
  {
    id: 10,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    title: "MongoDB",
    description: "Document-oriented NoSQL database for high performance.",
    category: "Database",
  },
  {
    id: 11,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    title: "Mongo Atlas",
    description: "Cloud database service for MongoDB deployments.",
    category: "Database",
  },
  {
    id: 23,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    title: "Firebase",
    description: "Google's platform offering real-time database, authentication, hosting, and cloud functions.",
    category: "Database",
  },
  // Tools
  {
    id: 12,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: "Git",
    description: "Distributed version control system for tracking changes in code.",
    category: "Tools",
  },
  {
    id: 13,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    title: "GitHub",
    description: "Web-based platform for version control and collaboration.",
    category: "Tools",
  },
  {
    id: 14,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    title: "VS Code",
    description: "Popular source-code editor developed by Microsoft.",
    category: "Tools",
  },
  {
    id: 15,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    title: "Postman",
    description: "API platform for building and using APIs.",
    category: "Tools",
  },
  {
    id: 16,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    title: "MS Office",
    description: "Suite of office productivity applications by Microsoft.",
    category: "Tools",
  },
  // Programming Languages
  {
    id: 17,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    title: "C",
    description: "General-purpose, procedural computer programming language.",
    category: "Programming Languages",
  },
  {
    id: 18,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    title: "C++",
    description: "General-purpose programming language, extension of C.",
    category: "Programming Languages",
  },
  {
    id: 19,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    title: "Java",
    description: "High-level, class-based, object-oriented programming language.",
    category: "Programming Languages",
  },
  {
    id: 20,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    title: "Kotlin",
    description: "Modern programming language for JVM and Android.",
    category: "Programming Languages",
  },
  {
    id: 21,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg",
    title: "XML",
    description: "Markup language for encoding documents in a format readable by humans and machines.",
    category: "Mobile",
  },
];

const categories = [
  "Backend",
  ...Array.from(new Set(SkillsData.map((s) => s.category))).filter(cat => cat !== "Backend"),
];

const SkillBox = ({ image, title, description }) => (
  <article className="bg-white/5 border border-white/10 rounded-2xl shadow-xl backdrop-blur-md flex flex-col items-center p-6 transition-all duration-300 hover:scale-105 hover:border-purple-500/60">
    <figure className="flex justify-center items-center mb-4">
      <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg" />
    </figure>
    <header className="mb-2 text-center">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{title}</h3>
    </header>
    <p className="text-gray-300 text-sm sm:text-base text-center">{description}</p>
  </article>
);

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("Backend");
  const [fadeKey, setFadeKey] = useState(0);

  React.useEffect(() => {
    trackSectionView('Skills');
  }, []);

  const filteredSkills = SkillsData.filter((s) => s.category === selectedCategory);

  const handleFilter = (cat) => {
    setSelectedCategory(cat);
    setFadeKey((k) => k + 1);
    trackEvent('filter_used', { label: cat, section: 'Skills' });
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
    >
      <div
        className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28
        left-1/2 transform -translate-x-1/2"
      ></div>
      <img
        src={imageHero}
        alt="hero"
        className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70"
      />
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My Expertise <br /> and{" "}
            <span className="text-purple-400">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            I’ve worked with a variety of tools and technologies to build
            full-stack web and mobile apps. From backend APIs to responsive
            frontends, I focus on writing clean, efficient, and scalable code.
          </p>
        </header>
        {/* Filter UI */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`cursor-pointer px-5 py-2 rounded-full font-semibold border-2 transition-all duration-200 text-sm uppercase tracking-wide
                ${selectedCategory === cat
                  ? "bg-purple-600 text-white border-transparent shadow-lg"
                  : "bg-gray-800 text-gray-200 border-white/20 hover:bg-purple-800"}
              `}
            >
              {cat}
            </button>
          ))}
        </div>
        <section
          key={fadeKey}
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 fade-in"
        >
          {filteredSkills.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>
      <img
        src={imageHero}
        alt="hero"
        className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70"
      />
    </section>
  );
}
