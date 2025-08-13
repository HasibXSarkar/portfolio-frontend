import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './Cv.css';

const CV = () => {
  const [cv, setCV] = useState(null);

  useEffect(() => {
    api.get('cv/') // Adjust endpoint if needed
      .then(res => setCV(res.data[0])) // If you return a list, use [0]
      .catch(err => console.error(err));
  }, []);

  if (!cv) return <div>Loading...</div>;

  return (
    <div className="cv-page">
      <h2>{cv.title}</h2>
      <a
        href={cv.file}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="cv-download-btn"
      >
        Download CV
      </a>
    </div>
  );
};

export default CV;