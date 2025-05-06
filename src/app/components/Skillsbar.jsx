"use client";
import { useState } from "react";

export default function CircularSkillsChart() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "HTML5", percentage: 97, color: "#E44D26" },
    { name: "CSS3", percentage: 98, color: "#264DE4" },
    { name: "ReactJS", percentage: 95, color: "#61DAFB" },
    { name: "TypeScript", percentage: 92, color: "#3178C6" },
    { name: "JavaScript", percentage: 94, color: "#F7DF1E" },
    { name: "TailwindCSS", percentage: 94, color: "#06B6D4" },
    { name: "NextJS", percentage: 90, color: "#000000" },
    { name: "NodeJS", percentage: 88, color: "#339933" },
    { name: "NestJS", percentage: 85, color: "#E0234E" },
    { name: "MongoDB", percentage: 86, color: "#47A248" },
  ];

  // Calculate positions in a circle
  const centerX = 250;
  const centerY = 250;
  const radius = 180;

  return (
    <div id="skills" className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-12 mt-16">
      <div className="w-full max-w-4xl px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
          Technical Skills
        </h2>

        <div className="relative w-full flex flex-col items-center">
          {/* Main Circle Container */}
          <div className="relative w-full max-w-lg aspect-square">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              {/* Background circle */}
              <circle
                cx={centerX}
                cy={centerY}
                r={radius + 30}
                fill="#1e1e1e"
              />

              {/* Inner circle with gradient */}
              <circle
                cx={centerX}
                cy={centerY}
                r={radius - 70}
                fill="url(#gradientBg)"
              />

              {/* Define gradient */}
              <defs>
                <radialGradient
                  id="gradientBg"
                  cx="50%"
                  cy="50%"
                  r="50%"
                  fx="50%"
                  fy="50%"
                >
                  <stop offset="0%" stopColor="#2d3748" />
                  <stop offset="100%" stopColor="#1a202c" />
                </radialGradient>
              </defs>

              {/* Skill arcs */}
              {skills.map((skill, index) => {
                const angle = (index * 360) / skills.length;
                const isHovered = hoveredSkill === index;

                // Calculate arc path
                const startAngle = angle - 16;
                const endAngle = angle + 16;
                const arcRadius = isHovered ? radius + 5 : radius;

                const startRad = (startAngle - 90) * (Math.PI / 180);
                const endRad = (endAngle - 90) * (Math.PI / 180);

                const x1 = centerX + arcRadius * Math.cos(startRad);
                const y1 = centerY + arcRadius * Math.sin(startRad);
                const x2 = centerX + arcRadius * Math.cos(endRad);
                const y2 = centerY + arcRadius * Math.sin(endRad);

                // Calculate percentage arc
                const percentageRadius = isHovered
                  ? radius - 30 + (skill.percentage / 100) * 30
                  : radius - 40 + (skill.percentage / 100) * 40;

                const px1 = centerX + percentageRadius * Math.cos(startRad);
                const py1 = centerY + percentageRadius * Math.sin(startRad);
                const px2 = centerX + percentageRadius * Math.cos(endRad);
                const py2 = centerY + percentageRadius * Math.sin(endRad);

                // Text positioning
                const labelRadius = isHovered ? radius + 25 : radius + 15;
                const textX =
                  centerX +
                  labelRadius * Math.cos((angle - 90) * (Math.PI / 180));
                const textY =
                  centerY +
                  labelRadius * Math.sin((angle - 90) * (Math.PI / 180));

                // Percentage positioning
                const percentageX =
                  centerX +
                  (radius - 55) * Math.cos((angle - 90) * (Math.PI / 180));
                const percentageY =
                  centerY +
                  (radius - 55) * Math.sin((angle - 90) * (Math.PI / 180));

                return (
                  <g
                    key={index}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="cursor-pointer transition-all duration-300 ease-in-out"
                  >
                    {/* Background arc */}
                    <path
                      d={`M ${x1} ${y1} A ${arcRadius} ${arcRadius} 0 0 1 ${x2} ${y2}`}
                      stroke="#2d3748"
                      strokeWidth="10"
                      fill="none"
                    />

                    {/* Percentage arc */}
                    <path
                      d={`M ${px1} ${py1} A ${percentageRadius} ${percentageRadius} 0 0 1 ${px2} ${py2}`}
                      stroke={skill.color}
                      strokeWidth={isHovered ? "16" : "12"}
                      fill="none"
                      className="transition-all duration-300"
                    />

                    {/* Skill label */}
                    <text
                      x={textX}
                      y={textY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize={isHovered ? "14" : "12"}
                      fontWeight={isHovered ? "bold" : "normal"}
                      className="transition-all duration-300"
                    >
                      {skill.name}
                    </text>

                    {/* Percentage */}
                    <text
                      x={percentageX}
                      y={percentageY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={isHovered ? skill.color : "white"}
                      fontSize={isHovered ? "16" : "14"}
                      fontWeight="bold"
                      className="transition-all duration-300"
                    >
                      {skill.percentage}%
                    </text>
                  </g>
                );
              })}

              {/* Center text */}
              <text
                x={centerX}
                y={centerY - 10}
                textAnchor="middle"
                fill="white"
                fontSize="18"
                fontWeight="bold"
              >
                Technical
              </text>
              <text
                x={centerX}
                y={centerY + 20}
                textAnchor="middle"
                fill="white"
                fontSize="18"
                fontWeight="bold"
              >
                Proficiency
              </text>
            </svg>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
                <span className="text-sm text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
