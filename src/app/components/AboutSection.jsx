"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { GraduationCap, Building, Award } from "lucide-react";
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
      <ul className="list-disc pl-2">
        <li>Html5</li>
        <li>Css3</li>
        <li>Reactjs</li>
        <li>Typescript</li>
        <li>JavaScript</li>
        <li>Tailwindcss</li>
        <li>Nextjs</li>
        <li>Node js </li>
        <li>Nest js</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold flex items-center">
              <GraduationCap className="mr-2 h-5 w-5 text-primary" />
              Bachelor of Software Engineering
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Abbottabad University of Science and Technology
                </span>
              </div>
              <div className="flex items-center">
                <Award className="mr-2 h-4 w-4 text-amber-500" />
                <span className="text-amber-500 font-medium">CGPA: 3.5</span>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-3xl"
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="data"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I specialize in building responsive web applications using HTML,
            CSS, JavaScript, TypeScript, React.js, and Next.js. Over the years,
            I've delivered high-quality solutions with great user experiences
            across all devices. I've also worked on several MERN stack projects
            using Node.js, Express, Nest.js, and MongoDB, giving me a solid
            grasp of both frontend and backend development. Collaborating with
            cross-functional teams has helped me develop the skills to tackle
            challenges effectively and deliver scalable, performance-driven
            applications.{" "}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            ></TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
