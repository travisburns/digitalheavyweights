import InfoCard from "@/components/InfoCard";
import Image from "next/image";

const Page2 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className="flex max-w-[80%] relative  lg:bottom-[0rem]">
        <div className="relative mt-[10rem]">
          <h1 className="font-semibold text-white text-[40px] my-[10rem] mb-16  xl:mt-[-16rem]">
            Initiating the Consultation for Your Project{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              with Our Experts
            </span>
          </h1>
          <Image
            src="/consultationIcon.png"
            alt='consultation icon'
            height={300}
            width={300}
            className='absolute top-[7rem] left-[10rem]'
          />
          <p className="text-gray-400 text-[20px] mb-16">
            Welcome to the initial consultation phase of your project! This stage marks the beginning of our collaboration and sets the foundation for success. Here's what we'll discuss:
          </p>
    
          <div className="">
            <div className="lg:flex">
              <InfoCard 
                title="Understanding Your Needs"
                description="We'll delve into your project requirements, goals, and expectations to ensure alignment with our services."
                imageSrc="/meet.png"
                number={1}
              />OI
              <InfoCard 
                title="Assessing Feasibility"
                description="Our experts will evaluate the feasibility of your project, considering technical requirements, timeline, and resources."
                imageSrc="/research.png"
                number={2}
              />
              <InfoCard 
                title="Establishing Roadmap"
                description="Together, we'll outline a clear roadmap and action plan, detailing the steps needed to bring your project to fruition."
                imageSrc="/roadmap.png"
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