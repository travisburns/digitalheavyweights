'use client';

import { useParams } from 'next/navigation';
import { services, Service } from '../../../constants/processData';
import Image from 'next/image';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((s: Service) => s.slug === slug);

  console.log("service:", service);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
    >
      <div className="flex max-w-[80%] relative lg:bottom-[0rem]">
        <div className="relative mt-[10rem]">
          <h1 className="font-semibold text-white text-[40px] my-[10rem] mb-16 xl:mt-[-16rem]">
            {service.name}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              for Your Application
            </span>
          </h1>
          <Image
            src="/backendIcon.png"
            alt="backend icon"
            height={300}
            width={300}
            className="absolute top-[7rem] left-[10rem]"
          />
          <p className="text-gray-400 text-[20px] mb-16">
            {service.description}
          </p>
          <div className="">
            <div className="lg:flex">
              {service.steps.map((step, index) => (
                <div
                  key={index}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}