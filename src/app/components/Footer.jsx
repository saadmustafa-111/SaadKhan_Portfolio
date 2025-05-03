"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Footericon from "./Footericons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white py-10">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-6">
            {/* Email Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <a
                href="mailto:saadtanoli445@gmail.com"
                className="text-lg font-medium text-gray-200 hover:text-blue-400 transition-colors"
              >
                saadtanoli445@gmail.com
              </a>
            </motion.div>

            {/* Copyright Section */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-sm text-center md:text-left"
            >
              © {currentYear} Saad Mustafa | Bringing ideas to life.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
            >
              <Footericon />
            </motion.div>
          </div>

          {/* Bottom accent bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30 mt-2"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
