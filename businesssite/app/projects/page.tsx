"use client";

import Link from 'next/link';
import { projects, Project } from '../../constants/projectData';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Projects() {
  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
    >
      <div className="w-full max-w-[80%] relative mt-[10rem] mb-[10rem] flex-grow">
        <div className="relative mb-16">
          <div className="flex flex-col items-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-semibold text-white text-[40px] mb-4 text-center"
            >
              Our Projects{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                for Your Application
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white text-[20px] text-center"
            >
              Explore our comprehensive range of projects designed to showcase our skills.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={project.slug}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="relative mb-16 w-full max-w-[1200px]"
            >
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-0 right-0 bg-black p-4 rounded-tr-lg">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-white">View More</p>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}