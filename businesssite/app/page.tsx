"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      
    

      <div className='absolute flex bottom-10  z-[20] hidden right-5 flex-col md:hidden gap-5'>
                  <Link href="/our-process" className='rounded-[20px] group relative border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
                      Learn More
                  </Link>
                  <Link href="/my-skills" className='rounded-[20px] group relative border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
                      <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
                      Contact Me
                  </Link>

                  {/* <Link href="/my-skills" className='rounded-[20px] group-relative border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
                      <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
                      Contact Me
                  </Link> */}

                </div>

        <div className='absolute bottom-0 right-0 z-[10] '>
          <Image
            src="/horse.png"
            alt='horse'
            height={300}
            width={300}
            className='absolute left-[6%] top-40'
          />
          <div>
          <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
          </div>
         
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

       

        


      {/* mobile */}
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage: "url(/main-bg.webp)"}}>
            <div className='pl-0 md:pl-0 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px] lg:relative  lg:left-[12%] xl:left-[21%] 2xl:left-[30%]'>
                <h1 className='text-[2.3rem] relative  text-center text-white font-semibold 2xl:text-[4rem]'>
                  Make anything possible with
                  <span className='text-[2.3rem] 2xl:text-[4rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                    {" "}
                    Web Development
                  </span>
                </h1>
                <p className=' text-center text-[.68rem] md:text-[1rem] font-bold text-white  md:block 2xl:text-[1.5rem]'>
                  Aspiring to Create web Applications That Excell
                </p>
                <div className='flex md:flex-row  md:flex gap-2 text-[1rem]  text-center relative left-10 w-20   sm:top-24 sm:left-48 md:w-[18rem] md:left-[31%] 2xl:left-[30%]'>
                 

                  <Link href="/our-process" className="rounded-[15px] text-center  bg-transparent border border-white px-4 relative left-[9.4rem] py-3 sm:my-6 w-[100%] sm:pr-4  text-sm sm:text-[1.5rem] text-white max-w-[70px] md:pr-[5rem]">
                  <div className='absolute rounded-[20px] z-[1] text-center bg-white inset-0 opacity-0 group-hover:opacity-20' />
                  Our Process
                  </Link>


                  {/* <Link href="/technology" className='rounded-[15px] text-center bg-transparent border border-white px-4 py-3  sm:my-6 w-[100%] sm:pr-4 text-sm sm:text-[1.5rem] text-white max-w-[70px] md:pr-[5rem]'>
                      <div className='absolute rounded-[20px] z-[1] text-center bg-white inset-0 opacity-0 group-hover:opacity-20' />
                      Our Tech
                  </Link> */}

                  {/* <Link href="/contact" className='rounded-[15px] bg-transparent border text-center border-white px-4 py-3 sm:my-6 w-[100%] sm:pr-4 text-sm sm:text-[1.5rem] text-white max-w-[70px] md:pr-[5rem] md:text-[1.3rem]'>
                      <div className='absolute rounded-[20px] z-[1] bg-white inset-0  text-center opacity-0 group-hover:opacity-20' />
                      Contact Us
                  </Link> */}

                </div>
               
            </div>

           
      </div>





    </main>
  )
}
