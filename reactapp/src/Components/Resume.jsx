import { motion } from "framer-motion";
const Resume = () => {
  const timelineData = [
    {
      year: '2018 - 2021',
      title: 'Advanced level',
      company: "FAWE GIRL'S SCHOOL GAHINI",
      description: 'In combination of MCE(Mathematic-computer science-economics)',
    },
    {
      year: '2021 - PRESENT',
      title: 'Bachelor degrees',
      company: 'UR',
      description: 'Bachelor degree in computer science',
    },
    {
      year: 'Feb 2024 - May 2024',
      title: 'Backend Development',
      company: 'SheCanCode',
      description: 'Learning as a trainee for 4 months in an intensive program',
    },
    {
      year: 'Aug 2024- Nov 2024',
      title: 'Backend Developer',
      company: 'Ener Power Tech',
      description: 'Backend APIs with Node.ts,Express &Postgres. focused on auth and data — 3 months',
    },
    {
        year: 'Dec 2024-March 2025',
        title: 'Full Stack Development',
        company: 'Klab',
        description: 'Learning as trainee for 4 months in Full Stack Development.',
      },
      {
        year: '2024-Present',
        title: 'ALX AiCE - AI Career Essentials',
        company: 'ALX Rwanda',
        description: 'AI essential skills',
      },
  ];

  return (
    <section className="bg-[#2E2E2E] px-28 text-white py-16"> 
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-center mb-10 text-4xl font-extrabold">
          <p>Experience and Education</p>
        </div>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="container mx-auto px-4">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {timelineData.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 relative">
              <div className="flex-shrink-0 relative">
                <div></div>
                <div className="flex items-center justify-center w-12 h-12 bg-[#D4AF37] rounded-full relative z-10">
                  <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-8h4a1 1 0 100-2H8a1 1 0 000 2zm0 4h4a1 1 0 100-2H8a1 1 0 000 2zm0-8h4a1 1 0 100-2H8a1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-400"></div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className=" text-gray-400 px-2 py-1 rounded">{item.year}</span>
                </div>
                <h3 className="text-2xl font-bold mt-2">{item.title} <span className="font-normal text-gray-400">— {item.company}</span></h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
