

import Link from "next/link";
import InfoCard from "@/components/InfoCard";
import Image from "next/image";




const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className="flex max-w-[80%] relative ">
        <div className="flex flex-col gap-4 w-[100%]">
          <h1 className="font-semibold text-white text-[40px]">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Process
            </span>
          </h1>
          <Image
            src="/stars.png"
            alt='stars'
            height={300}
            width={300}
            className='absolute top-[7rem] '
          />
          <p className="text-gray-400 text-[20px]">
            We strive for professionalism by using the latest Technologies for your Web Application.
          </p>
    
          <div className="">
            <div className="lg:flex">
              <Link href={'/Process'}>
                <InfoCard 
                  title="30 Minute Consultation Call"
                  description="Within our consultation, we will meet and greet with the client, understand project requirements, and explain our process."
                  imageSrc="/phoneIcon.png"
                  number={1}
                />
              </Link>
              <Link href={'/ux'}>
              <InfoCard 
                title="Design the UI/UX of website"
                description="We will begin to design to UI/UX using wireframing tools and or development."
                imageSrc="/designIcon.png"
                number={2}
              />
              </Link>
              <Link href={'/frontend'}>
              <InfoCard 
                title="Create the front end of the website"
                description="We will create the front end of the website using React and JSX. "
                imageSrc="/programmingIcon.png"
                number={3}
              />
              </Link>
            
            </div>
            
            <div className="lg:flex">
            <Link href={'/backend'}>
              <InfoCard 
                title="Create the backend of the website and database"
                description="We will create the Database and backend process for more advanced sites. "
                imageSrc="/database.png"
                number={4}
              />
              </Link>
              <Link href={'/seo'}>
              <InfoCard 
                title="Optimize SEO"
                description="by use of NextJs metadata, we will Optimize SEO."
                imageSrc="/seoIcon.png"
                number={5}
              />
              </Link>
              <Link href={'/dashboard'}>
              <InfoCard 
                title="Advanced: Create Custom Ecommerce Dashboard"
                description="For business's in need of advanced sales tracking, we will create a custom Ecommerce Dashboard for all needs."
                imageSrc="/ecommerceIcon.png"
                number={6}
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;