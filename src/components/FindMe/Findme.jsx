import React from 'react';
import './Findme.css';

export default function Findme() {
  return (
    <div className='findme-container'>
      <div className='background'></div>
      <div className="title-container">
        <h1>find me on</h1>
      </div>
      <div className="socialmedia">
        <div><a href="https://www.instagram.com/selenite.shots/" target="_blank" rel="noopener noreferrer"><h1 className="leftins media">instagram</h1></a></div>
        <div><a href="https://github.com/trinigelos" target="_blank" rel="noopener noreferrer"><h1 className='rightgit media' >github</h1></a></div>
        <div><a href="https://galleries.pixieset.com/collections" target="_blank" rel="noopener noreferrer"><h1 className="middlepix media">pixieset</h1></a></div>
        <div><a href="https://www.linkedin.com/in/trinidad-gelos-5a99431ba/" target="_blank" rel="noopener noreferrer"><h1 className="linkedin media">linkedIn</h1></a></div>
      </div>
    </div>
  );
}
