import React, { useEffect, useState } from 'react';
import './Experiences.css';
import api from '../services/api';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    api.get('experiences/')
      .then(res => setExperiences(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="experience-page">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map(exp => (
          <div className="experience-card" key={exp.id}>
            <h3>{exp.role} at {exp.company}</h3>
            <p>
              {exp.start_date} - {exp.end_date ? exp.end_date : 'Present'}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;