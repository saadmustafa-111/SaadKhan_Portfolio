"use client";
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="relative h-full rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-gray-800 border border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-52 w-full relative overflow-hidden">
        {!isImageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
            <span className="text-gray-500">Loading...</span>
          </div>
        )}

        {imageError ? (
          <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400">Image not available</span>
          </div>
        ) : (
          <div className={`relative w-full h-full ${isImageLoaded ? "opacity-100" : "opacity-0"}`}>
            <Image
              src={imgUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-all duration-300 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
              onLoad={() => setIsImageLoaded(true)}
              onError={() => {
                setImageError(true);
                setIsImageLoaded(true);
              }}
              priority={false}
              quality={75}
              unoptimized={false}
            />
          </div>
        )}

        <div
          className={`absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center gap-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center border border-gray-600 transition-all duration-300 hover:border-white group"
          >
            <CodeBracketIcon className="h-6 w-6 text-white group-hover:text-blue-400" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center border border-gray-600 transition-all duration-300 hover:border-white group"
          >
            <EyeIcon className="h-6 w-6 text-white group-hover:text-blue-400" />
          </Link>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center transition-colors"
          >
            View Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 text-sm font-medium flex items-center transition-colors"
          >
            Source Code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
