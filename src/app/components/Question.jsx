"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Helper function to conditionally join classNames
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQSection() {
  return (
    <section className="py-16 mt-[100px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Find answers to common questions about our services and expertise
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm">
      <button
        className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gray-400 transition-transform duration-300",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 max-h-0",
          isOpen && "max-h-96"
        )}
      >
        <div className="px-6 pb-4 pt-0 text-gray-400 border-t border-gray-800">
          <p className="py-4">{answer}</p>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "Can you share details about your experience?",
    answer:
      "I have 2+ years of experience working on various projects, including freelance assignments. I have developed different types of projects such as web applications, interactive UI components, and dynamic websites, ensuring efficiency, responsiveness, and user-centric design.",
  },
  {
    question: "How many projects have you worked on?",
    answer:
      "I have worked on multiple projects, ranging from personal initiatives to professional assignments. These include web applications, interactive UI components, and dynamic websites, each designed to meet specific user needs with efficiency and responsiveness.",
  },
  {
    question:
      "What technologies and programming languages do you specialize in?",
    answer:
      "I specialize in HTML, CSS, JavaScript, React, Next.js, TypeScript, and Tailwind CSS. I also have experience with APIs, Git/GitHub, and backend technologies like Node.js and Express.",
  },
  {
    question: "Do you build websites from scratch or customize existing ones?",
    answer:
      "I can do both! I build fully customized websites from scratch, and I can also improve or modify existing websites based on your needs.",
  },
  {
    question: "Can you develop both front-end and back-end applications?",
    answer:
      "Yes! My primary focus is front-end development and I also create many projects of front-end development but I also have some experience with back-end technologies like Node.js.",
  },
  {
    question: "Do you offer UI/UX design services along with development?",
    answer:
      "While I primarily focus on development, I can create modern and responsive UI designs using Tailwind CSS and CSS animations. For advanced UI/UX designs, I collaborate with designers.",
  },
  {
    question: "What is your typical workflow when developing a website?",
    answer:
      "My process includes: Understanding your requirements (via a call or document), creating a wireframe or basic design, developing the website with clean, maintainable code, testing and making necessary improvements, deploying the website and providing support.",
  },
];
