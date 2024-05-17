import Link from 'next/link';
import { services, Service } from '../../constants/processData';
import Image from 'next/image';

export default function Services() {
  console.log("services", services);

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
    >
      <div className="flex max-w-[80%] relative lg:bottom-[0rem]">
        <div className="relative mt-[10rem]">
          <h1 className="font-semibold text-white text-[40px] my-[10rem] mb-16 xl:mt-[-16rem]">
            Our Services{' '}
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
            Explore our comprehensive range of services designed to elevate your
            application to new heights.
          </p>
          <div className="">
            <div className="lg:flex">
              {services.map((service: Service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-lg shadow-md p-6 mb-6 mr-6 flex items-center"
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
                  <div className="flex-1">
                    <Link href={`/services/${service.slug}`}>
                      <h3 className="text-lg font-semibold mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </Link>
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