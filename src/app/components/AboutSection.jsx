"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { GraduationCap, Building, Award, Code2, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/Card";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
          <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
            <Code2 className="mr-2 h-4 w-4" />
            Frontend Technologies
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
              "React.js",
              "Next.js",
              "Tailwind CSS",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-blue-500/10 rounded-lg px-3 py-1 text-sm border border-blue-500/20"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 hover:border-green-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
          <h3 className="text-green-300 font-semibold mb-3 flex items-center">
            <Sparkles className="mr-2 h-4 w-4" />
            Backend Technologies
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {["Node.js", "Nest.js", "MongoDB"].map((skill) => (
              <div
                key={skill}
                className="bg-green-500/10 rounded-lg px-3 py-1 text-sm border border-green-500/20"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 border-slate-600/30 text-white overflow-hidden relative hover:border-slate-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full"></div>
          <CardHeader className="pb-3 relative">
            <CardTitle className="text-xl font-bold flex items-center">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg mr-3">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Bachelor of Software Engineering
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center bg-slate-700/50 rounded-lg p-3">
              <Building className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
              <span className="text-slate-200 font-medium">
                Abbottabad University of Science and Technology
              </span>
            </div>
            <div className="flex items-center bg-amber-500/10 rounded-lg p-3 border border-amber-500/20">
              <Award className="mr-3 h-5 w-5 text-amber-500 flex-shrink-0" />
              <span className="text-amber-400 font-semibold text-lg">
                CGPA: 3.5
              </span>
              <div className="ml-auto bg-amber-500/20 px-2 py-1 rounded-full text-amber-300 text-sm">
                Excellent
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white relative overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-2 rounded-3xl border border-slate-600/30">
            <Image
              className="rounded-2xl w-full h-auto object-cover"
              src="/images/about-image.png"
              width={500}
              height={500}
              alt="About me"
            />
          </div>
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500/50 to-blue-500/50 rounded-full"></div>
            <p className="text-base lg:text-lg leading-relaxed text-slate-200 pl-6 relative">
              I specialize in building responsive web applications using HTML,
              CSS, JavaScript, TypeScript, React.js, and Next.js. Over the
              years, I&apos;ve delivered high-quality solutions with great user
              experiences across all devices. I&apos;ve also worked on several
              MERN stack projects using Node.js, Express, Nest.js, and MongoDB,
              giving me a solid grasp of both frontend and backend development.
              Collaborating with cross-functional teams has helped me develop
              the skills to tackle challenges effectively and deliver scalable,
              performance-driven applications.
            </p>
          </div>

          <div className="flex flex-row justify-start mt-8 gap-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>

          <div className="mt-8 relative">
            <div
              className={`transition-all duration-500 ${
                isPending ? "opacity-50" : "opacity-100"
              }`}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
