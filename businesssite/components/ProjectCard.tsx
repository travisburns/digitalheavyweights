"use client"
 

import React from 'react'
import Image from "next/image";
interface projectCardProps {
  title: string;
  description: string;
  imageSrc: string;
}


const ProjectCard: React.FC<projectCardProps> = ({imageSrc, title, description}) => {


  return (
    
    <div className=' mb-1 relative left-[12%] w-[80%] '>
       <a href="#" className="bg-slate-950  relative ">
       
    <div className="flex flex-col justify-between">
        <div className=' sm:w-[100%] 2xl:text-[2.5rem] '>
        <Image alt='' width={100} height={100} src={imageSrc} layout='responsive'></Image> 
        
        <div className='lg:relative lg:left-[80%] lg:bg-black lg:w-[25%] lg:bottom-[4rem] 2xl:bottom-[8rem]'>
        <h5 className="mb-0 text-[1.5rem] font-bold tracking-tight text-white dark:text-white 2xl:text-[2rem]">{title}</h5>
        
        
       
        <button className='text-white bg-black w-[43%] relative left-[29%] bottom-[4.8rem] lg:left-[0%] lg:w-[50%] lg:bottom-[0rem]  xl:w-[40%] 2xl:w-[100%] mt-[1rem] '>View More</button>
        </div>
        </div>        

    
    </div>
</a>
       <div/>
    </div>



  )
}

export default ProjectCard