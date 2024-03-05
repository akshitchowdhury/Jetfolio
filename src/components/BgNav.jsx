import React from 'react';
import { Link } from 'react-router-dom';
import './BgNav.css';

const BgNav = () => {
  return (
    <nav className="bg-cover">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="navbar-links">
          {/* Call scrollToRef with the appropriate ref when the links are clicked */}
          <Link to="/" className="navbar-link">Home</Link>
          <button  className="navbar-link">About Us</button>
          <button  className="navbar-link">Gallery</button>
          <button  className="navbar-link">Contact Us</button>
        </div>
      </div>
    </nav>
  );
}

export default BgNav;
