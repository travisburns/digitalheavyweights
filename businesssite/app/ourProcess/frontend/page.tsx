import InfoCard from "@/components/InfoCard";
import Image from "next/image";

const Page2 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className="flex max-w-[80%] relative  lg:bottom-[0rem]">
        <div className="relative mt-[10rem]">
          <h1 className="font-semibold text-white text-[40px] my-[10rem] mb-16  xl:mt-[-16rem]">
            Beginning Front-End Development{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              of Your Project
            </span>
          </h1>
          <Image
            src="/frontendIcon.png"
            alt='frontend icon'
            height={300}
            width={300}
            className='absolute top-[7rem] left-[10rem]'
          />
          <p className="text-gray-400 text-[20px] mb-16">
            Welcome to the front-end development phase of your project! This stage is where we start building interactive and user-friendly interfaces. Here's what we'll focus on:
          </p>
    
          <div className="">
            <div className="lg:flex">
              <InfoCard 
                title="Component Development"
                description="We'll create reusable React components to build the structure and functionality of your application, ensuring scalability and maintainability."
                imageSrc="/components.png"
                number={1}
              />
              <InfoCard 
                title="Styling & Theming"
                description="Our team will apply CSS styles and implement design themes to enhance the visual appeal and consistency of your application across different devices."
                imageSrc="/styling.png"
                number={2}
              />
              <InfoCard 
                title="Optimization"
                description="We'll optimize the performance of your front-end code, focusing on load times, responsiveness, and overall user experience."
                imageSrc="/optimization.png"
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