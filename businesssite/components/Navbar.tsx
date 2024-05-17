import { Socials } from '@/constants';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className='fixed z-10 top-0 w-full bg-slate-900 flex justify-between items-center px-10 md:px-20'>
      <Link href="/">
      <div className='flex items-center'>
        <div className='relative'>
          <Image 
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className='w-full h-full object-contain rounded-full'
          />
        </div>
        <h1 className='text-white text-xl font-semibold ml-2'>Digital Heavyweights</h1>
      </div>
      </Link>
      
      
      <div className='text-white'>
        <Link href="/services">
          My Projects
        </Link>
      </div>

      <div className='flex gap-3'>
        {Socials.map((social, index) => (
          <div key={index} className='relative'>
            <Image 
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;