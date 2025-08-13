import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaTools, FaBriefcase, FaBlog, FaFileAlt, FaAward, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';
const Navigation = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li><Link to="/"><FaHome className="nav-icon" /> Home</Link></li>
      <li><Link to="/projects"><FaProjectDiagram className="nav-icon" /> Projects</Link></li>
      <li><Link to="/skills"><FaTools className="nav-icon" /> Skills</Link></li>
      <li><Link to="/experience"><FaBriefcase className="nav-icon" /> Experience</Link></li>
      <li><Link to="/blog"><FaBlog className="nav-icon" /> Blog</Link></li>
      <li><Link to="/cv"><FaFileAlt className="nav-icon" /> CV</Link></li>
      <li>
        <Link to="/awards-and-extracurricular"><FaAward className="nav-icon" />
          Awards & Extracurricular
        </Link>
      </li>
      <li><Link to="/contact"><FaEnvelope className="nav-icon" /> Contact</Link></li>
    </ul>
  </nav>
);

export default Navigation;