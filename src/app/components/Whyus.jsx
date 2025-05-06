"use client";
import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="py-16 mt-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver exceptional results through our commitment to excellence
            and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-black border border-gray-800 rounded-xl p-8 transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-xl h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-gray-700">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const advantages = [
  {
    title: "Latest Technology",
    description:
      "We stay at the forefront of technological advancements to deliver cutting-edge solutions.",
    image:
      "https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp",
  },
  {
    title: "Reasonable Rates",
    description:
      "We offer competitive pricing without compromising on quality or performance.",
    image:
      "https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp",
  },
  {
    title: "Time Efficiency",
    description:
      "We value your time and deliver projects on schedule without sacrificing quality.",
    image:
      "https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp",
  },
  {
    title: "Expertise in Industry",
    description:
      "Our team brings years of specialized experience across various industry domains.",
    image:
      "https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp",
  },
];
