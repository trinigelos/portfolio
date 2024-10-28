import React from 'react'
import "./CodingPage.css"
import { FaReact } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { MdDeveloperMode } from "react-icons/md";
import { softwareDev } from './Database';
import { frontendDev } from './Database';
import { appDev } from './Database';
import Bar from '../Bar';
import olympus from "../../../assets/olympus-gym.png";
import signup from "../../../assets/signup-quotagram.png";




const CodingPage = () =>{
return (
<div className="firstContainer">
  <Bar />
  <div className='first-child-section'>
    <div className='firstchild'>
      <h1 className='my-expertise'>MY EXPERTISE</h1>
    </div>
    <div className="experience-container">
      {/* Card 1 */}
      <div className="experience-card">
        <div className='title-container'>
          <HiComputerDesktop className='react-icon' />
          <h3><span className="underline-text green">Software</span> <br />Development</h3>
        </div>
        {softwareDev.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>))}
      </div>

      {/* Card 2 */}
      <div className="experience-card">
        <div className='title-container'>
          <FaReact className='react-icon' />
          <h3> <span className='underline-text pink'>Frontend Dev </span> <br /> reactjs</h3>
        </div>
        {frontendDev.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
        ))}

      </div>

      {/* Card 3 */}
      <div className="experience-card">

        <div className='title-container'>
          <MdDeveloperMode className='react-icon' />
          <h3> <span className='underline-text blue'>App</span> <br /> development</h3>
        </div>
        {appDev.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
        ))}
      </div>

    </div>
  </div>

  {/* Second Section - Projects */}

  <div className="second-child">
    <div className='h1projects'><h1 >MY PROJECTS</h1></div>
      <div className="project-cards">
        <div className='cards'>
        {/* first card project */}
  <div className='olympus-container-card'>
        <a href="https://trinigelos.github.io/Olympus/" target="_blank" rel="noopener noreferrer">
            
    <img className='olympus-img' src={olympus} alt="Website for a local gym" />
            </a>
            
    <h3>Website for a local gym</h3>
  </div>
           {/* second card project */}
        <div className='signup-container-card'>
          <img className='login-img' src={signup} alt="" />
          <h3>Login & Signup to implement Databases: MongoDB and Authentication</h3>
        </div>
        </div>

      
    </div>
  </div>
</div>
);
}

export default CodingPage;