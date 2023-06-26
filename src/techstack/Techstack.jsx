import React from "react";

const Techstack = () => {
  return (
    <div className="skills-container skills-container2">
      <div className="skills-list-container">
        <ul className="skills-uls">
          <div className="skills-title-container">
            <h3 className="skills-title skills-headings">TECH STACK</h3>
          </div>
          <h4 className="front-end-title skills-headings">
            FRONT-END DEVELOPMENT
          </h4>
          <li className="skills-lis">JavaScript / React / Bootstrap</li>
          <li className="skills-lis">HTML5</li>
          <li className="skills-lis">CSS</li>

          <h4 className="skills-headings">BACK-END DEVELOPMENT</h4>
          <li className="skills-lis">Express</li>
          <li className="skills-lis">Node</li>

          <h4 className="skills-headings">DATABASE INTEGRATION</h4>
          <li className="skills-lis">MonboDB</li>
          <li className="skills-lis">Firebase</li>
          <li className="skills-lis">Azure</li>
          <li className="skills-lis">SQL</li>
        </ul>
      </div>
    </div>
  );
};

export default Techstack;
