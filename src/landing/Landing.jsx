import React from "react";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-container" id="landing-id">
        <div className="landing">
          <h1 className="landing-vars">Hello There, I'm Aleks Manevski</h1>
          <h2 className="landing-vars">This is my Portfolio</h2>
          <div className="button-container">
            <a className="landing-vars button1" href="#skills-id">
              Learn about me...
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
