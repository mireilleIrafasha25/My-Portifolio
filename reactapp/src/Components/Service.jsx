import { CgWebsite } from "react-icons/cg";
import { FaFigma } from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";
import { GiArtificialIntelligence } from "react-icons/gi";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="bg-[#2E2E2E] px-20 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }} 
          className="mx-auto max-w-lg text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Services</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          <a className="block rounded-xl border border-gray-800 p-12 shadow-xl transition hover:border-[#D4AF37] hover:shadow-[#D4AF37] hover:bg-[#977c22]" href="#">
            <CgWebsite className="text-[#D4AF37] text-4xl" />
            <h2 className="mt-4 text-xl font-bold text-white">Full-Stack Web Development</h2>
            <p className="mt-1 text-sm text-gray-300">
              I build complete web applications using React, Node.js, Express, and MongoDB, with a focus on performance, clean design, and scalable APIs.
            </p>
          </a>

          <a className="block rounded-xl border border-gray-800 p-12 shadow-xl transition hover:border-[#D4AF37] hover:shadow-[#D4AF37] hover:bg-[#977c22]" href="#">
            <FaFigma className="text-[#D4AF37] text-4xl" />
            <h2 className="mt-4 text-xl font-bold text-white">UI/UX Design</h2>
            <p className="mt-1 text-sm text-gray-300">
              I design intuitive, user-centered interfaces with tools like Figma and Tailwind CSS, ensuring a seamless user experience across devices.
            </p>
          </a>

          <a className="block rounded-xl border border-gray-800 p-12 shadow-xl transition hover:border-[#D4AF37] hover:shadow-[#D4AF37] hover:bg-[#977c22]" href="#">
            <CiDatabase className="text-[#D4AF37] text-4xl" />
            <h2 className="mt-4 text-xl font-bold text-white">Backend & Database Systems</h2>
            <p className="mt-1 text-sm text-gray-300">
              I specialize in building robust backend systems and managing databases like MongoDB and PostgreSQL, with secure authentication and API documentation (Swagger).
            </p>
          </a>

          <a className="block rounded-xl border border-gray-800 p-12 shadow-xl transition hover:border-[#D4AF37] hover:shadow-[#D4AF37] hover:bg-[#977c22]" href="#">
            <GiArtificialIntelligence className="text-[#D4AF37] text-4xl" />
            <h2 className="mt-4 text-xl font-bold text-white">Learning & Innovation</h2>
            <p className="mt-1 text-sm text-gray-300">
              I stay up-to-date with new tech like AI, Docker, and TypeORM, and love sharing knowledge through open-source collaboration and team support.
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
