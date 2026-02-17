import React, { useState } from "react";
import { motion } from "motion/react";

const WorkSections = () => {
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    window.open("https://studysync-ten-gilt.vercel.app/");
  };
  const handleResume = () => {
    window.open("https://resume-builder-ai30.vercel.app/");
  };
  const handleTracker = () => {
    window.open("https://tracker-sepia-eight.vercel.app/");
  };
  const handleShopping = () => {
    window.open("https://shopping-website-sepia-nine.vercel.app/");
  };

  const projects = [
    {
      title: "Shopping Website (Frontend)",
      desc: "E-commerce UI with product listing, filters, and cart features",
      tech: ["React", "Tailwind CSS", "Axios"],
      link: handleShopping,
    },
    {
      title: "StudySync (Full-Stack)",
      desc: "Note platform with auth, uploads, likes, comments",
      tech: ["React", "Multer", "Express", "MongoDB"],
      link: handleClick,
    },
    {
      title: "Expense Tracker (Frontend)",
      desc: "Track expenses with charts and analytics",
      tech: ["React", "CSS", "Chart.js"],
      link: handleTracker,
    },
    {
      title: "AI Resume Builder (Full-Stack)",
      desc: "AI resume editor with templates",
      tech: ["React", "Node", "Express", "MongoDB", "OpenAI API"],
      link: handleResume,
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div className="flex flex-col gap-8">
      <div
        className="heading text-2xl sm:text-4xl md:text-5xl font-serif font-bold"
      >
        Selected Work
      </div>
      {visibleProjects.map((project, index) => (
        <motion.div
          whileHover={{ scale: 0.98, y: 1 }}
          className="website bg-white p-8 rounded-xl flex flex-col gap-5"
        >
          <div className="websiteHeading flex justify-between">
            <div className="heading text-xl sm:text-2xl font-serif">
              {project.title}
            </div>
            <motion.div
              whileHover={{ scale: 1.5, y: 5 }}
              className="icon"
              onClick={project.link}
            >
              <i class="bi bi-arrow-up-right cursor-pointer"></i>
            </motion.div>
          </div>
          <div className="para text-gray-500 sm:text-xl">{project.desc}</div>
          <div className="techCards grid grid-cols-2 sm:grid-cols-4 lg:w-2/3 gap-4 text-base md:text-xl text-center">
            {project.tech.map((tech, i) => (
              <div key={i} className="px-3 py-1 bg-slate-200 rounded-full">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 bg-black text-white rounded-full hover:opacity-90 transition"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default WorkSections;
