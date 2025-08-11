import React, { useState } from "react";
import { FaFolderOpen } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

const projectFiles = [
  {
    title: "Todo with React Native",
    description:
      "Designed and developed a mobile-first to-do list application focused on user experience, task management, and interactive UI, built with scalability for full-stack integration.",
    link: "https://github.com/GoldnRamen/Native_Crud"

  },
  {
    title: "CoffeeShop with React Native",
    description:
      "Designed and developed a mobile-first coffee shop application focused on smooth user experience, visually appealing UI, and futureready architecture for full-stack scalability.",
    link: "https://github.com/GoldnRamen/Native_CoffeeShop",
  },
  {
    title: "StoreFront",
    description:
      "Built a fully functional e-commerce store application for a local poultry with dynamic product browsing and a seamless shopping experience.",
    link: " https://github.com/GoldnRamen/StoreFront",
  },
  {
    title: "SunnyFresh Laundry",
    description:
      "Developed a responsive web application for booking and managing laundry and dry cleaning services online, tailored to user convenience and business efficiency",
    link: "https://github.com/GoldnRamen/SunnyFresh",
  },
  {
    title: "Bose Clone",
    description:
      "Recreated the homepage and key sections of the official Bose website with a focus on responsive layout, clean design, and interactive elements.",
    link: "https://github.com/GoldnRamen/Bose_Home"
  },
  {
    title: "Blissworld Clone",
    description:
      "Developed a full-stack e-commerce clone inspired by Blissworld, focusing on beauty product listings, dynamic routing, and user interaction from front to back.",
    link: "https://github.com/GoldnRamen/BlissWorld"
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleProject = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="lg:p-7 p-3 relative m-2 h-[95vh]">
        <div className="opacity-10"></div>
        <h1 className="text-3xl font-bold mt-[10vh] mb-6 text-center text-gray-800">
          My Projects
        </h1>
      <div className="sticky mt-[5vh] p-4 text-black h-[68vh] overflow-y-scroll overflow-x-hidden">
        <div className="space-y-2 mt-5">
          {projectFiles.map((project, index) => (
            <div key={index} className="p-4 relative">
              <div className="bg-gradient-to-br from-gray-950 to-cyan-800 h-full w-full p-3 rounded-lg">
                <button
                    onClick={() => toggleProject(index)}
                    className="text-xl cursor-pointer flex items-center gap-3 font-semibold text-gray-300 w-full text-left hover:underline"
                >
                    <FaFolderOpen />{project.title}
                </button>
                {activeIndex === index && (
                    <div className="mt-2 text-gray-300">
                    <p>{project.description}</p>
                    <div className="text-sm flex items-center gap-2">
                        <a
                            href={project.link}
                            className="text-blue-600 hover:underline cursor-pointer block mt-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                        <FaLink/>
                    </div>
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
