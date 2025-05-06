"use client";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

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
    const numParticles = 100;

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
        ctx.fillStyle = "rgba(139, 92, 246, 0.6)";
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 4 + 1,
          Math.random() * 0.5 + 0.2
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
          if (dist < 120) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${1 - dist / 120})`;
            ctx.lineWidth = 0.7;
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
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Font imports */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Italianno&family=Lobster&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
      `}</style>

      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-70"
      />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-amber-500/20 to-rose-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center p-5 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6">
            <span className="block text-sm font-medium tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-fuchsia-400 animate-pulse">
              Welcome to my portfolio
            </span>
            <span className="relative text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-none">
              <span
                className="inline-block text-transparent bg-clip-text"
                style={{
                  fontFamily: "Pacifico, cursive",
                  backgroundImage:
                    "linear-gradient(to bottom right, #fcd34d, #e879f9, #f472b6)",
                  backgroundSize: "200% auto",
                  animation: "text-shine 3s ease-in-out infinite",
                }}
              >
                Saad Mustafa
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-[6px] bg-gradient-to-r from-amber-400 via-fuchsia-500 to-rose-600 transform skew-x-12 opacity-70 blur-sm"></span>
            </span>
          </h1>

          <div className="relative mt-8 mb-10">
            <div className="absolute -left-4 -top-4 w-8 h-8 border-t-2 border-l-2 border-amber-400 opacity-70"></div>
            <div className="absolute -right-4 -top-4 w-8 h-8 border-t-2 border-r-2 border-fuchsia-400 opacity-70"></div>
            <div className="absolute -left-4 -bottom-4 w-8 h-8 border-b-2 border-l-2 border-rose-400 opacity-70"></div>
            <div className="absolute -right-4 -bottom-4 w-8 h-8 border-b-2 border-r-2 border-pink-400 opacity-70"></div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight py-4 px-6">
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
                    "linear-gradient(to right, #fcd34d, #e879f9, #f472b6)",
                  WebkitBackgroundClip: "text",
                  textShadow:
                    "0 0 10px rgba(219, 39, 119, 0.5), 0 0 20px rgba(219, 39, 119, 0.3)",
                }}
              />
            </h2>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/#contact"
              className="relative px-8 py-3.5 w-full sm:w-fit rounded-full bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-bold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-rose-500/25 overflow-hidden group"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </Link>
            <Link
              href="/SaadMustafa_React-dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white mt-3 sm:mt-0 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-fuchsia-500/25"
            >
              <span className="block bg-white dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full px-7 py-2.5 font-bold tracking-wide text-black dark:text-white transition-colors duration-300">
                Download CV
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Keyframe animations */}
      <style jsx global>{`
        @keyframes text-shine {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
