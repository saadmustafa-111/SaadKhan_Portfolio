import { Code, Smartphone, Palette } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-12 mt-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Services We Provide
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Professional solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 flex flex-col h-full border border-gray-800"
            >
              <div className="flex-grow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {service.name}
                  </h3>
                </div>
                <p className="mt-4 text-gray-400">{service.description}</p>

                <ul className="mt-6 space-y-4 text-gray-400">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className="mt-8 p-4 block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                {service.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    name: "Web Application Development",
    description: "Custom web applications built with cutting-edge technologies",
    icon: <Code className="h-6 w-6 text-white" />,
    features: [
      "Full-stack development",
      "Responsive & interactive UIs",
      "Database integration",
      "API development",
      "Cloud deployment",
    ],
    buttonText: "Learn More",
  },
  {
    name: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
    icon: <Smartphone className="h-6 w-6 text-white" />,
    features: [
      "iOS & Android development",
      "Cross-platform solutions",
      "Push notifications",
      "Offline functionality",
      "App store submission",
    ],
    buttonText: "Learn More",
  },
  {
    name: "UI/UX Design",
    description:
      "User-centered design that enhances user experience and engagement",
    icon: <Palette className="h-6 w-6 text-white" />,
    features: [
      "User research & testing",
      "Wireframing & prototyping",
      "Visual design",
      "Interaction design",
      "Design systems",
    ],
    buttonText: "Learn More",
  },
];

export default ServicesSection;
