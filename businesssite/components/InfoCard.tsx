import React from 'react';

interface InfoCardProps {
    title: string;
    description: string;
    imageSrc: string;
    number: number; // Add a number prop
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, imageSrc, number }) => {
  
    return (
        <div className='bg-slate-950 mb-5 mr-[1rem] '>
            <a href="#" className="bg-slate-950 md:flex-row relative">
                <div className="flex flex-col justify-between space-x-5">
                    <div className='flex'>
                        <div className="rounded-full bg-gray-800 w-8 h-8 flex items-center justify-center text-white mr-2">{number}</div> {/* Display the number */}
                        <img className='h-[15%] w-[15%] relative bottom-[1rem]' src={imageSrc} alt={title} />
                        <h5 className="mb-2 text-[1rem] font-bold tracking-tight text-white dark:text-white">{title}</h5>
                    </div>
        
                    <p className="font-normal text-white dark:text-gray-400">{description}</p>
                </div>
            </a>
        </div>
    );
}

export default InfoCard;