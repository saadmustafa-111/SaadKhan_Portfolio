import Link from "next/link";
import { useEffect } from "react";

const NavLink = ({ href, title, onClick }) => {
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    // Update URL hash
    window.location.hash = targetId;
    
    // Scroll to section
    scrollToSection(targetId);

    if (onClick) onClick();
  };

  // Handle initial load with hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace('#', '');
      scrollToSection(targetId);
    }
  }, []);

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 font-serif hover:text-white transition-colors duration-300 cursor-pointer"
    >
      {title}
    </a>
  );
};

export default NavLink;
