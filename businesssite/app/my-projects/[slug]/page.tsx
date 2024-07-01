"use client";

import { useRouter } from 'next/router';
import { projects, Project } from '../../../constants/projectData';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const project: Project | undefined = projects.find((proj: Project) => proj.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl mb-8">{project.description}</p>
        <div className="mb-8">
          <Image src={project.imageSrc} alt={project.title} width={800} height={500} />
        </div>
        <h2 className="text-2xl font-bold mb-4">Key Process</h2>
        <p className="text-lg mb-8">{project.keyProcess}</p>
        <h2 className="text-2xl font-bold mb-4">Project Details</h2>
        <p className="text-lg">{project.details}</p>
      </motion.div>
    </div>
  );
};

export default ProjectPage;