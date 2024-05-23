"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.1, // Adjust the delay factor as needed
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="min-h-screen w-screen flex flex-col items-center bg-cover bg-center py-20 px-4 sm:px-8"
    >
      <div className="flex flex-col gap-16 max-w-[1200px] w-full text-center items-center px-4 sm:px-8 mt-20">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-white text-5xl">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              &
            </span>{" "}
            Technologies
          </h1>
          <p className="text-gray-300 text-xl max-w-[800px]">
            We strive for professionalism by using the latest technologies for your web application.
          </p>
        </div>
        <div className="w-full">
          <Swiper
            slidesPerView={5}
            spaceBetween={40}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-full"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={5}
            spaceBetween={40}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-full mt-8"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 w-full">
          <AnimatePresence>
            {SkillData.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 sm:p-8 flex items-center transition duration-300"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                custom={index} // Pass the index as a custom prop
              >
                <div className="w-1/3">
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                </div>
                <div className="w-2/3 pl-6 sm:pl-8">
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-4">{skill.name}</h2>
                  <p className="text-gray-600 text-base sm:text-lg">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Page;