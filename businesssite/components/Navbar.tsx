import { Socials } from '@/constants'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
        <div className='flex flex-row gap-3 items-center'>
            <div className='relative  '>
            <Image 
                src="/horseLogo.jpg"
                alt="logo"
                width={40}
                height={40}
                className = 'w-full h-full object-contain rounded-full'
            />
            
            </div>
            
            <h1 className='text-white text-[1rem] font-semibold'>Digital Heavyweights</h1>
            </div>

            <div className='flex flex-grow gap-5 mb-2 hidden sm:flex sm:flex-grow sm:relative sm:left-[35%]'>
                {Socials.map((social) => (

                    <Image 
                        key={social.name}
                        src={social.src}
                        alt={social.name}
                        width={28}
                        height={28}
                    />
                ))}
            </div>

    </div>
  )
}

export default Navbar