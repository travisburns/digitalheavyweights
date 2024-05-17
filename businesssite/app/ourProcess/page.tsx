import { processSteps, ProcessStep } from '@/constants/processData';
import Link from 'next/link';
import InfoCard from '@/components/InfoCard';

const OurProcessPage: React.FC = () => {
  console.log({ processSteps });

  processSteps.forEach((step: ProcessStep) => {
    // Log the ID of the current step
    console.log(`step.id: ${step.id}`);

    // // Log the children array of the current step
    // console.log(step.children);
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className='max-w-[80%]'>

    
      <h1 className='text-[40px] font-semibold text-white my-28 mb-16 xl:mt-[-16rem]'>Our Process</h1>
      <ul className='xl:flex'>
        {processSteps.map((step: ProcessStep) => (
          <li key={step.id}>
            <Link href={`${step.id}`}>
             

              <InfoCard
                title={step.title}
                description={step.description}
                imageSrc={step.imageSrc} // Assuming InfoCard accepts StaticImageData
                number={step.number}
                link={step.link}
              />
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default OurProcessPage;