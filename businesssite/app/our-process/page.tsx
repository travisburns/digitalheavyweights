"use client";

import InfoCard from "@/components/InfoCard";

const page = () => {

  return (

    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex  justify-center bg-cover bg-center"
    >
      <div className="flex   max-w-[80%] relative top-[10rem]">
        <div className="flex flex-col  gap-4 w-[100%]">
          <h1 className="font-semibold text-white text-[40px]">
            Our {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Process{" "}
            </span>
            
          </h1>
          <p className="text-gray-400 text-[20px]">
            We strive for professionalism by using the latest Technologies for your Web Application.
          </p>

          <p className="font-semibold text-white text-[20px] mt-[3rem]">
            1. Consultation
          </p>

          <InfoCard />
        </div>
        
        
       
      </div>
      
    </div>
  );
};

  


export default page