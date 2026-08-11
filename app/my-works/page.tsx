"use client";

import { NextPage } from "next";
import projects from "../utils/projects";
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

const MyWorks: NextPage = ({}) => {
  const [finalProjects, setFinalProjects] = useState(Projects);

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
      <div className="px-5 pt-20 flex flex-col gap-2 md:px-25 lg:px-70 transition-all">
        <span className="font-normal md:font-medium text-3xl md:text-4xl">
          Not just concepts—these are real, shipped products delivering
          real-world results.
        </span>
        <span className="text-[color:var(--color-primary-color)] pt-6 pb-[1rem]">
          Selected projects
        </span>
        <div className="grid md:grid-cols-2 space-y-4 space-x-4">
          {finalProjects.map((project) => {
            return (
              <motion.div
                key={project.id}
                className={`gap-3 flex flex-col transition pb-5 ${
                  project.url == null
                    ? "cursor-not-allowed"
                    : "cursor-pointer hover:scale-95"
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
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default MyWorks;
