
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
        <a
              href="https://github.com/mireilleIrafasha25"
              className="text-green-400 text-xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="www.linkedin.com/in/irafasha-marie-mireille-26510b2aa"
              className="text-green-400 text-xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="www.linkedin.com/in/irafasha-marie-mireille-26510b2aa"
              className="text-green-400 text-xl"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/_uwineza_/"
              className="text-green-400 text-xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.instagram.com/_uwineza_/"
              className="text-green-400 text-xl"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
        </div>
        <div className="flex space-x-6 mb-4">
        <ul className={`flex space-x-1 md:space-x-1 flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent z-10`}>
       
        <Link to="/"><li><a  className="block py-2 px-4 text-green-400  ">Home</a></li></Link> 
        {/* <Link to="/aboutme"><li><a  className="block py-2 px-4 hover:underline hover:text-green-400">About</a></li></Link> */}
        <Link to="/resume"><li><a  className="block py-2 px-4   hover:text-green-400">Resume</a></li></Link>
        <Link to="/service"><li><a  className="block py-2 px-4  hover:text-green-400">Services</a></li></Link>
        <Link to="/skill"><li><a  className="block py-2 px-4  hover:text-green-400">Skill</a></li></Link>
        <Link to="/project"><li><a  className="block py-2 px-4  hover:text-green-400">Project</a></li></Link>
        <Link to="/contact"><li><a  className="block py-2 px-4  hover:text-green-400">Contact</a></li></Link>
        
        </ul></div>
        <div className="border-t border-gray-800 w-full mt-4"></div>
        <div className="mt-4 text-center">
          <p>© Florence uwineza. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
