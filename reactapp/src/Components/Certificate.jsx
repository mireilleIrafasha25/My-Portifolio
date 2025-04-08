
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
const certificates = [
  { name: 'Backend Developer ', image: '/shecancode certificate.png' },
  { name: 'PSMI', image:'/scrum certificate.png' },
  { name: 'Full Stack Developer', image:'/Klab certificate.png' },

];

const Certificate = () => {
  return (
    <section className="bg-[#2E2E2E] text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }} className="text-4xl font-bold text-center mb-8">My Certificate</motion.h2>
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }} className="grid grid-cols-2 pl-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certificates.map((certificate, index) => (
            <div key={index} className="flex flex-row pl-10">
              <div  className='flex flex-col gap-4'>
              <div className='pl-5'>
                {certificate.name}</div>
              <img src={`${certificate.image}`} alt="certificate" className='h-full w-50' />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
