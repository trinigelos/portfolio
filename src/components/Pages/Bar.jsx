import React, { useEffect, useState } from 'react';
import './Bar.css';
import { Link } from "react-router-dom";


export default function Bar() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bar-container ${isScrollingUp ? 'visible' : 'hidden'}`}>
    <Link to="/" className='navbar-links links'><div className="bar">home</div></Link>
     <Link to="/about" className='navbar-links links'><div className="bar">about</div></Link>
    <Link to="/coding"className='navbar-links links' ><div className="bar">coding</div></Link>
     <Link to="/photography" className='navbar-links links' ><div className="bar">photography</div></Link>
          
    </div>
  );
}
