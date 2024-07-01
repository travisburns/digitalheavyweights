// Home.tsx
"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-screen min-h-screen relative overflow-hidden">
      {/* Bottom right corner elements (cliff & programmer) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-0 left-[10%] z-10 w-full sm:left-[33%] md:left-[42%] lg:left-[55%] xl:left-[65%] 2xl:left-[70%] 3xl:left-[75%]"
      >
        <div className="relative w-full h-[300px] sm:w-[500px] sm:h-[400px]">
          <Image src="/cliff.webp" alt="cliff" layout="fill" objectFit="cover" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-[38%] left-[10%] w-[100px] h-[150px] sm:bottom-[20%] sm:left-[0%] sm:bottom-[40%] sm:w-[150px] sm:h-[200px] lg:w-[200px] lg:h-[250px]"
          >
            <Image src="/programmerImage.png" layout="fill" objectFit="contain" alt="programmer" />
          </motion.div>
        </div>
      </motion.div>

      {/* Text element in bottom center */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-0 mx-auto text-center z-9"
      >
        {/* Add content here */}
      </motion.div>

      {/* Trees image at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 right-0 z-9 w-full h-[200px] sm:h-[300px] lg:h-[400px]"
      >
        <Image src="/trees.webp" alt="trees" layout="fill" objectFit="cover" />
      </motion.div>

      {/* Stars image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute top-20 left-20 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
      >
        <Image src="/stars.png" alt="stars" layout="fill" objectFit="contain" />
      </motion.div>

      <div
        className="flex items-center w-full min-h-screen bg-cover bg-center bg-no-repeat fixed"
        style={{ backgroundImage: "url(/bg-4.png)", backgroundSize: "cover" }}
      >
        <Header />
      </div>
    </div>
  );
}