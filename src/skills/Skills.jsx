import "./skills.css";

import React from "react";

const Skills = () => {
  return (
    <>
      <div className="skills-container" id="skills-id">
        <div className="skills-list-container">
          <ul className="skills-uls">
            <div className="skills-title-container">
              <h3 className="skills-title skills-headings">MY SKILLS</h3>
            </div>
            <h4 className="front-end-title skills-headings">
              FRONT-END DEVELOPMENT
            </h4>
            <li className="skills-lis">JavaScript</li>
            <li className="skills-lis">CSS</li>
            <li className="skills-lis">React</li>
            <li className="skills-lis">Bootstrap</li>

            <h4 className="skills-headings">BACK-END DEVELOPMENT</h4>
            <li className="skills-lis">Node</li>
            <li className="skills-lis">Express</li>
            <li className="skills-lis">Azure</li>

            <h4 className="skills-headings">DATABASE INTEGRATION</h4>
            <li className="skills-lis">MonboDB</li>
            <li className="skills-lis">SQL</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
