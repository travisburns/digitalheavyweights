import InfoCard from "@/components/InfoCard";
import Image from "next/image";

const Page5 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className="flex max-w-[80%] relative bottom-[10rem]">
        <div className="">
          <h1 className="font-semibold text-white text-[40px]">
            Optimizing SEO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              for the Website
            </span>
          </h1>
          <Image
            src="/seoIcon.png"
            alt='SEO icon'
            height={300}
            width={300}
            className='absolute top-[7rem] left-[10rem]'
          />
          <p className="text-gray-400 text-[20px]">
            Welcome to the SEO optimization phase! This is where we ensure your website ranks well in search engine results and drives organic traffic. Here's what we'll be doing:
          </p>
    
          <div className="">
            <div className="lg:flex">
              <InfoCard 
                title="Keyword Research"
                description="We'll conduct comprehensive keyword research to identify the most relevant and high-traffic keywords for your website."
                imageSrc="/keywordResearchIcon.png"
                number={1}
              />
              <InfoCard 
                title="On-Page Optimization"
                description="Our team will optimize on-page elements such as meta tags, headings, URLs, and content structure to improve search engine visibility."
                imageSrc="/onPageOptimizationIcon.png"
                number={2}
              />
              <InfoCard 
                title="Technical SEO"
                description="We'll address technical aspects of SEO, including site speed, mobile-friendliness, schema markup, and XML sitemaps, to enhance website performance."
                imageSrc="/technicalSEOIcon.png"
                number={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;