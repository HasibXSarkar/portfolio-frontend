import React from 'react';
import './Home.css'; // Import the CSS file
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';


const Home = () => (
  <div className="home">
      <div className="profile-links">
        <a href="https://github.com/HasibXSarkar" target="_blank" rel="noopener noreferrer">
          <FaGithub className="profile-icon" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/md-hasib-sarkar/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="profile-icon" /> LinkedIn
        </a>
        <a href="https://leetcode.com/u/HasibXsarkar/" target="_blank" rel="noopener noreferrer">
          <FaCode className="profile-icon" /> LeetCode
        </a>
      </div>
    <h1 className="welcome-message">Welcome to My Portfolio!</h1>
    <img
      src="/images/cv.jpg" // Place your image in public/images/my-photo.jpg
      alt="Myself"
      className="profile-image"
    />
    <div className="introduction">
      <h2>Hi, I’m Md Hasib Sarkar.</h2>
      <p>
        I’m a Computer Science graduate with hands-on experience in web technologies, machine learning, Deep learning and computer vision. I work comfortably with React and Django, and I enjoy crafting clean, functional solutions across both frontend and backend.

I’m a curious learner with a calm, focused approach to problem-solving. I enjoy exploring new development tools and workflows, and I value building things that are both meaningful and efficient.

Looking ahead, I’m excited to expand my skill set and transition into the DevOps field—where I can combine development knowledge with system operations to streamline software delivery and infrastructure management.

Outside of tech, I find joy in cooking, reading, and taking short trips to refresh my perspective.
      </p>
    </div>
  </div>
);

export default Home;