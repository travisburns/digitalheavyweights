import InfoCard from "@/components/InfoCard";
import Image from "next/image";

const Page6 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className="flex max-w-[80%] relative bottom-[10rem]">
        <div className="">
          <h1 className="font-semibold text-white text-[40px]">
            Creating Custom Ecommerce Dashboard{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              for Advanced Sales Tracking
            </span>
          </h1>
          <Image
            src="/ecommerceIcon.png"
            alt='eCommerce icon'
            height={300}
            width={300}
            className='absolute top-[7rem] left-[10rem]'
          />
          <p className="text-gray-400 text-[20px]">
            Welcome to the eCommerce dashboard development phase! This is where we build a custom dashboard tailored to your business needs for advanced sales tracking. Here's what we'll be doing:
          </p>
    
          <div className="">
            <div className="lg:flex">
              <InfoCard 
                title="Data Visualization"
                description="We'll create visually appealing charts, graphs, and reports to provide insights into sales performance, customer behavior, and inventory management."
                imageSrc="/dataVisualizationIcon.png"
                number={1}
              />
              <InfoCard 
                title="User Management"
                description="Our team will implement user authentication, access control, and role-based permissions to ensure secure access to the dashboard features."
                imageSrc="/userManagementIcon.png"
                number={2}
              />
              <InfoCard 
                title="Integration with Ecommerce Platforms"
                description="We'll integrate with popular ecommerce platforms such as Shopify, WooCommerce, or Magento to fetch sales data, product information, and order details."
                imageSrc="/integrationIcon.png"
                number={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;