"use client";

import InfoCard from "@/components/InfoCard";

const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className="flex max-w-[80%] relative pt-[100px]">
        <div className="flex flex-col gap-4 w-[100%]">
          <h1 className="font-semibold text-white text-[40px]">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Process
            </span>
          </h1>
          <p className="text-gray-400 text-[20px]">
            We strive for professionalism by using the latest Technologies for your Web Application.
          </p>
    
   

          <InfoCard 
          title="30 Minunte Consultation Call"
          description="Within our consultation, we will meet and greet with the client, undesrtand project requirements, and explain our process."
          imageSrc="/phoneIcon.png"
          />
         <InfoCard 
          title="Design the UI/UX of website"
          description="We will begin to design to UI/UX using wireframing tools and or development."
          imageSrc="/designIcon.png"
          />
          <InfoCard 
          title="Create the front end of the website"
          description="We will create the front end of the website using React and JSX. "
          imageSrc="/programmingIcon.png"
          />
           <InfoCard 
          title="Create the backend of the website and database"
          description="We will create the Database and backend process for more advanced sites. "
          imageSrc="/database.png"
          />
           <InfoCard 
          title="Optimize SEO"
          description="by use of NextJs metadata, we will Optimize SEO."
          imageSrc="/database.png"
          />
          <InfoCard 
          title="Advanced: Create Custom Eccomerce Dashboard"
          description="For business's in need of advanced sales tracking, we will create a custom Eccomerce Dashboard for all needs."
          imageSrc="/database.png"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Page;