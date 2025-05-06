"use client";
import { useState } from "react";
import { Briefcase, Calendar, ChevronRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfessionalExperience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      company: "Firnas Tech",
      logo: "/images/firnas.jpg", // Your company logo
      position: "MERN Stack Developer",
      duration: "October 2024 - Present",
      description:
        "Working on multiple hands-on projects utilizing React.js, Next.js, Nest.js, and MongoDB. Contributing to full-stack development with a focus on building scalable and responsive web applications.",
      skills: [
        "React.js",
        "Next.js",
        "Nest.js",
        "MongoDB",
        "Full-stack Development",
      ],
      isActive: true,
      accentColor: "border-blue-500",
      bgColor: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-400",
      lightColor: "bg-blue-500/10",
    },
    {
      company: "CodeCrafters",
      logo: "/images/codecrafters.png", // Your company logo
      position: "Junior Front End Developer",
      duration: "May 2024 - September 2024",
      description:
        "Worked on the Mary.io project, focusing on developing modern, responsive user interfaces. Applied React.js to create interactive components and implement state management solutions.",
      skills: [
        "React.js",
        "Responsive Design",
        "UI/UX",
        "Front-end Development",
      ],
      isActive: false,
      accentColor: "border-purple-500",
      bgColor: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-400",
      lightColor: "bg-purple-500/10",
    },
  ];

  return (
    <div id="experience" className="bg-gradient-to-b from-gray-900 to-gray-950 py-24 text-white mt-16">
      {" "}
      {/* Added mt-16 for top margin */}
      <div className="max-w-6xl mx-auto px-4 pt-10">
        {" "}
        {/* Added pt-10 for additional padding at the top */}
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
              <Briefcase className="inline-block w-4 h-4 mr-2" />
              Career Path
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Professional Experience
          </h1>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4">
            My professional journey in web development, showcasing my growth and
            expertise.
          </p>
        </div>
        {/* Experience Cards - Both displayed side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-gradient-to-br ${experience.bgColor} backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border-t-4 ${experience.accentColor} transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] pt-6 sm:pt-8 group`}
              >
                {/* Company Logo */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`h-20 w-20 sm:h-24 sm:w-24 rounded-lg bg-gray-800 border-2 border-gray-700 flex items-center justify-center overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-110`}
                  >
                    <div className="h-full w-full bg-white flex items-center justify-center p-2">
                      <img
                        src={experience.logo || "/placeholder.svg"}
                        alt={`${experience.company} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="p-4 sm:p-6 md:p-8 pt-2 sm:pt-4">
                  <div className="text-center mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {experience.company}
                    </h2>
                    <h3
                      className={`text-lg sm:text-xl font-semibold ${experience.iconColor}`}
                    >
                      {experience.position}
                    </h3>
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-3">
                      <span className="flex items-center text-gray-400 text-sm sm:text-base">
                        <Calendar className="w-4 h-4 mr-1 opacity-70" />
                        {experience.duration}
                      </span>
                      {experience.isActive && (
                        <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-green-500/20 text-green-400 font-medium flex items-center">
                          <span className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Divider with gradient */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4 sm:my-6"></div>

                  {/* Description */}
                  <div className="bg-gray-800/40 p-4 sm:p-5 rounded-lg mb-4 sm:mb-6 backdrop-blur-sm border border-gray-700/50">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {experience.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-gray-400 mb-3 sm:mb-4 font-medium flex items-center text-sm sm:text-base">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`${experience.lightColor} px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              {hoveredIndex === index && (
                <>
                  <div className="absolute -top-4 -right-4 h-16 w-16 bg-blue-500/10 rounded-full blur-xl z-0"></div>
                  <div className="absolute -bottom-4 -left-4 h-16 w-16 bg-purple-500/10 rounded-full blur-xl z-0"></div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        {/* View All Link */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#"
            className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300 group text-sm sm:text-base"
          >
            View All Experience
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
