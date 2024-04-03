import InfoCard from "@/components/InfoCard";
import Image from "next/image";

const Page1 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className="flex max-w-[80%] relative bottom-[10rem]">
        <div className="">
          <h1 className="font-semibold text-white text-[40px]">
            30 Minute{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Consultation Call
            </span>
          </h1>
          <Image
            src="/stars.png"
            alt='stars'
            height={300}
            width={300}
            className='absolute top-[7rem] left-[10rem]'
          />
          <p className="text-gray-400 text-[20px]">
            Welcome to our 30-minute consultation call! During this session, we aim to provide you with valuable insights and guidance for your project. Here's what you can expect:
          </p>
    
          <div className="">
            <div className="lg:flex">
              <InfoCard 
                title="Initial Discussion"
                description="We'll start by getting to know you and your project requirements. Feel free to share your ideas, goals, and any challenges you're facing."
                imageSrc="/meet.png"
                number={1}
              />
              <InfoCard 
                title="Project Understanding"
                description="Our team will carefully listen to your needs and analyze your project requirements to ensure we fully understand your vision."
                imageSrc="/documentIcon.png"
                number={2}
              />
              <InfoCard 
                title="Explaining Our Process"
                description="We'll walk you through our development process, explaining each step in detail and how we can assist you throughout the journey."
                imageSrc="/processIcon.png"
                number={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;