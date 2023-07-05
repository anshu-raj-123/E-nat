import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">
          E-Nationn
        </a>
      </div>
      <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
      <label htmlFor="navbar-toggle" className="navbar-toggle-label">
        <span className="navbar-toggle-icon"></span>
      </label>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="navbar-link">
            About Us
          </a>
        </li>
        <li className="navbar-item">
          <a href="/hackathon" className="navbar-link">
            Hackathon
          </a>
        </li>
        <li className="navbar-item">
          <a href="/member" className="navbar-link">
            Mentorship
          </a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">
            Contact Us
          </a>
        </li>
      </ul>
      <button className="navbar-button">Try for Free</button>
    </nav>
  );
};

export default Navbar;
