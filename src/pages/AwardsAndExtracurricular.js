import React, { useEffect, useState } from "react";
import api from '../services/api';
import './AwardsAndExtracurricular.css';

const AwardsAndExtracurricular = () => {
  const [awards, setAwards] = useState([]);
  const [extracurriculars, setExtracurriculars] = useState([]);

  useEffect(() => {
    api.get("awards/").then(res => setAwards(res.data));
    api.get("extracurriculars/").then(res => setExtracurriculars(res.data));
  }, []);

  return (
    <div className="awards-extra-container">
      <h2 className="awards-extra-title">Awards</h2>
      <ul className="awards-extra-list">
        {awards.map(award => (
          <li key={award.id}>
            <strong>{award.name}</strong> ({award.date_awarded}): {award.description}
          </li>
        ))}
      </ul>
      <h2 className="awards-extra-title">Extracurricular Activities</h2>
      <ul className="awards-extra-list">
        {extracurriculars.map(ec => (
          <li key={ec.id}>
            <strong>{ec.title}</strong> - {ec.organization} ({ec.start_date} to {ec.end_date || "Present"}): {ec.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AwardsAndExtracurricular;