import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Skillsbar from "./components/Skillsbar";
import Question from "./components/Question";
import Whyus from "./components/Whyus";
import Topbutton from "./components/Topbutton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <Skillsbar />
        <Question />
        <Whyus />
        <Topbutton />
      </div>
      <Footer />
    </main>
  );
}
