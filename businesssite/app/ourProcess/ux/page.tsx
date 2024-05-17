import InfoCard from "@/components/InfoCard";
import Image from "next/image";

const Page2 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className="flex max-w-[80%] relative  lg:bottom-[0rem]">
        <div className="relative mt-[10rem]">
          <h1 className="font-semibold text-white text-[40px] my-[10rem] mb-16  xl:mt-[-16rem]">
            Designing the UI/UX{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              of Website
            </span>
          </h1>
          <Image
            src="/designIcon.png"
            alt='design icon'
            height={300}
            width={300}
            className='absolute top-[7rem] left-[10rem]'
          />
          <p className="text-gray-400 text-[20px] mb-16">
            Welcome to the UI/UX design stage of your website! This phase is crucial for creating a visually appealing and user-friendly interface. Here's what we'll cover:
          </p>
    
          <div className="">
            <div className="lg:flex">
              <InfoCard 
                title="User Research"
                description="We'll conduct thorough user research to understand your target audience, their needs, preferences, and behavior."
                imageSrc="/research.png"
                number={1}
              />
              <InfoCard 
                title="Wireframing"
                description="Our team will create wireframes to outline the layout, structure, and functionality of each page, focusing on usability and user flow."
                imageSrc="/wireframe.png"
                number={2}
              />
              <InfoCard 
                title="Visual Design"
                description="We'll work on the visual aspects of your website, including color schemes, typography, imagery, and overall aesthetics."
                imageSrc="/visual.png"
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