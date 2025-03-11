"use client";
import React, { useEffect, useState } from "react";

const AutoSlidingCarousel = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      img: "/images/projects/1.jpg",
      title: "Hair Majesty - Redefining Your Look with Elegance",
      description: "Step into a world of flawless transformations..."
    },
    {
      img: "/images/projects/2.jpg",
      title: "Hinna Henna Creations - Art That Adorns Your Skin",
      description: "Immerse yourself in the beauty of henna..."
    },
    {
      img: "/images/projects/3.jpg",
      title: "TeleCare Hair Studio - Where Family Haircare Meets Excellence",
      description: "From kids to adults, enjoy personalized hair solutions..."
    },
    {
      img: "/images/projects/4.jpg",
      title: "Glow & Grace - Unleash Your Unique Beauty",
      description: "Explore skincare secrets, makeup trends, and self-care rituals that help you embrace your individuality and radiate confidence."
    },
    {
      img: "/images/projects/5.jpg",
      title: "DreamHome Realty - Your Key to the Perfect Property",
      description: "Discover your dream home with a seamless property search, expert insights, and tailored real estate solutions."
    },
    {
      img: "/images/projects/6.jpg",
      title: "WanderScape - Your Gateway to Unforgettable Adventures",
      description: "Plan your perfect getaway with curated tours, themed travel experiences, and expert guides to explore the world your way."
    },
    {
      img: "/images/projects/7.jpg",
      title: "Discover Africa - The Heartbeat of Adventure",
      description: "Embark on an extraordinary journey through Africa's rich landscapes, wildlife, and cultural wonders."
    },
    {
      img: "/images/projects/8.jpg",
      title: "Elite Interiors - Elevate Your Living Space",
      description: "Find stunning furniture designs, modern aesthetics, and décor inspirations to transform your home into a masterpiece."
    },
    {
      img: "/images/projects/9.jpg",
      title: "Neelum Valley Escape - Where Nature Meets Serenity",
      description: "Experience the breathtaking beauty of Swat and Neelum Valley with ultimate camping experiences and nature-inspired adventures."
    },
    {
      img: "/images/projects/10.jpg",
      title: "Pizza Bliss - Crafted for True Pizza Lovers",
      description: "From classic flavors to bold new creations, explore mouthwatering pizza recipes and pro tips for the perfect homemade slice."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dark:bg-gray-900 mt-[150px] text-gray-800 dark:text-white h-[550px] mb-16 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Experience</h1>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden rounded-lg shadow-lg w-full relative">
          <div className="w-full flex-shrink-0 text-white dark:bg-gray-800 p-6 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: 1 }}
          >
            <img
              src={slides[index].img}
              alt={slides[index].title}
              className="w-full h-80 object-fill rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{slides[index].title}</h2>
            <p className="text-white dark:text-gray-400">
              {slides[index].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoSlidingCarousel;
