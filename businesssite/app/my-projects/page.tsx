"use client"

import ProjectCard from '../../components/ProjectCard'

import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/mountains.jpg)"}}
     className='w-screen h-screen items-center justify-center bg-center bg-cover'>
      <div className='relative top-[10rem] w-[80%] text-center'>
        <ProjectCard title='WeatherApplication' description='Display Weather' imageSrc='/bg-3.png' />
        <ProjectCard title='InteractiveMap' description='Display Weather' imageSrc='/bg-3.png' />
        <ProjectCard title='MuseFind' description='Display Weather' imageSrc='/bg-3.png' />
        <ProjectCard title='R&WEngineering' description='Display Weather' imageSrc='/bg-3.png' />
        <ProjectCard title='GemShop' description='Display Weather' imageSrc='/bg-3.png' />
        <ProjectCard title='Boundless' description='Display Weather' imageSrc='/bg-3.png' />
        <ProjectCard title='EccomerceDashBoard' description='Display Weather' imageSrc='/bg-3.png' />
      
      </div>
    </div>
  )

}

export default Page