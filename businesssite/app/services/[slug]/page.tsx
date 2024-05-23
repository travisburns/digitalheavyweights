'use client';

import { useParams } from 'next/navigation';
import { services, Service } from '../../../constants/processData';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((s: Service) => s.slug === slug);

  console.log("service:", service);

  if (!service) {
    return <div>Service not found</div>;
  }

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
    >
      <div className="flex max-w-[80%] relative lg:bottom-[0rem]">
        <div className="relative">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-white text-[40px] my-[10rem] mb-16 xl:mt-[-16rem]"
          >
            {service.name}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              for Your Application
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-[20px] mb-16"
          >
            {service.description}
          </motion.p>

          <div className="">
            <div className="lg:flex">
              {service.steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                  className="bg-white rounded-lg shadow-md p-6 mb-6 mr-6 flex items-center"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                    <Image
                      src={step.imageUrl}
                      alt={step.title}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}