"use client";
import React, { useEffect, useState } from "react";

const AutoSlidingCarousel = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    {
      img: "/images/projects/1.jpg",
      title: "Portfolio Website",
      description: "Showcases skills, projects, and achievements with interactive and responsive design.",
    },
    {
      img: "/images/projects/2.jpg",
      title: "Carleybay",
      description: "Provides essential child services, education, and safety through technology.",
    },
    {
      img: "/images/projects/3.jpg",
      title: "E-commerce Application",
      description: "Enables online shopping with secure payments, recommendations, and real-time updates.",
    },
    {
        img: "/images/projects/4.jpg",
        title: "Cooking Application",
        description: "Offers recipes, tutorials, and meal planning for all skill levels.",
      },
      {
        img: "/images/projects/5.jpg",
        title: "BLockchain and wallet joining",
        description: "Ensures secure transactions, crypto management, and decentralization via blockchain.",
      },
      {
        img: "/images/projects/6.png",
        title: "Full-stack Roadmap",
        description: "Covers front-end, back-end, databases, APIs, authentication, and deployment.",
      },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" dark:bg-gray-900 text-gray-800 dark:text-white h-[550px] mb-16 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white ">Experience</h1>
        </div>

        {/* Carousel Wrapper */}
        <div className="overflow-hidden rounded-lg shadow-lg w-full relative">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 text-white dark:bg-gray-800 p-6"
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-80 object-fill rounded-md"
                />
                <h2 className="text-xl font-semibold mt-4">{slide.title}</h2>
                <p className="text-white dark:text-gray-400">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoSlidingCarousel;
