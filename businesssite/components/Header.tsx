"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="pl-0 mx-2 sm:relative sm:left-[8%] md:left-[0%] md:pl-0 pb-56 md:pb-20 flex flex-col gap-5 z-10 max-w-750 lg:relative lg:left-[2.5%] xl:left-[9.5%] 2xl:left-[4%] 3xl:left-[10%] 4xl:left-[19%] 5xl:left-[20%]"
    >
      <motion.h1
        variants={textVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[1.3rem] relative text-center text-white font-semibold md:text-[2.6rem] 2xl:text-[3.5rem] 3xl:text-[4rem]"
      >
        Make anything possible with
        <motion.span
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2.3rem 2xl:text-4rem text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500"
        >
          {' '}
          Web Development{' '}
        </motion.span>
      </motion.h1>

      <motion.p
        variants={textVariants}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center text-base md:text-xl font-bold text-white md:block 2xl:text-[1.5rem] 3xl:text-[2rem]"
      >
        Aspiring to Create web Applications That Excell
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.8 }}
        className="flex md:flex-row relative top-[1.2rem] text-[1.4rem] text-white md:flex justify-evenly sm:text-[2rem] lg:mt-5 lg:text-[2.8rem] 2xl:text-[3rem] 3xl:text-[3.6rem] 3xl:top-[4rem]"
      >
        <motion.div variants={buttonVariants} className="rounded border-2 border-white-500">
          <Link href="/services">
            <h2 className="bg-black bg-opacity-50">Our Process</h2>
          </Link>
        </motion.div>

        <motion.div variants={buttonVariants} className="rounded border-2 border-white-500">
          <Link href="/my-skills">
            <h2 className="bg-black bg-opacity-50">Our Tech</h2>
          </Link>
        </motion.div>

        <motion.div variants={buttonVariants} className="rounded border-2 border-white-500">
          <Link href="/contact-me">
            <h2 className="bg-black bg-opacity-50">Contact Us</h2>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;