import React from 'react';

const NextViewport = () => {
  return (
    <div className="next-viewport">
      <div className="left-section">
        <img src="http://enationn.com/assets/images/about-img.png" alt="About Us" />
        <div className="floating-icons">
          <img src="http://enationn.com/assets/images/banner-aliment-icon-1.png" alt="Floating Icon 1" />
          <img src="http://enationn.com/assets/images/banner-aliment-icon-3.png" alt="Floating Icon 3" />
        </div>
      </div>
      <div className="right-section">
        <h2 className="section-title">ABOUT US</h2>
        <h3 className="section-subtitle">We Provide the Best Online Mentorship</h3>
        <p className="section-description">
          E-Nationn is a platform that connects startups with investors, mentors, and resources to help them grow and succeed. Whether you need funding, mentorship, or access to a network of professionals in your industry, E-Nationn can provide you with the support you need to take your startup to the next level.
        </p>
        <button className="explore-button">EXPLORE MORE</button>
      </div>
    </div>
  );
};

export default NextViewport;
