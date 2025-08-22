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
    icon: <Briefcase className="h-8 w-8 mb-4 text-blue-400" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10",
  },
  {
    prefix: "~",
    metric: "Clients",
    value: "10",
    postfix: "+",
    icon: <Users className="h-8 w-8 mb-4 text-emerald-400" />,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500/10",
  },
  {
    metric: "Experience Years",
    value: "1.5",
    postfix: "+",
    icon: <Clock className="h-8 w-8 mb-4 text-amber-400" />,
    gradient: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500/10",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-16 px-4 xl:gap-16 sm:py-24 xl:px-16">
      <div className="relative bg-gradient-to-br from-slate-800/60 via-slate-900/40 to-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl py-12 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-emerald-500/5"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Delivering exceptional results through dedication and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
          {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className={`group relative flex flex-col items-center justify-center p-8 rounded-xl bg-gradient-to-br ${achievement.gradient} border border-slate-700/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-slate-600/50 backdrop-blur-sm`}
              >
                <div
                  className={`${achievement.iconBg} p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {achievement.icon}
                </div>

                <h2 className="text-white text-5xl font-bold flex flex-row items-baseline mb-3 group-hover:text-white transition-colors duration-300">
                  {achievement.prefix && (
                    <span className="text-slate-300 text-3xl mr-1">
                      {achievement.prefix}
                    </span>
                  )}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={Number.parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-5xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-bold ml-1">
                    {achievement.postfix}
                  </span>
                </h2>

                <p className="text-slate-300 text-base font-semibold tracking-wider uppercase text-center leading-tight">
                  {achievement.metric}
                </p>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-16 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
