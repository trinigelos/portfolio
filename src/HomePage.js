import React from 'react';

import './App.css';
import Home from "./components/Home/Home.jsx";
import Gallery from "./components/Gallery/Gallery.jsx"
import Coding from './components/Coding/Coding.jsx';
import Findme from './components/FindMe/Findme.jsx';
import ContactForm from './components/ContactPage/Contact.jsx';

function HomePage() {
  return(
    
      <div className="App">
      <Home />
      <Gallery />
      {/* <Coding /> */}
      <Findme />
      {/* <ContactForm /> */}
      </div>
    
)}

export default HomePage;