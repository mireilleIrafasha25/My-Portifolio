
import { CgWebsite } from "react-icons/cg";
import { FaFigma } from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";
import { GiArtificialIntelligence } from "react-icons/gi";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="bg-[#2E2E2E] px-20 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <motion.div initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }} className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Services</h2>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <a
            className="block rounded-xl border border-gray-800 p-12 shadow-xl transition hover:border-[#D4AF37] hover:shadow-[#D4AF37] hover:bg-[#977c22]"
            href="#"
          >
          <CgWebsite className="text-[#D4AF37] text-4xl" />

            <h2 className="mt-4 text-xl font-bold text-white">Front-End Developer</h2>

            <p className="mt-1 text-sm text-gray-300">
             I build website for using reactjs,javascript, html ,css and tailwind css. and also we do intergration between 
             the front-end and back-end.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-12 shadow-xl transition  hover:border-[#D4AF37] hover:shadow-[#D4AF37] hover:bg-[#977c22]"
            href="#"
          >
           <FaFigma className="text-[#D4AF37] text-4xl"  />

            <h2 className="mt-4 text-xl font-bold text-white">UI/UX Designing</h2>

            <p className="mt-1 text-sm text-gray-300">
              I use different platform to develop the UI Design that meet your wishes and satisfies your needs.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-12 shadow-xl transition   hover:border-[#D4AF37] hover:shadow-[#D4AF37] hover:bg-[#977c22]"
            href="#"
          >
            <CiDatabase className="text-[#D4AF37] text-4xl"  />

            <h2 className="mt-4 text-xl font-bold text-white">Database Managnment</h2>

            <p className="mt-1 text-sm text-gray-300">
             I also develop Database system for your company and analysis for your data. 
            </p>
          </a>
 

          <a
            className="block rounded-xl border border-gray-800 p-12 shadow-xl transition  hover:border-[#D4AF37] hover:shadow-[#D4AF37] hover:bg-[#977c22]"
            href="#"
          >
            <GiArtificialIntelligence className="text-[#D4AF37] text-4xl" />

            <h2 className="mt-4 text-xl font-bold text-white">AI</h2>

            <p className="mt-1 text-sm text-gray-300">
              Iprovide some skills about aritificial intelligence to your company or to anyone who want to know more about AI.
            </p>
          </a>




        </motion.div>
      </div>
    </section>
  );
};

export default Service;
