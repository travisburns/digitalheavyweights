import InfoCard from "@/components/InfoCard";
import Image from "next/image";

const Page4 = () => {
  return (
    <div className="flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <h1 className="font-semibold text-white text-4xl mb-8">
          Creating the Backend and Database{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            for the Website
          </span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <InfoCard 
            title="Server-Side Development"
            description="We'll develop the server-side logic using technologies such as Node.js, Express.js, or other frameworks, depending on your project requirements."
            imageSrc="/serverSideIcon.png"
            number={1}
          />
          <InfoCard 
            title="Database Design"
            description="Our team will design and set up the database architecture, including creating tables, defining relationships, and optimizing performance."
            imageSrc="/databaseDesignIcon.png"
            number={2}
          />
          <InfoCard 
            title="API Integration"
            description="We'll integrate APIs to connect your backend with external services or third-party platforms, enabling seamless data exchange and functionality."
            imageSrc="/apiIntegrationIcon.png"
            number={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Page4;