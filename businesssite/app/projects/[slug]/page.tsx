"use client";

import { useParams } from "next/navigation";
import { projects, Project } from "../../../constants/projectData";
import { SkillData } from "../../../constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((proj: Project) => proj.slug === slug);

  console.log("project:", project);

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
    <div
      className="min-h-screen flex flex-col justify-center bg-cover bg-center px-4 sm:px-8"
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
    >
      <div className="max-w-[80%] mx-auto pt-40 px-4 sm:px-8">
        <div className="relative mb-32">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="font-semibold text-white text-[40px] mb-4 text-center"
          >
            {project.title}
          </motion.h1>
          <motion.p
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            className="text-white text-[20px] text-center"
          >
            {project.description}
          </motion.p>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
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
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-4xl font-semibold mb-8 text-white">Technologies Used</h2>
          <div className="flex flex-wrap">
            {SkillData.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg mr-4 mb-4 inline-block"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </motion.div>

          <h2 className="text-4xl font-semibold mb-8 text-white">Project Details</h2>
          <p className="text-xl text-gray-300">{project.details}</p>
        </div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-32"
        >
          <h2 className="text-4xl font-semibold mb-8 text-white">Project Goals</h2>
          <p className="text-xl text-gray-300">
            {/* Add project goals description here */}
            The main goals of the {project.title} project were to...
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-32"
        >
          <h2 className="text-4xl font-semibold mb-8 text-white">Key Accomplishments</h2>
          <p className="text-xl text-gray-300">
            Some of the key accomplishments in the {project.title} project were:
            <br />
            - {project.keyProcess}
            <br />
            - ...
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-4xl font-semibold mb-8 text-white">Learnings</h2>
          <p className="text-xl text-gray-300">
            Throughout the development of {project.title}, we gained valuable insights and learnings, including:
            <br />
            - ...
          </p>
        </motion.div>

        
      </div>
    </div>
  );
}