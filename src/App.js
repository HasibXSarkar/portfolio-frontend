// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Skills from './pages/Skills';
// import Contact from './pages/Contact';
// import Experience from './pages/Experience';
// import Blog from './pages/Blog';
// import CV from './pages/CV';
// import AwardsAndExtracurricular from './pages/AwardsAndExtracurricular';
// import './App.css';
// import Navigation from './components/Navbar';
// function App() {
//   return (
//     <Router>
//        <Navigation />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/cv" element={<CV />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/awards-and-extracurricular" element={<AwardsAndExtracurricular />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
import CV from "./pages/CV";
import AwardsAndExtracurricular from "./pages/AwardsAndExtracurricular";
import Navigation from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Skip link for keyboard users; also helps screen readers */}
      <a className="skip-link" href="#content">Skip to content</a>

      {/* App shell: header (nav) + main area; footer (optional) */}
      <div className="app-shell">
        <header className="site-header">
          <Navigation />
        </header>

        <main id="content" className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/awards-and-extracurricular" element={<AwardsAndExtracurricular />} />
            {/* Fallback so unmatched paths don’t render a blank page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Optional footer */}
        {/* <footer className="site-footer container">© {new Date().getFullYear()}</footer> */}
      </div>
    </Router>
  );
}

export default App;
