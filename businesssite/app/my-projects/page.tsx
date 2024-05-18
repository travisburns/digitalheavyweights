"use client"

import ProjectCard from '../../components/ProjectCard'
import React from 'react'

const Page = () => {
  const projects = [
    {
      title: 'InteractiveMap',
      description: 'Fantasy interactive map that displays location data',
      imageSrc: '/webportfolio.png',
    },
    {
      title: 'MuseFind',
      description: 'Display Weather on search based on OpenweatherAPI',
      imageSrc: '/webportfolio.png',
    },
    {
      title: 'R&WEngineering',
      description: 'Engineering Website',
      imageSrc: '/webportfolio.png',
    },
    {
      title: 'GemShop',
      description: 'Display Weather',
      imageSrc: '/webportfolio.png',
    },
    {
      title: 'Boundless',
      description: 'Display Weather',
      imageSrc: '/webportfolio.png',
    },
    {
      title: 'EccomerceDashBoard',
      description: 'Display Weather',
      imageSrc: '/webportfolio.png',
    },
  ]

  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen min-h-screen bg-center bg-cover flex items-center justify-center"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page