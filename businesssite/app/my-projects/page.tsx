"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../../constants/projectData';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div
      style={{ backgroundImage: 'url(/mountains.jpg)' }}
      className="w-screen min-h-screen bg-center bg-cover flex flex-col justify-center py-20" 
    >
      <div className="container mx-auto px-4 py-16">
        <AnimatePresence>
          <motion.div
            className="space-y-8"
            initial="initial"
            animate="animate"
            exit="initial"
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {projects.map((project: Project, index: number) => (
              <motion.div key={index} variants={cardVariants} initial="initial" animate="animate">
                <Link href={`/projects/${project.slug}`}>
                  <div className="mb-1 relative left-[12%] w-[80%] bg-slate-950 ">
                    <div className="flex flex-col justify-between">
                      <div className="sm:w-[100%] 2xl:text-[2.5rem]">
                        <Image alt="" width={100} height={100} src={project.imageSrc} layout="responsive" />
                        <div className="lg:relative lg:left-[80%] lg:bg-black lg:w-[25%] lg:bottom-[4rem] 2xl:bottom-[8rem]">
                          <h5 className="mb-0 text-[1.5rem] font-bold tracking-tight text-white dark:text-white 2xl:text-[2rem]">
                            {project.title}
                          </h5>
                          <button className="text-white bg-black w-[43%] relative left-[29%] bottom-[4.8rem] lg:left-[0%] lg:w-[50%] lg:bottom-[0rem] xl:w-[40%] 2xl:w-[100%] mt-[1rem]">
                            View More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Page;