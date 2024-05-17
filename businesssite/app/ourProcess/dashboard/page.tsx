import InfoCard from "@/components/InfoCard";
import Image from "next/image";

const Page2 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className="flex max-w-[80%] relative  lg:bottom-[0rem]">
        <div className="relative mt-[10rem]">
          <h1 className="font-semibold text-white text-[40px] my-[10rem] mb-16  xl:mt-[-16rem]">
            Developing Your Dashboard{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              for Content Management
            </span>
          </h1>
          <Image
            src="/dashboardIcon.png"
            alt='dashboard icon'
            height={300}
            width={300}
            className='absolute top-[7rem] left-[10rem]'
          />
          <p className="text-gray-400 text-[20px] mb-16">
            Welcome to the dashboard development stage of your project! This phase focuses on creating a robust content management system (CMS) dashboard. Here's what we'll cover:
          </p>
    
          <div className="">
            <div className="lg:flex">
              <InfoCard 
                title="User Management"
                description="We'll implement user authentication, roles, and permissions to control access to your dashboard and manage user accounts."
                imageSrc="/user.png"
                number={1}
              />
              <InfoCard 
                title="Content Editing"
                description="Our team will develop features for creating, editing, and organizing content, including rich text editors, media management, and content categorization."
                imageSrc="/content.png"
                number={2}
              />
              <InfoCard 
                title="Analytics & Reporting"
                description="We'll integrate analytics tools and generate reports to track website performance, user engagement, and content metrics within your dashboard."
                imageSrc="/analytics.png"
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