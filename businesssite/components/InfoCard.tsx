import Image from 'next/image';
import { StaticImageData } from 'next/image';
import React from 'react';

interface InfoCardProps {
    title: string;
    description: string;
    imageSrc: StaticImageData;
    number: string;
    link: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, imageSrc, number, link }) => {
  
    return (
        <div className='bg-slate-950 mb-5 mr-[1rem]'>
            {/* Use a div instead of an anchor tag if the link is not intended to be clickable */}
            <div className="bg-slate-950 md:flex-row relative">
                <div className="flex flex-col justify-between space-x-5">
                    <div className='flex'>
                        <div className="rounded-full bg-gray-800 w-8 h-8 flex items-center justify-center text-white mr-2">{number}</div>
                   
                        <Image
                    src={imageSrc}  
                    alt="Image description" 
                    width={20} 
                    height={20} 
                    className="..." 
                    />
                        <h5 className="mb-2 text-[1rem] font-bold tracking-tight text-white dark:text-white">{title}</h5>
                    </div>
        
                    <p className="font-normal text-white dark:text-gray-400">{description}</p>
                   
                </div>
            </div>
        </div>
    );
}

export default InfoCard;