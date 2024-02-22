import React from 'react'
import Image from 'next/image'

interface InfoCardProps {
    title: string;
    description: string;
    imageSrc: string;
}


const InfoCard: React.FC<InfoCardProps> = ({ title, description, imageSrc }) => {
  
    return (
        
       <div className='bg-slate-950 mb-5 '>
       <a href="#" className="bg-slate-950 border border-gray-200   shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative ">
       
    <div className="flex flex-col justify-between  ">
        <div className='flex'>
        <img className='h-[15%] w-[15%] relative bottom-[1rem]' src={imageSrc} />
        <h5 className="mb-2 text-[1rem] font-bold tracking-tight text-white dark:text-white">{title}</h5>
        </div>
        
        <p className=" font-normal text-white dark:text-gray-400">{description}</p>

    
    </div>
</a>
       <div/>
    </div>
  )
}

export default InfoCard