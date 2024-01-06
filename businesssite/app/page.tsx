"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage: "url(/main-bg.webp)"}}>
            <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
                <h1 className='text-[50px] text-white font-semibold'>
                  Make anything possible with
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                    {" "}
                    Web Development
                  </span>
                </h1>
                <p className='text-white hidden md:block'>
                  Aspiring to Create web Applications That Excell
                </p>
                <div className='flex-col md:flex-row hidden md:flex gap-5'>
                  <Link href="/ourProcess" className='rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
                      Learn More
                  </Link>
                  <Link href="/technology" className='rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
                      <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
                      Our Technology
                  </Link>

                  <Link href="/contact" className='rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
                      <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
                      Contact Us
                  </Link>

                </div>
            </div>
      </div>

      {/* mobile */}

      <div className='absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5'>
                  <Link href="/my-skills" className='rounded-[20px] group relative border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
                      Learn More
                  </Link>
                  <Link href="/my-skills" className='rounded-[20px] group relative border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
                      <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
                      Contact Me
                  </Link>

                  <Link href="/my-skills" className='rounded-[20px] group-relative border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
                      <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
                      Contact Me
                  </Link>

                </div>

        <div className='absolute bottom-0 right-0 z-[10]'>
          <Image
            src="/horse.png"
            alt='horse'
            height={300}
            width={300}
            className='absolute right-55 top-40'
          />

          <Image src="/cliff.webp" alt="cliff" width={480} height={480}/>
        </div>


        <div className='absolute bottom-0 z-[5] w-full h-auto'>
          <Image 
            src="/trees.webp"
            alt="trees"
            width={2000}
            height={2000}
            className='w-full h-full'
          />
        </div>
        <Image
            src="/stars.png"
            alt='stars'
            height={300}
            width={300}
            className='absolute top-10'
          />

    </main>
  )
}