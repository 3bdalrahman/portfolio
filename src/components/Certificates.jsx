import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./certificates-animations.css";
import { trackCertificateVerification, trackSectionView } from "../utils/analytics";
import webDev from "../assets/certificates/Web Development Challenger Track image.png";
import node from "../assets/certificates/node js mahara-tech-page-00001.jpg";
import php from "../assets/certificates/php mahara-tech-page-00001.jpg";
import git from "../assets/certificates/Coursera A5MRP23LB6B4 Version Control-page-00001.jpg";
import android from "../assets/certificates/Coursera 3AJTC4P6RTTV Introduction to Android Mobile Application-page-00001.jpg";
import uiux from "../assets/certificates/Coursera 5OQJQ2DUOY88 UI&UX-page-00001.jpg";
import kotlin from "../assets/certificates/Coursera F373F27UD97A Programming Fundamentals in Kotlin-page-00001.jpg";
import androidStudio from "../assets/certificates/Coursera SVAK147XZFON UI in Android Studio-page-00001.jpg";
import advancedKotlin from "../assets/certificates/clean code mahara-page-00001.jpg";
import androidDevelopment from "../assets/certificates/android odc-page-00001.jpg";
import cleanCode from "../assets/certificates/clean code mahara-page-00001.jpg";
const certificates = [
  // Web & Backend Development
  {
    title: "Web Development Challenger Track",
    issuer: "ITIDA via Udacity",
    date: "Sep 2022",
    skills: ["Web Development"],
    image: webDev, 
    verify: "https://drive.google.com/file/d/1QydnGkmD_e01q0tHN9OAqDho-hmpk-fK/view", 
    category: "Web & Backend Development",
  },
  {
    title: "Building Web Applications using PHP & MySQL",
    issuer: "Mhara Tech",
    date: "Aug 2024",
    skills: ["PHP", "MySQL", "Web Applications","OOP"],
    image: php,
    verify: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=36489&code=WC9RhHyxrg",
    category: "Web & Backend Development",
  },
  {
    title: "The Complete Node.js Course",
    issuer: "Mahra Tech",
    date: "Oct 2024",
    skills: ["Node.js", "Backend"],
    image: node,
    verify: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=410164&code=7uOKbvf8nY&qrcode=1",
    category: "Web & Backend Development",
  },
  // Software Engineering
  {
    title: "Version Control",
    issuer: "Meta via Coursera",
    date: "Jun 2024",
    skills: ["Git", "Version Control"],
    image: git,
    verify: "https://www.coursera.org/account/accomplishments/verify/A5MRP23LB6B4",
    category: "Software Engineering",
  },
  {
    title: "The principles of writing clean code",
    issuer: "Mahara Tech",
    date: "Sep 2024",
    skills: ["Clean Code", "OOP"],
    image: cleanCode,
    verify: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=447929&code=pfeTvKprSE&qrcode=1",
    category: "Software Engineering",
  },
  // Mobile Development
  {
    title: "Introduction to Android Mobile Application Development",
    issuer: "Meta via Coursera",
    date: "Jun 2024",
    skills: ["Android", "Mobile Development"],
    image: android,
    verify: "https://www.coursera.org/account/accomplishments/verify/3AJTC4P6RTTV",
    category: "Mobile Development",
  },
  {
    title: "Principles of UI and UX Design",
    issuer: "Meta via Coursera",
    date: "July 2024",
    skills: ["UI Design", "UX Design"],
    image: uiux,
    verify: "https://www.coursera.org/account/accomplishments/verify/5OQJQ2DUOY88",
    category: "Mobile Development",
  },
  {
    title: "Programming Fundamentals in Kotlin",
    issuer: "Meta via Coursera",
    date: "July 2024",
    skills: ["Kotlin", "Programming Fundamentals"],
    image: kotlin,
    verify: "https://www.coursera.org/account/accomplishments/verify/F373F27UD97A",
    category: "Mobile Development",
  },
  {
    title: "Create the User Interface in Android Studio",
    issuer: "Meta via Coursera",
    date: "Aug 2024",
    skills: ["Android Studio", "UI"],
    image: androidStudio,
    verify: "https://www.coursera.org/account/accomplishments/verify/SVAK147XZFON",
    category: "Mobile Development",
  },
  {
    title: "Advanced Programming in Kotlin",
    issuer: "Meta via Coursera",
    date: "Sep 2024",
    skills: ["Kotlin", "Advanced Programming"],
    image: advancedKotlin,
    verify: "https://www.coursera.org/account/accomplishments/verify/431JOX8HCEB7",
    category: "Mobile Development",
  },
  {
    title: "Android Development Course – Level 1",
    issuer: "AMIT Learning and ODC",
    date: "Sep 2024",
    skills: ["Android", "Mobile Development"],
    image: androidDevelopment,
    verify: "https://drive.google.com/file/d/1X2T0oUC8yGjqpcqsac3ytf7IwR-JKc9l/view",
    category: "Mobile Development",
  },
];

const categories = [
  "Web & Backend Development",
  "Mobile Development",
  "Software Engineering",
];

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState("Web & Backend Development");
  const [fadeKey, setFadeKey] = useState(0);
  const [activeMobileCard, setActiveMobileCard] = useState(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  React.useEffect(() => {
    AOS.init({ once: true });
    trackSectionView('Certificates');
  }, []);

  const handleCertificateVerification = (certificateName) => {
    trackCertificateVerification(certificateName);
  };

  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

  // When filter changes, trigger fade animation by changing fadeKey and refresh AOS
  const handleFilter = (cat) => {
    setSelectedCategory(cat);
    setFadeKey((k) => k + 1);
    setTimeout(() => {
      AOS.refresh();
    }, 350);
  };

  const handleCardClick = (title) => {
    if (!isMobile) return;
    setActiveMobileCard((prev) => (prev === title ? null : title));
  };

  return (
    <section
      id="certificates"
      data-aos="fade-up"
      data-aos-delay="300"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
    >
      <div
        className="pointer-events-none absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"
      ></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white uppercase tracking-wider mb-4">
          My <span className="text-purple-400">Certificates</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg">
          Professional certifications that showcase my commitment to continuous learning and expertise in various technologies.
        </p>
        {/* Filter UI */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
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
        <div
          key={fadeKey}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 fade-in"
        >
          {filteredCertificates.length === 0 ? (
            <div className="col-span-full text-center text-gray-400">No certificates found.</div>
          ) : (
            filteredCertificates.map((cert) => (
              <div
                key={cert.title + cert.issuer}
                className="bg-gray-800 hover:bg-purple-800 transition-all duration-300 border border-white/10 rounded-2xl shadow-xl overflow-hidden flex flex-col"
                onClick={() => handleCardClick(cert.title)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image || "https://via.placeholder.com/400x200?text=Certificate"}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {/* Overlay for desktop and for mobile if active */}
                  <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300
                    ${activeMobileCard === cert.title ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    sm:opacity-0 sm:pointer-events-auto sm:hover:opacity-100 sm:flex`}
                  >
                    <a
                      href={cert.verify || "#"}
                      className="bg-white/20 text-white px-4 py-2 rounded-full border-2 border-white/30 font-semibold backdrop-blur-md hover:bg-white/30 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleCertificateVerification(cert.title)}
                    >
                      Verify Certificate
                    </a>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-purple-300 font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-purple-700 text-white shadow hover:scale-105 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
} 