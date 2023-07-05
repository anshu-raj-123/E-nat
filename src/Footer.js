import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-heading">E-Nationn</h2>
          <p className="footer-description">
            Mentorship, Hackathon, Startup
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Our Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/hackathon">Hackathon</a></li>
            <li><a href="/mentorship">Mentorship</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Other Links</h3>
          <ul className="footer-links">
            <li><a href="/instructor">Instructor</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/event">Event</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-condition">Term & Condition</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Subscribe Now</h4>
          <div className="footer-subscribe-form">
            <input type="email" placeholder="Email Address" />
            <button className="footer-subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} E-Nationn. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
