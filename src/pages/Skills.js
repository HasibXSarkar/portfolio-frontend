import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    api.get('skills/')
      .then(res => setSkills(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="skills-page">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill-card" key={skill.id}>
            <h3>{skill.name}</h3>
            <p>{skill.proficiency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;