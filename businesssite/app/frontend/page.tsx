import InfoCard from "@/components/InfoCard";
import Image from "next/image";

const Page3 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className="flex max-w-[80%] relative bottom-[10rem]">
        <div className="">
          <h1 className="font-semibold text-white text-[40px]">
            Creating the Front End{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              of the Website
            </span>
          </h1>
          <Image
            src="/programmingIcon.png"
            alt='programming icon'
            height={300}
            width={300}
            className='absolute top-[7rem] left-[10rem]'
          />
          <p className="text-gray-400 text-[20px]">
            Welcome to the front end development phase! This is where we bring your website to life using React and JSX. Here's what we'll be doing:
          </p>
    
          <div className="">
            <div className="lg:flex">
              <InfoCard 
                title="Component Development"
                description="We'll create reusable components using React, ensuring a modular and maintainable codebase."
                imageSrc="/components.png"
                number={1}
              />
              <InfoCard 
                title="Responsive Design"
                description="Our team will ensure your website looks great and functions smoothly across various devices and screen sizes."
                imageSrc="/responsive.png"
                number={2}
              />
              <InfoCard 
                title="Interactivity"
                description="We'll add interactive elements such as animations, transitions, and user-friendly features to enhance the user experience. (depending on complexity, can integrate 3D animation's)"
                imageSrc="/interactivityIcon.png"
                number={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;