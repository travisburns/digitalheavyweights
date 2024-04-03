"use client"

import ProjectCard from '../../components/ProjectCard'

import React from 'react'

const Page = () => {
  return (
    <div style={{backgroundImage: "url(/mountains.jpg)"}} className='w-screen h-[100%] items-center justify-center bg-center bg-cover'>
      <div className='relative top-[10rem] w-[80%] text-center ml-[8%]'>
        <ProjectCard title='InteractiveMap' description='Fantasy interactive map that displays location data' imageSrc='/webportfolio.png' />
        <ProjectCard title='MuseFind' description='Display Weather on search based on OpenweatherAPI' imageSrc='/webportfolio.png' />
        <ProjectCard title='R&WEngineering' description='Engineering Website' imageSrc='/webportfolio.png' />
        <ProjectCard title='GemShop' description='Display Weather' imageSrc='/webportfolio.png' />
        <ProjectCard title='Boundless' description='Display Weather' imageSrc='/webportfolio.png' />
        <ProjectCard title='EccomerceDashBoard' description='Display Weather' imageSrc='/webportfolio.png' />

      </div>
    </div>
  )

}

export default Page