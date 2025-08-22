"use client";
import { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gigjives",
    description:
      "Project management software for IT and construction companies with full Admin, Manager, and Employee role modules. Features real-time communication with Socket.IO and WebRTC-based video calling system for seamless collaboration.",
    image: "/images/gigjives.png",
    tag: ["All", "Web", "Full-Stack"],
    technologies: ["React.js", "Node.js", "Socket.IO", "WebRTC"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 2,
    title: "Lemara Commercial",
    description:
      "Real estate platform built with Next.js to streamline workflows. Features dynamic property listings, automated lead generation, and efficient agent-client management tools through a centralized, responsive interface.",
    image: "/images/lemara.png",
    tag: ["All", "Web", "Full-Stack"],
    technologies: ["Next.js", "React.js", "Tailwind CSS"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 3,
    title: "S4 Security Management App",
    description:
      "Security personnel management system with React.js frontend and NestJS backend with MongoDB. Streamlines hiring processes and enhances operational efficiency for security companies.",
    image: "/images/s4-security.png",
    tag: ["All", "Web", "Full-Stack"],
    technologies: ["React.js", "NestJS", "MongoDB"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 4,
    title: "4 Rays Gaming Centers",
    description:
      "American SaaS product for gaming centers and subscription management. Led entire frontend development and collaborated on AI features including face detection and face recognition systems.",
    image: "/images/4rays.png",
    tag: ["All", "Web", "AI"],
    technologies: ["React.js", "AI/ML", "Face Recognition"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 5,
    title: "BrandCentro Dubai",
    description:
      "Comprehensive overview platform for apartment buildings in Dubai, displaying floors, apartments per floor, and detailed property insights. Features dynamic PDF templates using React PDF/Rerender.",
    image: "/images/brandcentro.png",
    tag: ["All", "Web"],
    technologies: ["React.js", "React PDF", "PDF Generation"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 6,
    title: "EHealth Platform",
    description:
      "Responsive website and mobile app for doctor search, profile viewing, appointment booking, and prescription management. Enables seamless doctor-patient interaction with ratings and feedback system.",
    image: "/images/ehealth.png",
    tag: ["All", "Web", "Mobile"],
    technologies: ["React.js", "React Native", "Healthcare"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 7,
    title: "PharmaZone",
    description:
      "React Native mobile app and React.js web app connecting customers with nearby pharmacies. Features location-based search, medicine availability checking, order placement, and real-time chat.",
    image: "/images/pharmazone.png",
    tag: ["All", "Web", "Mobile"],
    technologies: ["React.js", "React Native", "Real-time Chat"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 8,
    title: "FYP Management System",
    description:
      "Built for AUST to streamline project submission, evaluation, and tracking. Developed RESTful APIs with Node.js and integrated them into a responsive React frontend to enhance workflow and communication.",
    image: "/images/fyp-system.png",
    tag: ["All", "Web", "Full-Stack"],
    technologies: ["React.js", "Node.js", "RESTful APIs"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 9,
    title: "Habba Wa Jumla",
    description:
      "Saudi Online Marketplace project focusing on user interface development. Collaborated closely with the design team to ensure a seamless user experience for the e-commerce platform.",
    image: "/images/habba-jumla.png",
    tag: ["All", "Web", "E-commerce"],
    technologies: ["React.js", "UI/UX", "E-commerce"],
    gitUrl: "#",
    previewUrl: "#",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto"
        >
          Showcasing my expertise in full-stack development, from enterprise
          solutions to innovative AI-powered applications
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center items-center gap-3 mb-12"
      >
        {["All", "Web", "Mobile", "Full-Stack", "AI", "E-commerce"].map(
          (filterTag) => (
            <ProjectTag
              key={filterTag}
              onClick={handleTagChange}
              name={filterTag}
              isSelected={tag === filterTag}
            />
          )
        )}
      </motion.div>

      <ul
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 w-full"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: isMobile ? 0.1 : index * 0.15 }}
            className="h-full group"
          >
            <div className="relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
              <div className="relative h-full">
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  technologies={project.technologies}
                />
              </div>
            </div>
          </motion.li>
        ))}
      </ul>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full text-center py-20"
        >
          <div className="bg-slate-800/50 rounded-2xl p-12 border border-slate-700">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-300 text-xl mb-2">No projects found</p>
            <p className="text-gray-500">
              Try selecting a different filter to explore more projects
            </p>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700">
          <div className="text-3xl font-bold text-blue-400 mb-2">
            {projectsData.length}+
          </div>
          <div className="text-gray-300 text-sm">Projects Completed</div>
        </div>
        <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700">
          <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
          <div className="text-gray-300 text-sm">Years Experience</div>
        </div>
        <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700">
          <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
          <div className="text-gray-300 text-sm">Technologies</div>
        </div>
        <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700">
          <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
          <div className="text-gray-300 text-sm">Client Satisfaction</div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
