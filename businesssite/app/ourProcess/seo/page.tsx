import InfoCard from "@/components/InfoCard";
import Image from "next/image";

const Page2 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className="flex max-w-[80%] relative  lg:bottom-[0rem]">
        <div className="relative mt-[10rem]">
          <h1 className="font-semibold text-white text-[40px] my-[10rem] mb-16  xl:mt-[-16rem]">
            Enhancing SEO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              for Your Website
            </span>
          </h1>
          <Image
            src="/seoIcon.png"
            alt='SEO icon'
            height={300}
            width={300}
            className='absolute top-[7rem] left-[10rem]'
          />
          <p className="text-gray-400 text-[20px] mb-16">
            Welcome to the SEO enhancement stage of your website! This phase focuses on improving your website's visibility and ranking in search engine results. Here's what we'll cover:
          </p>
    
          <div className="">
            <div className="lg:flex">
              <InfoCard 
                title="Keyword Research"
                description="We'll perform comprehensive keyword research to identify relevant search terms and phrases that can drive organic traffic to your website."
                imageSrc="/keyword.png"
                number={1}
              />
              <InfoCard 
                title="On-Page Optimization"
                description="Our team will optimize on-page elements such as meta tags, headings, and content structure to make your website more search engine-friendly."
                imageSrc="/onpage.png"
                number={2}
              />
              <InfoCard 
                title="Link Building"
                description="We'll implement strategies to acquire high-quality backlinks from authoritative websites, boosting your website's credibility and search engine ranking."
                imageSrc="/linkbuilding.png"
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