"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleNavClick = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav className="fixed mx-auto top-0 left-0 right-0 z-10 backdrop-blur-lg bg-white/30 dark:bg-black/30 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="flex container text-gray-600 dark:text-[#ADB7BE] lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <div className="font-serif italic text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            Saad Mustafa
          </div>

          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index} className="font-serif font-medium">
                  <NavLink
                    href={link.path}
                    title={link.title}
                    onClick={handleNavClick}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="mobile-menu block md:hidden">
              {!navbarOpen ? (
                <button
                  onClick={() => setNavbarOpen(true)}
                  className="flex items-center px-3 py-2 border rounded border-gray-300 dark:border-slate-200 text-gray-600 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white"
                >
                  <Bars3Icon className="h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="flex items-center px-3 py-2 border rounded border-gray-300 dark:border-slate-200 text-gray-600 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
        {navbarOpen ? (
          <MenuOverlay links={navLinks} closeMenu={handleNavClick} />
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;