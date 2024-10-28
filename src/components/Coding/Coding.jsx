import React from 'react'
import "./Coding.css";
import { Link } from 'react-router-dom';

export default function Coding() {
  return (
      <div className='coding-container'>
          <div className='title-container'>
              <h2>Latest projects I've worked on</h2>
          </div>
          <div className="photo-container">
              <div className="projects"><div className='one'><a href="https://trinigelos.github.io/Olympus/" target="_blank" rel="noopener noreferrer"></a></div></div>
              <div className="projects two"></div>
              <div className="projects three"></div>
          </div>
          <div className="who">
      <Link to="/coding" className="navbar-links links">
          <button className="bn13" >SEE MORE</button>
        </Link>
        </div>
      </div>
  )
}
