import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-900 px-4 md:px-32 text-white py-2 z-50">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Florence<span className="text-green-400">.</span></div>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul className={`flex flex-col sm:flex-row md:space-x-1 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent z-10 ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <Link to="/"><li><a className="block py-2 px-4 text-green-400">Home</a></li></Link>
          {/* <Link to="/aboutme"><li><a className="block py-2 px-4 hover:underline hover:text-green-400">About</a></li></Link> */}
          <Link to="/resume"><li><a className="block py-2 px-4 hover:text-green-400">Resume</a></li></Link>
          <Link to="/service"><li><a className="block py-2 px-4 hover:text-green-400">Services</a></li></Link>
          <Link to="/skill"><li><a className="block py-2 px-4 hover:text-green-400">Skill</a></li></Link>
          <Link to="/project"><li><a className="block py-2 px-4 hover:text-green-400">Project</a></li></Link>
          <Link to="/contact"><li><a className="block py-2 px-4 hover:text-green-400">Contact</a></li></Link>
        </ul>
        <Link to="https://github.com/uwinezaflorence20">
          <button className="hidden md:block bg-green-500 text-black py-2 px-4 rounded-full hover:bg-green-600">Hire me</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
