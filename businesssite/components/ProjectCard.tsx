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
    
    <div className='bg-slate-950 mb-5 w-[100%]'>
       <a href="#" className="bg-slate-950 border border-gray-200   shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative ">
       
    <div className="flex flex-col justify-between  ">
        <div className=''>
        <Image alt='' width={300} height={150} src={imageSrc}></Image> 
        <h5 className="mb-2 text-[2rem] font-bold tracking-tight text-white dark:text-white">{title}</h5>
        </div>
        
        <p className=" text-[1rem] text-center text-white dark:text-gray-400">{description}</p>

    
    </div>
</a>
       <div/>
    </div>



  )
}

export default ProjectCard