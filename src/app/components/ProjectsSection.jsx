"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Hair Majesty - Redefining Your Look with Elegance",
    description:
      "Step into a world of flawless transformations with expert hairstyling, premium hair treatments, and trendsetting looks designed to elevate your confidence.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/Nails-decoration-salon",
    previewUrl: "https://nails-decoration.vercel.app/",
  },
  {
    id: 2,
    title: "Hinna Henna Creations - Art That Adorns Your Skin",
    description:
      "Immerse yourself in the beauty of henna with intricate designs, bridal mehndi, and artistic inspirations for every occasion.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/Henna-website",
    previewUrl: "https://hinna-henna-main.vercel.app/",
  },
  {
    id: 3,
    title: "TeleCare Hair Studio - Where Family Haircare Meets Excellence",
    description:
      "From kids to adults, enjoy personalized hair solutions, expert styling advice, and professional care for your entire family.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/Salon-website",
    previewUrl: "https://salon-frontend-master.vercel.app/",
  },
  {
    id: 4,
    title: "Glow & Grace - Unleash Your Unique Beauty",
    description:
      "Explore skincare secrets, makeup trends, and self-care rituals that help you embrace your individuality and radiate confidence.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/malahimaamir/Cosmetics",
    previewUrl:
      "https://shofy-beauty-and-cosmetics-ecommerce-client-main.vercel.app/",
  },
  {
    id: 5,
    title: "DreamHome Realty - Your Key to the Perfect Property",
    description:
      "Discover your dream home with a seamless property search, expert insights, and tailored real estate solutions.",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/Real-estate",
    previewUrl: "https://real-estate-main-amber.vercel.app/",
  },
  {
    id: 6,
    title: "WanderScape - Your Gateway to Unforgettable Adventures",
    description:
      "Plan your perfect getaway with curated tours, themed travel experiences, and expert guides to explore the world your way",
    image: "/images/projects/6.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/travelling-website",
    previewUrl: "https://travelwebsite-master.vercel.app/",
  },
  {
    id: 7,
    title: "Discover Africa - The Heartbeat of Adventure",
    description:
      "Embark on an extraordinary journey through Africa's rich landscapes, wildlife, and cultural wonders.",
    image: "/images/projects/7.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/travelling-to-africa",
    previewUrl: "https://travelling-to-africs.vercel.app/",
  },
  {
    id: 8,
    title: "Elite Interiors - Elevate Your Living Space",
    description:
      "Find stunning furniture designs, modern aesthetics, and décor inspirations to transform your home into a masterpiece.",
    image: "/images/projects/8.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/Furniture-Designs",
    previewUrl: "https://furniture-two-rho.vercel.app/",
  },
  {
    id: 9,
    title: "Neelum Valley Escape - Where Nature Meets Serenity",
    description:
      "Experience the breathtaking beauty of Swat and Neelum Valley with ultimate camping experiences and nature-inspired adventures.",
    image: "/images/projects/9.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/Travelling-Swat-to-Neelam",
    previewUrl: "https://travel-navy-sigma.vercel.app/",
  },
  {
    id: 10,
    title: "Pizza Bliss - Crafted for True Pizza Lovers",
    description:
      "From classic flavors to bold new creations, explore mouthwatering pizza recipes and pro tips for the perfect homemade slice.",
    image: "/images/projects/10.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/malahimaamir/food-ordering",
    previewUrl: "https://food-theta-seven.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
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
    </section>
  );
};

export default ProjectsSection;
