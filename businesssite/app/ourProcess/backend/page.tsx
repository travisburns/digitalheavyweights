import InfoCard from "@/components/InfoCard";
import Image from "next/image";

const Page2 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className="flex max-w-[80%] relative  lg:bottom-[0rem]">
        <div className="relative mt-[10rem]">
          <h1 className="font-semibold text-white text-[40px] my-[10rem] mb-16  xl:mt-[-16rem]">
            Initiating Backend Development{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              for Your Application
            </span>
          </h1>
          <Image
            src="/backendIcon.png"
            alt='backend icon'
            height={300}
            width={300}
            className='absolute top-[7rem] left-[10rem]'
          />
          <p className="text-gray-400 text-[20px] mb-16">
            Welcome to the backend development phase of your application! This stage focuses on building the server-side components, APIs, and databases. Here's what we'll work on:
          </p>
    
          <div className="">
            <div className="lg:flex">
              <InfoCard 
                title="API Development"
                description="We'll design and implement RESTful or GraphQL APIs to facilitate communication between the front end and back end, ensuring efficient data exchange."
                imageSrc="/api.png"
                number={1}
              />
              <InfoCard 
                title="Database Design"
                description="Our team will create and optimize the database schema to store and manage your application's data effectively, ensuring scalability and performance."
                imageSrc="/database.png"
                number={2}
              />
              <InfoCard 
                title="Server Configuration"
                description="We'll set up and configure the server environment, including deployment, monitoring, and maintenance, to ensure smooth operation of your application."
                imageSrc="/server.png"
                number={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;