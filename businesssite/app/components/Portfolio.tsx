import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, Linkedin } from 'lucide-react';
import { projects } from '../../constants/projectData';
import { experience } from '../../constants/experienceData';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Navigation items
  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'education', label: 'EDUCATION' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'education'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex relative overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Mouse-following light */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 60%)',
          transition: 'all 0.2s ease-out',
        }}
      />
      
      {/* Simple faint particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-teal-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Fixed Left Sidebar */}
      <div className="fixed left-0 top-0 w-full md:w-1/2 lg:w-2/5 xl:w-1/3 p-4 md:p-12 z-40 md:z-50 bg-slate-900 md:bg-transparent
                      flex flex-col md:flex-col justify-between
                      h-auto md:h-screen">
        {/* Header Section - Flex on mobile */}
        <div className="flex flex-col md:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-0"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 md:mb-4">
              Travis Burns
            </h1>
            <h2 className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-medium text-teal-400 mb-2 md:mb-6">
              Full Stack Developer
            </h2>
            <p className="text-sm md:text-lg text-slate-400 leading-relaxed mb-4 md:mb-12 max-w-sm hidden md:block">
              I build scalable web applications with modern frontend frameworks and robust .NET backend systems.
            </p>
          </motion.div>

          {/* Navigation - Horizontal on mobile with smaller text */}
          <nav className="flex md:block space-x-3 md:space-x-0 md:mb-12 mb-4 overflow-x-auto">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex items-center py-2 md:py-3 text-xs md:text-sm font-medium uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className={`mr-2 md:mr-4 h-px transition-all duration-300 hidden md:block ${
                  activeSection === item.id 
                    ? 'w-16 bg-white' 
                    : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-300'
                }`}></span>
                {item.label}
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Social Links - Bottom on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex space-x-4 md:space-x-6"
        >
          <a
            href="https://github.com/yourusername"
            className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
          >
            <Github className="w-4 h-4 md:w-6 md:h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
          >
            <Linkedin className="w-4 h-4 md:w-6 md:h-6" />
          </a>
          <a
            href="mailto:travis@example.com"
            className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
          >
            <Mail className="w-4 h-4 md:w-6 md:h-6" />
          </a>
        </motion.div>
      </div>

      {/* Right Content Area */}
      <div className="w-full md:ml-auto md:w-1/2 lg:w-3/5 xl:w-2/3 min-h-screen pt-[20vh] md:pt-0 md:p-12 lg:p-24 relative z-10">
        {/* About Section */}
        <section id="about" className="mb-18 p-6 md:p-0">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">About</h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 md:mb-6">
              Full Stack Software Developer with production experience in C#, .NET, and modern web technologies. 
              I specialize in building scalable backend systems with ASP.NET and creating responsive frontend experiences with Typescript, React, and NextJS.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 md:mb-6">
              Currently Graduated my Associates degree in Software Development at <span className="text-teal-400 font-medium">Lane Community College</span> (graduating June 2025) while 
              holding a Bachelors in Art and Technology from <span className="text-teal-400 font-medium">University of Oregon</span>. This combination 
              gives me both technical depth and creative problem-solving skills.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 md:mb-6">
              Experienced with SQL Server Management Studio (SSMS), database design, and agile development workflows. 
              I enjoy tackling complex backend challenges and creating seamless user experiences.
            </p>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-18 p-6 md:p-0">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Experience</h2>
           <a
              href="/resume.pdf"
              download="Travis_Burns_Resume.pdf"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-300 hover:text-teal-400 border border-slate-600 hover:border-teal-400 rounded-lg transition-colors duration-300 group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group mb-12 grid grid-cols-1 md:grid-cols-8 gap-4 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg p-6 rounded-lg"
            >
              <div className="md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                  {exp.period}
                </p>
              </div>
              <div className="md:col-span-6">
                <h3 className="font-medium text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-1">
                  {exp.title} • {exp.company}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-18 p-6 md:p-0">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Projects</h2>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group mb-12 grid grid-cols-1 md:grid-cols-8 gap-4 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg p-6 rounded-lg"
            >
              <div className="md:col-span-8">
                <h3 className="font-medium text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-2 flex items-center">
                  {project.title}
                  <div className="ml-4 flex space-x-2">
                    <a
                      href={project.github}
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-18 p-6 md:p-0">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Skills</h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend Skills */}
              <div className="group transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg p-6 rounded-lg">
                <h3 className="text-xl font-medium text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-4">
                  Frontend Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">JavaScript</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">TypeScript</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">React</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Next.js</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">HTML</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">CSS</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Tailwind CSS</span>
                </div>
              </div>

              {/* Backend Skills */}
              <div className="group transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg p-6 rounded-lg">
                <h3 className="text-xl font-medium text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-4">
                  Backend Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">C#</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">.NET</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">ASP.NET</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Blazor</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Node.js</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Express</span>
                </div>
              </div>

              {/* Database Skills */}
              <div className="group transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg p-6 rounded-lg">
                <h3 className="text-xl font-medium text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-4">
                  Database & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">SQL Server</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">MySQL</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">MongoDB</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">SSMS</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Entity Framework</span>
                </div>
              </div>

              {/* Development Tools */}
              <div className="group transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg p-6 rounded-lg">
                <h3 className="text-xl font-medium text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-4">
                  Development Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Git</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">GitHub</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Azure</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">AWS</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Agile</span>
                  <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Visual Studio</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Education Section - now includes Certifications */}
        <section id="education" className="p-6 md:p-0">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Education & Certifications</h2>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group mb-12 grid grid-cols-1 md:grid-cols-8 gap-4 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg p-6 rounded-lg"
          >
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                JUN 2025
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="font-medium text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-1">
                AAS, Software Development • Lane Community College
              </h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                Completed comprehensive coursework in advanced .NET, C#, SQL, Web App Development, System Design, and Agile methodologies. 
                Graduated with hands-on experience through a 6-month capstone project and 3-month industry internship.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">C#</span>
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">.NET</span>
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">SQL</span>
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Agile</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group mb-12 grid grid-cols-1 md:grid-cols-8 gap-4 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg p-6 rounded-lg"
          >
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                JAN 2018
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="font-medium text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-1">
                Bachelor of Science, Art & Technology • University of Oregon
              </h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                Interdisciplinary program combining creative design principles with technical implementation. 
                Developed strong foundation in design thinking, creative problem-solving, and the intersection of art and technology.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Design</span>
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Creative Technology</span>
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Problem Solving</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group mb-12 grid grid-cols-1 md:grid-cols-8 gap-4 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg p-6 rounded-lg"
          >
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                JUN 2025
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="font-medium text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-1">
                Database Management Certification • Lane Community College
              </h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                Intensive coursework in software development and database management. Gained proficiency in C# programming, 
                object-oriented concepts, data structures, relational database design, SQL query development, and entity-relationship modeling.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">SQL</span>
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Database Design</span>
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">C#</span>
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Data Structures</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group mb-12 grid grid-cols-1 md:grid-cols-8 gap-4 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg p-6 rounded-lg"
          >
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                JUN 2024
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="font-medium text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-1">
                Front-end Web Development • Lane Community College
              </h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                Comprehensive certification covering HTML, CSS, JavaScript, Advanced JavaScript, 
                Web Design, Node.js, Webpack, C#, and Intermediate C# programming.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">HTML</span>
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">CSS</span>
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">JavaScript</span>
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Node.js</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group mb-12 grid grid-cols-1 md:grid-cols-8 gap-4 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg p-6 rounded-lg"
          >
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                JUN 2024
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="font-medium text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-1">
                Mobile Application Development • Lane Community College
              </h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                Specialized certification in cross-platform mobile app development using React Native. 
                Coursework included React Native fundamentals and Advanced React Native development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">React Native</span>
                <span className="px-3 py-1 text-xs bg-teal-400/10 text-teal-300 rounded-full">Mobile Development</span>
              </div>
            </div>
          </motion.div>
        </section>

 {/* Footer */}
        <footer className="pt-24 p-6 md:p-0">
         
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;