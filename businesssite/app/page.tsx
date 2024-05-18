"use client";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-screen h-screen relative"
    >
      {/* Bottom right corner elements (horse & cliff) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-0 right-0 z-10"
      >
        <div className="absolute bottom-0 right-0 z-9">
          <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            className="relative bottom-[11rem]"
            src="/horse.png"
            alt="horse"
            height={300}
            width={300}
          />
        </motion.div>
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
        className="absolute bottom-0 right-0 z-9"
      >
        <Image
          src="/trees.webp"
          alt="trees"
          width={4000}
          height={4000}
          className="fixed bottom-0"
        />
      </motion.div>

      {/* Stars image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Image
          src="/stars.png"
          alt="stars"
          height={300}
          width={300}
          className="absolute top-20 left-20"
        />
      </motion.div>

      <div
        className="flex items-center w-full h-full bg-cover bg-center fixed"
        style={{ backgroundImage: "url(/bg-4.png)" }}
      >
        <Header />
      </div>
    </div>
  );
}