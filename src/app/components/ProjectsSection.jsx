"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "S4 Security Surveillance System",
    description:
      "Advanced security monitoring solution with real-time surveillance capabilities, motion detection, and automated alerts for comprehensive protection.",
    image: "/images/s4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/Nails-decoration-salon",
    previewUrl: "https://nails-decoration.vercel.app/",
  },
  {
    id: 2,
    title: "Saudi Market Place Project",
    description:
      "Digital marketplace connecting Saudi vendors and customers with streamlined product listings, secure transactions, and localized shopping experience.",
    image: "/images/saudi.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/Henna-website",
    previewUrl: "https://hinna-henna-main.vercel.app/",
  },
  {
    id: 3,
    title: "Food Delivery App",
    description:
      "Seamless food ordering platform featuring restaurant exploration, real-time order tracking, and personalized meal recommendations.",
    image: "/images/food.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/Salon-website",
    previewUrl: "https://salon-frontend-master.vercel.app/",
  },
  {
    id: 4,
    title: "4K Streaming App",
    description:
      "High-definition content streaming service with extensive media library, personalized recommendations, and cross-device playback functionality.",
    image: "/images/stream.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/malahimaamir/Cosmetics",
    previewUrl:
      "https://shofy-beauty-and-cosmetics-ecommerce-client-main.vercel.app/",
  },
  {
    id: 5,
    title: "Brand Centro",
    description:
      "Brand management platform offering comprehensive tools for identity creation, campaign tracking, and analytics to strengthen market presence.",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/Real-estate",
    previewUrl: "https://real-estate-main-amber.vercel.app/",
  },
  {
    id: 6,
    title: "EHealth",
    description:
      "Telemedicine solution connecting patients with healthcare providers through secure video consultations, digital prescriptions, and health monitoring.",
    image: "/images/ehealth.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/travelling-website",
    previewUrl: "https://travelwebsite-master.vercel.app/",
  },
  {
    id: 7,
    title: "PharmaZone",
    description:
      "Online pharmacy platform featuring medication ordering, prescription management, and health information resources for convenient healthcare access.",
    image: "/images/projects/7.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/travelling-to-africa",
    previewUrl: "https://travelling-to-africs.vercel.app/",
  },
  {
    id: 8,
    title: "FYP Management System",
    description:
      "Comprehensive solution for final year project coordination with milestone tracking, supervisor communication, and document management capabilities.",
    image: "/images/fyp.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/Furniture-Designs",
    previewUrl: "https://furniture-two-rho.vercel.app/",
  },
  {
    id: 9,
    title: "Envintico",
    description:
      "Environmental impact tracking platform helping businesses monitor carbon footprint, implement sustainability initiatives, and generate compliance reports.",
    image: "/images/invoice.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/Travelling-Swat-to-Neelam",
    previewUrl: "https://travel-navy-sigma.vercel.app/",
  },
  {
    id: 10,
    title: "Pak Lawyers Hub",
    description:
      "Legal professional network connecting Pakistani lawyers with clients, featuring case management tools, document repositories, and consultation scheduling.",
    image: "/images/lawyer.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/food-ordering",
    previewUrl: "https://food-theta-seven.vercel.app/",
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
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: isMobile ? 0.1 : index * 0.2 }}
            className="h-full"
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>

      {filteredProjects.length === 0 && (
        <div className="w-full text-center py-16">
          <p className="text-gray-400 text-lg">
            No projects found with this filter.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
