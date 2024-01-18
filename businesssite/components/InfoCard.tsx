import React from 'react'
import Image from 'next/image'

const InfoCard = () => {
  
    return (
       <>
       <a href="#" className="  bg-slate-950 border border-gray-200 h-[24rem]  shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative top-[3rem]">
        <img src='' />
    <div className="flex flex-col justify-between">
        <h5 className="mb-2 text-[1rem] font-bold tracking-tight text-white dark:text-white">30 Minute Consultation with Client</h5>
        <p className=" font-normal text-white dark:text-gray-400">Within our consultation, we will meet and greet with the client, undesrtand project requirements, and explain our process.</p>
        
        <ul className='list pt-[2rem] text-white'>
        <li className='list-item'>
        <img src=''/>
        <p className='step'>Meet and Great</p>
        </li>

        <li className='list-item'>
        <img src=''/>
        <p className='step'>Understand Project scope</p>
        </li>

        <li className='item flex '>
        <Image 
                src="/RequirementsIcon.png"
                alt="logo"
                width={60}
                height={60}
                className = ''
            />
        <p className='step relative top-4'>Determine Requirements</p>
        </li>

        <li className='list-item'>
        <img src=''/>
        <p className='step'>Explain Process and Timeline</p>
        </li>

        </ul>
        
    
    </div>
</a>
       </>
    
  )
}

export default InfoCard