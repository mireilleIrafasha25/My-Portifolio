import "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Service from "./Service";
import Certificate from "./Certificate";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
import { motion } from "framer-motion";
const Homepage = () => {
  return (
      <div className="bg-[#2E2E2E] text-white min-h-screen p-6 flex flex-col justify-center items-center">
        <div className=" w-full flex flex-col px-32 gap-40 md:flex-row items-center ">
          <div className="text-center md:text-left md:w-1/2">
            <motion.p
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1 , delay:0.5}} 
             className="text-lg md:text-xl text-gray-400 mb-2 mt-10">
              Software Developer
            </motion.p>
            <motion.h1
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1 , delay:0.5}}  className="text-1xl md:text-2xl font-bold mb-2">Hello I'm</motion.h1>
            <motion.h2
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1 , delay:0.5}}  className="text-4xl md:text-1xl font-bold text-[#D4AF37] ">
            Mireille Irafasha
            </motion.h2>
            <motion.p 
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1 , delay:0.5}}  className="mt-4 text-gray-400">
              I am Full Stack Developer and UI/UX designer and
              <br />
              am proficient in various programming languages and technologies.
            </motion.p>
            <motion.a
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1 , delay:0.5}} 
             href="cv of mine.pdf" download>
              <motion.button
              initial={{opacity:0,x:-100}}
              animate={{opacity:1,x:0}}
              transition={{duration:1 , delay:0.5}}  className="mt-6 bg-[#D4AF37] text-white py-2 px-6 rounded-full hover:bg-[#ac8c24]">
                Download CV
              </motion.button>
            </motion.a>

            <div className="flex space-x-8 mt-4 justify-center md:justify-start">
              <motion.a
              initial={{opacity:0,x:-100}}
              animate={{opacity:1,x:0}}
              transition={{duration:1 , delay:0.5}} 
                href="https://github.com/uwinezaflorence20"
                className="text-[#D4AF37] text-xl"
              >
                <FontAwesomeIcon icon={faGithub} />
              </motion.a>
              <motion.a
              initial={{opacity:0,x:-100}}
              animate={{opacity:1,x:0}}
              transition={{duration:1 , delay:0.5}} 
                href="https://www.linkedin.com/in/uwineza-florence-3b9463280/"
                className="text-[#D4AF37] text-xl"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </motion.a>
              <motion.a
              initial={{opacity:0,x:-100}}
              animate={{opacity:1,x:0}}
              transition={{duration:1 , delay:0.5}} 
                href="https://www.linkedin.com/in/uwineza-florence-3b9463280/"
                className="text-[#D4AF37] text-xl"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </motion.a>
              <motion.a
              initial={{opacity:0,x:-100}}
              animate={{opacity:1,x:0}}
              transition={{duration:1 , delay:0.5}} 
                href="https://www.instagram.com/_uwineza_/"
                className="text-[#D4AF37] text-xl"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </motion.a>
              <motion.a
              initial={{opacity:0,x:-100}}
              animate={{opacity:1,x:0}}
              transition={{duration:1 , delay:0.5}} 
                href="https://www.instagram.com/_uwineza_/"
                className="text-[#D4AF37] text-xl"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </motion.a>
            </div>
          </div>
          <div className="relative mt-10 md:mt-0 md:ml-10">
            <div className="relative w-60 h-60 md:w-80 md:h-80">
              <motion.img
              initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}
                src="/homep.jpg"
                alt="Florence Uwineza"
                className="absolute inset-0 w-full h-full mt-5 rounded-full "
                
              />
            </div>
          </div>
        </div>
     
      
      <Resume />
      <Service />
      <Certificate />
      <Project />
      <Contact />
    </div>
  );
};

export default Homepage;
