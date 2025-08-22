"use client";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];
    const numParticles = 80;

    class Particle {
      constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.x < 0 || this.x > canvas.width)
          this.angle = Math.PI - this.angle;
        if (this.y < 0 || this.y > canvas.height) this.angle = -this.angle;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 3 + 1,
          Math.random() * 0.3 + 0.1
        )
      );
    }

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dist = Math.hypot(
            particles[a].x - particles[b].x,
            particles[a].y - particles[b].y
          );
          if (dist < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Font imports */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Italianno&family=Lobster&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
      `}</style>

      {/* Background Image - Now positioned on the right side */}
      <div className="absolute inset-0 z-0 flex">
        {/* Left side - Dark background for text */}
        <div className="w-full md:w-1/2 bg-black"></div>

        {/* Right side - Image container */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src="/images/Saad.png"
            alt="Saad Mustafa - Software Engineer"
            fill
            className="object-cover object-bottom scale-110"
            style={{
              filter:
                "brightness(0.8) contrast(1.4) saturate(1.6) hue-rotate(5deg)",
              objectPosition: "center 85%", // Move image more towards bottom
            }}
            priority
            quality={100}
          />
        </div>

        {/* Mobile - Full background image */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/Saad.png"
            alt="Saad Mustafa - Software Engineer"
            fill
            className="object-contain object-center scale-105"
            style={{
              filter:
                "brightness(0.8) contrast(1.4) saturate(1.6) hue-rotate(5deg)",
            }}
            priority
            quality={100}
          />
        </div>

        {/* Multiple overlay layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/70 md:from-black/90 md:via-black/40 md:to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/20 via-transparent to-amber-900/15"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Animated particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10 opacity-60"
      />

      {/* Dynamic background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/8 to-fuchsia-500/8 rounded-full blur-3xl animate-pulse z-10"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-fuchsia-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse z-10"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-rose-500/4 to-amber-500/4 rounded-full blur-3xl animate-pulse z-10"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Main content - Now positioned on the left side */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            {/* Welcome text */}
            <motion.span
              className="block text-sm md:text-base font-medium tracking-widest uppercase mb-6 text-amber-300/90 animate-pulse"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to my portfolio
            </motion.span>

            {/* Main name */}
            <motion.h1
              className="mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-none block">
                <span
                  className="inline-block text-transparent bg-clip-text drop-shadow-2xl"
                  style={{
                    fontFamily: "Pacifico, cursive",
                    backgroundImage:
                      "linear-gradient(135deg, #fcd34d 0%, #f472b6 25%, #e879f9 50%, #c084fc 75%, #fcd34d 100%)",
                    backgroundSize: "300% auto",
                    animation: "text-shine 4s ease-in-out infinite",
                    textShadow:
                      "0 0 40px rgba(252, 211, 77, 0.5), 0 0 80px rgba(244, 114, 182, 0.3)",
                  }}
                >
                  Saad Mustafa
                </span>
                <span className="absolute -bottom-3 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-3/4 h-2 bg-gradient-to-r from-amber-400 via-fuchsia-500 to-purple-500 blur-sm opacity-80 animate-pulse"></span>
              </span>
            </motion.h1>

            {/* Profession text with animated border */}
            <motion.div
              className="relative mt-10 mb-12 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Animated corner decorations */}
              <div className="absolute -left-6 -top-6 w-12 h-12 border-t-2 border-l-2 border-amber-400/70 animate-pulse"></div>
              <div
                className="absolute -right-6 -top-6 w-12 h-12 border-t-2 border-r-2 border-fuchsia-400/70 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute -left-6 -bottom-6 w-12 h-12 border-b-2 border-l-2 border-rose-400/70 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute -right-6 -bottom-6 w-12 h-12 border-b-2 border-r-2 border-purple-400/70 animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold tracking-tight py-6 px-8 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/10">
                <TypeAnimation
                  sequence={[
                    "A Software Engineer",
                    1000,
                    "Mern Stack Developer",
                    1000,
                    "A Web Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className="text-transparent bg-clip-text"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    backgroundImage:
                      "linear-gradient(to right, #fcd34d, #f472b6, #e879f9, #c084fc)",
                    WebkitBackgroundClip: "text",
                    textShadow:
                      "0 0 20px rgba(252, 211, 77, 0.4), 0 0 40px rgba(244, 114, 182, 0.3)",
                  }}
                />
              </h2>
            </motion.div>

            {/* Call-to-action buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link
                href="/#contact"
                className="relative px-10 py-4 w-full sm:w-fit rounded-full bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-bold tracking-wide transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-amber-500/30 overflow-hidden group backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Hire Me</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
              </Link>

              <Link
                href="/SaadMustafa_React-dev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-400 hover:to-fuchsia-500 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/30 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-2 bg-black/60 hover:bg-black/40 backdrop-blur-sm rounded-full px-8 py-2.5 font-bold tracking-wide text-white transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Download CV</span>
                </span>
              </Link>
            </motion.div>

            {/* Social proof or additional info */}
            <motion.div
              className="mt-16 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="flex items-center justify-center md:justify-start gap-8 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available for work</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/20"></div>
                <div className="hidden sm:flex items-center gap-2">
                  <div
                    className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <span>Open to collaboration</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx global>{`
        @keyframes text-shine {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .bg-radial-gradient {
          background: radial-gradient(
            circle at center,
            transparent 0%,
            transparent 60%,
            rgba(0, 0, 0, 0.3) 100%
          );
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
