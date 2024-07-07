"use client";

import { motion } from 'framer-motion' ;

const aboutMeData = {
  name: 'Travis Burns',
  title: 'Full Stack Developer',
  description: 'Self-taught programmer with over four years of experience specializing in MERN stack development and Next.js. Proficient in JavaScript, TypeScript, React, Node.js, Express, MongoDB, and experienced in C# and ASP.NET Core. Passionate about crafting efficient and scalable web applications, with a keen interest in e-commerce solutions. Constantly striving to expand knowledge and stay up-to-date with the latest industry trends and best practices.',
  education: [
    {
      degree: 'Associate\'s Degree in Software Development',
      institution: 'Lane Community College',
      year: 'In Progress',
      description: 'Currently pursuing an Associate\'s degree in Software Development to further enhance skills and gain a deeper understanding of software engineering principles and methodologies.',
    },
    {
      degree: 'Bachelor of Science in Art and Technology',
      institution: 'University of Oregon',
      year: '2018',
      description: 'Graduated with a Bachelor of Science in Art and Technology, which provided a solid foundation in design principles, creative problem-solving, and the intersection of art and technology.',
    },
  ],
  certifications: [
    {
      name: 'Front-end Web Development',
      institution: 'Lane Community College',
      description: 'Obtained a 1 year certification in Front-end Web Development, Courses included html and css, Javascript, Advanced Javascript, Web Design, NodeJS, Webpack, C#, and and intermediate C#',
    },
    {
      name: 'Mobile Application Development',
      institution: 'Lane Community College',
      description: 'Obtained a 1 year certification in Mobile Application Development, showcasing skills in developing cross-platform mobile apps using React Native. Courses Included React native, and Avanced React Native',
    },

    {
      name: 'Database Management',
      institution: 'Lane Community College',
      description: 'In Progress: Completed a 1 year intensive coursework in software development and database management. Gained proficiency in C# programming, object-oriented concepts, and data structures. Acquired skills in relational database design, SQL query development, and entity-relationship modeling. The program also covered big data concepts and software testing methodologies.',
    },
  ],
  journey: 'Started the journey as a self-taught programmer, working on small-scale Wix and WordPress sites. Over four years, transitioned into full-stack development, focusing on MERN stack and Next.js. Developed significant projects including MuseFind (React Native music app), InteractiveMap (using Leaflet.js and Chart.js), and R&W Engineering Firm website redesign (Next.js 14). Constantly refined skills through self-study and formal education, pursuing an Associates in Software Development while holding a Bachelors in Art and Technology. Collaborated with designers and stakeholders on freelance projects, gaining experience in version control with Git. Actively seeking entry-level positions to apply and expand current skills.',
};
export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gray-100 py-16 px-4 sm:px-8" // Added padding for smaller screens
      style={{
        backgroundImage: "url(/bg-2.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-20"> {/* Added padding for smaller screens */}
        <motion.h1
          className="text-6xl font-bold mb-8 text-center text-indigo-600"
          variants={itemVariants}
        >
          {aboutMeData.name}
        </motion.h1>
        <motion.h2
          className="text-3xl font-semibold mb-8 text-center text-white"
          variants={itemVariants}
        >
          {aboutMeData.title}
        </motion.h2>
        <motion.p
          className="text-xl mb-12 text-center text-white"
          variants={itemVariants}
        >
          {aboutMeData.description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Education</h3>
            <ul className="space-y-6">
              {aboutMeData.education.map((edu, index) => (
                <li key={index} className="text-white">
                  <p className="text-xl font-semibold text-blue-400">{edu.degree}</p>
                  <p className="text-lg text-purple-400 italic">{edu.institution}</p>
                  <p className="text-lg">{edu.year}</p>
                  <p className="mt-2 text-base">{edu.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Certifications</h3>
            <ul className="space-y-6">
              {aboutMeData.certifications.map((cert, index) => (
                <li key={index} className="text-white">
                  <p className="text-xl font-semibold text-blue-400">{cert.name}</p>
                  <p className="text-lg text-purple-400 italic">{cert.institution}</p>
                  <p className="mt-2 text-base">{cert.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Journey</h3>
          <p className="text-lg text-white">{aboutMeData.journey}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}