import React from 'react';

const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="front-page-content">
        <div className="left-section">
          <h1 className="welcome-text">WELCOME TO E-NATIONN FAMILY</h1>
          <p className="subtext">Mentorship, Hackathon, Startup</p>
          <p className="description">
            From Mentorship to Hackathon: How they Paved my Start-Up Success
          </p>
          <div className="buttons">
            <button className="explore-button">EXPLORE NOW</button>
            <button className="contact-button">CONTACT US</button>
          </div>
        </div>
        <div className="right-section">
          <img
            src="http://enationn.com/assets/images/banner-img.png"
            alt="Banner"
            className="banner-image"
          />
          <img
            src="http://enationn.com/assets/images/banner-aliment-icon-1.png"
            alt="Aliment Icon"
            className="aliment-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
