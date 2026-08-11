"use client";

import { NextPage } from "next";
import projects, { projectCategories } from "../utils/projects";
import TopArrowIcon from "../assets/images/top-arrow.svg";
import CloseIcon from "../assets/images/close.svg";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/footer";
import Image from "next/image";

const Projects = projects.map((project) => {
  return { expanded: false, ...project };
});

const filters = ["All", ...projectCategories] as const;

const MyWorks: NextPage = ({}) => {
  const [finalProjects, setFinalProjects] = useState(Projects);
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const visibleProjects =
    activeFilter === "All"
      ? finalProjects
      : finalProjects.filter((project) =>
          project.categories.includes(activeFilter),
        );

  const handleExpandsion = (project: {
    id: number;
    name: string;
    role: string;
    technologies: string;
    image: StaticImageData;
    description: string;
    expanded: boolean;
  }) => {
    setFinalProjects((projects) =>
      projects.map((p) =>
        p.id === project.id ? { ...p, expanded: !p.expanded } : p,
      ),
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="px-5 md:pt-20 flex flex-col gap-2 md:px-25 lg:px-70 transition-all">
        <span className="font-normal md:font-medium text-3xl md:text-4xl">
          Not just concepts—these are real, shipped products delivering
          real-world results.
        </span>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 pt-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-[Inter] text-[13px] md:text-[14px] rounded-full px-4 py-1.5 border cursor-pointer transition-colors duration-300 ${
                activeFilter === filter
                  ? "bg-[color:var(--color-primary-color)] border-[color:var(--color-primary-color)] text-white"
                  : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-black"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <span className="text-[color:var(--color-primary-color)] pt-6 pb-[1rem]">
          Featured projects
        </span>
        <div className="grid md:grid-cols-2 space-y-4 space-x-4">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => {
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.35, delay: index * 0.07 },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.94,
                    transition: { duration: 0.18 },
                  }}
                  transition={{
                    layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  }}
                  whileHover={project.url == null ? undefined : { scale: 0.97 }}
                  className={`gap-3 flex flex-col pb-5 w-full md:w-auto ${
                    project.url == null
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  <a
                    className={`${
                      project.url == null
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    href={project.url == null ? "#" : project.url}
                    target={project.url ? "_blank" : undefined}
                    rel={project.url ? "noopener noreferrer" : undefined}
                  >
                    <Image
                      alt={project.name}
                      width={project.image.width}
                      height={project.image.height}
                      src={project.image.src}
                    />
                    <div className="flex justify-between items-start pt-4">
                      <span className="text-2xl pr-4">{project.name}</span>
                      <Image
                        src={TopArrowIcon.src}
                        className="mt-3"
                        alt="Top Arrow"
                        width={TopArrowIcon.width}
                        height={TopArrowIcon.height}
                      />
                    </div>
                  </a>
                  <span
                    onClick={() => handleExpandsion(project)}
                    className="font-[Inter] text-gray-500 cursor-pointer flex gap-2"
                  >
                    <span>More Info</span>
                    {project.expanded ? (
                      <Image
                        alt="close"
                        width={CloseIcon.width + 2.5}
                        height={CloseIcon.height + 2.5}
                        className="pl-0.5"
                        src={CloseIcon.src}
                      />
                    ) : (
                      <span>+</span>
                    )}
                  </span>
                  <AnimatePresence mode="wait">
                    {project.expanded && (
                      <motion.div
                        key="expand"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.15, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-2 font-[Inter] space-x-1 text-[color:var(--color-primary-color)]">
                          <span>Role: {project.role}</span>
                          <span>Tech: {project.technologies}</span>
                        </div>
                        <span className="font-[Inter] text-gray-600 font-light">
                          {project.description}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default MyWorks;
