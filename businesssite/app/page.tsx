// Home.tsx
"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Bottom right corner elements (cliff & programmer) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-0 z-10
                   left-[10%] w-[280px] h-[200px]
                   xs:left-[15%] xs:w-[300px] xs:h-[220px]
                   sm:left-[33%] sm:w-[320px] sm:h-[240px]
                   md:left-[42%] md:w-[360px] md:h-[280px]
                   lg:left-[55%] lg:w-[400px] lg:h-[320px]
                   xl:left-[65%] xl:w-[440px] xl:h-[360px]
                   2xl:left-[70%] 2xl:w-[480px] 2xl:h-[400px]"
      >
        <div className="relative w-full h-full">
          <Image src="/cliff.webp" alt="cliff" fill className="object-cover" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute 
                       bottom-[38%] left-[10%] w-[60px] h-[90px]
                       xs:bottom-[35%] xs:left-[8%] xs:w-[70px] xs:h-[100px]
                       sm:bottom-[40%] sm:left-[0%] sm:w-[80px] sm:h-[120px]
                       md:bottom-[38%] md:left-[5%] md:w-[100px] md:h-[140px]
                       lg:bottom-[40%] lg:left-[8%] lg:w-[120px] lg:h-[160px]
                       xl:bottom-[42%] xl:left-[10%] xl:w-[140px] xl:h-[180px]
                       2xl:bottom-[44%] 2xl:left-[12%] 2xl:w-[160px] 2xl:h-[200px]"
          >
            <Image src="/programmerImage.png" fill className="object-contain" alt="programmer" />
          </motion.div>
        </div>
      </motion.div>

      {/* Text element in bottom center */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-9 text-center
                   w-[280px]
                   xs:w-[320px]
                   sm:w-[400px]
                   md:w-[480px]
                   lg:w-[560px]
                   xl:w-[640px]
                   2xl:w-[720px]"
      >
        {/* Add content here */}
      </motion.div>

      {/* Trees image at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 right-0 z-9 w-full
                   h-[120px]
                   xs:h-[140px]
                   sm:h-[180px]
                   md:h-[220px]
                   lg:h-[280px]
                   xl:h-[320px]
                   2xl:h-[360px]"
      >
        <Image src="/trees.webp" alt="trees" fill className="object-cover" />
      </motion.div>

      {/* Stars image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute z-20
                   top-12 left-8 w-[120px] h-[120px]
                   xs:top-14 xs:left-10 xs:w-[140px] xs:h-[140px]
                   sm:top-16 sm:left-12 sm:w-[160px] sm:h-[160px]
                   md:top-18 md:left-14 md:w-[180px] md:h-[180px]
                   lg:top-20 lg:left-20 lg:w-[200px] lg:h-[200px]
                   xl:top-22 xl:left-24 xl:w-[220px] xl:h-[220px]
                   2xl:top-24 2xl:left-28 2xl:w-[240px] 2xl:h-[240px]"
      >
        <Image src="/stars.png" alt="stars" fill className="object-contain" />
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