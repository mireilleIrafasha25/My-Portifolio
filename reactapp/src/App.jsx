import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Components/HomePage';
import Service from './Components/Service';
import Resume from './Components/Resume';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact'
import Footer from './Components/Footer';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/service" element={<Service/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/aboutme" element={<Aboutme/>}/>
          <Route path="/skill" element={<Skills/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/footer" element={<Footer/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
