export default function Skillsbar() {
  const skills = [
    { name: "Html", percentage: 97, color: "#FF6464" },
    { name: "Css", percentage: 95, color: "#9272D4" },
    { name: "React", percentage: 85, color: "#5185D4" },
    { name: "Tailwind CSS", percentage: 90, color: "#CA56F2" },
    { name: "TypeScript", percentage: 92, color: "#0000CC" },
  ];

  return (
    <>
      <div className="h-[450px] flex justify-end items-center bg-[#121212] dark:bg-gray-800 px-10">
        <div className="flex justify-start items-center h-[500px] w-[500px] mr-28 mt-20">
          <img src="/images/skill.avif" alt="" />
        </div>
        <div className="max-w-xl w-full">
          <h4 className="text-3xl md:text-5xl font-bold mb-10 text-white">
            Skills
          </h4>
          {skills.map((skill, index) => (
            <div key={index} className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base font-semibold text-gray-700 dark:text-gray-400">
                  {skill.name}
                </span>
                <span className="text-base font-semibold text-gray-700 dark:text-gray-400">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${skill.percentage}%`,
                    backgroundColor: skill.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
