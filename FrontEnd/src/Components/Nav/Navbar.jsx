// src/components/Nav/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ home, site, zswo, feed,mainContent,reader }) => {
  return (
    <nav>
      <div className='first'>
        <a href="#home" onClick={home}>Home</a>
        <a href="#site" onClick={site}>Sitemap</a>
        <a href="#zswo" onClick={zswo}>ZSWO Login</a>
        <a href="#feed" onClick={feed}>Feedback</a>
      </div>
      <div className='sec'>
        <a href="#mainContent " onClick={mainContent}>Skip to Main Content</a>
        <a href="#reader" onClick={reader}>Screen Reader Access</a>
      </div>
      <div className='dropDown'>
        <button>English</button>
      </div>
    </nav>
  );
};

export default Navbar;
