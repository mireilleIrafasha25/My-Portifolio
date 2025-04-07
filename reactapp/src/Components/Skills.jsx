
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
const skills = [
  { name: 'HTML', percentage: 95 },
  { name: 'JavaScript', percentage: 65 },
  { name: 'CSS', percentage: 80 },
  { name: 'C++', percentage: 70 },
  { name: 'Tailwind css', percentage: 86 },
  { name: 'MySql', percentage: 60},
  { name: 'Java', percentage: 65 },
  { name: 'React', percentage: 70 },
];

const Skills = () => {
  return (
    <section className="bg-[#2E2E2E] text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }} className="text-4xl font-bold text-center mb-8">My Skills</motion.h2>
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    textColor: '#D4AF37', // Tailwind text-green-400
                    pathColor: '#D4AF37',
                    trailColor: '#2E2E2E',
                  })}
                />
              </div>
              <p className="text-center">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
