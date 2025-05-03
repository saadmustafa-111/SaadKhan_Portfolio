"use client";
import dynamic from "next/dynamic";
import { Briefcase, Users, Clock } from "lucide-react";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
    icon: <Briefcase className="h-6 w-6 mb-3 text-primary" />,
  },
  {
    prefix: "~",
    metric: "Clients",
    value: "10",
    postfix: "+",
    icon: <Users className="h-6 w-6 mb-3 text-primary" />,
  },
  {
    metric: "Experience Years",
    value: "1.5",
    postfix: "+",
    icon: <Clock className="h-6 w-6 mb-3 text-primary" />,
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-12 px-4 xl:gap-16 sm:py-20 xl:px-16">
      <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-[#33353F] border rounded-xl shadow-xl py-10 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/30 hover:scale-105"
              >
                {achievement.icon}
                <h2 className="text-white text-4xl font-bold flex flex-row items-baseline">
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={Number.parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  <span className="text-primary font-bold">
                    {achievement.postfix}
                  </span>
                </h2>
                <p className="text-[#ADB7BE] text-base mt-2 font-medium tracking-wide uppercase text-sm">
                  {achievement.metric}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
