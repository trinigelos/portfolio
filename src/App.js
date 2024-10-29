import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage.js';
import PhotographyPage from "./components/Pages/Photography/PhotographyPage.jsx";
import AboutPage from './components/Pages/AboutPage/AboutPage.jsx';
import CodingPage from './components/Pages/CodingPage/CodingPage.jsx';

function App() {
  return(
    <Router>
    <div className="App">
      <Routes>
           <Route path="/" element={<HomePage />} />
          <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/about" element={<AboutPage />} /> 
         <Route path="/coding" element={<CodingPage />} />
      </Routes>
    </div>
  </Router>
)}

export default App;
