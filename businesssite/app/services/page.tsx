"use client";

import Link from 'next/link';
import { services, Service } from '../../constants/processData';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Services() {
  console.log("services", services);

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
    >
      <div className="max-w-[80%] relative">
        <div className="relative mt-[10rem] mb-16">
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div>
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-semibold text-white text-[40px] mb-4 text-center md:text-left"
              >
                Our Services{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                  for Your Application
                </span>
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-white text-[20px] text-center md:text-left"
              >
                Explore our comprehensive range of services designed to elevate
                your application to new heights.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-center">
          {services.map((service: Service, index: number) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-white rounded-lg shadow-md p-6 mb-6 mr-6 flex items-center max-w-[350px]"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                <Image
                  src={service.imageUrl}
                  alt={service.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <Link href={`/services/${service.slug}`}>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.name}
                  </h3>
                  <p className="text-black">{service.description}</p>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}