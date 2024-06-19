"use client";

import { useParams } from "next/navigation";
import { projects, Project } from "../../../constants/projectData";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((proj: Project) => proj.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col justify-center bg-cover bg-center px-4 sm:px-8"
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
    >
      <div className="max-w-[80%] mx-auto pt-40 px-4 sm:px-8">
        <div className="relative mb-32">
          <motion.h1
            variants={titleVariants}
            className="font-semibold text-white text-4xl md:text-5xl mb-4 text-center"
          >
            {project.title}
          </motion.h1>
          <motion.p
            variants={descriptionVariants}
            className="text-white text-xl md:text-2xl text-center"
          >
            {project.description}
          </motion.p>
          <motion.div
            variants={imageVariants}
            className="mb-32 flex justify-center"
          >
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={1200}
              height={800}
              className="rounded-lg"
            />
          </motion.div>

          
          <motion.div
            variants={sectionVariants}
            className="mb-32"
          >

<motion.div
  variants={sectionVariants}
  className="mb-32"
>
  <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">GitHub Repository</h2>
  <p className="text-white">
              Github Link: <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white underline">{project.githubLink}</a>
            </p>
</motion.div>




          
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Technologies Used</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-wrap gap-2 bg-gray-900 text-white p-6 rounded-lg shadow-xl">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 rounded px-3 py-1 text-sm font-medium transition hover:bg-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">Project Details</h2>
          <p className="text-lg md:text-xl text-gray-300">{project.details}</p>
        </div>

        <motion.div
          variants={sectionVariants}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">Project Goals</h2>
          <ul className="text-lg md:text-xl text-gray-300 space-y-4">
            <li>- {project.goals1}</li>
            <li>- {project.goals2}</li>
            <li>- {project.goals3}</li>
            <li>- {project.goals4}</li>
            <li>- {project.goals5}</li>
            <li>- {project.goals6}</li>
          </ul>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">Key Accomplishments</h2>
          <ul className="text-lg md:text-xl text-gray-300 space-y-4">
            <li>- {project.keyProcess}</li>
            <li>- {project.keyProcess2}</li>
            <li>- {project.keyProcess3}</li>
          </ul>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">Learnings</h2>
          <ul className="text-lg md:text-xl text-gray-300 space-y-4">
            {project.projectLearnings.map((learning, index) => (
              <li key={index}>
                <span className="hover:bg-gray-700">{learning}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}