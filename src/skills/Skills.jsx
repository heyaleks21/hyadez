import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="skillsbox">
        <div className="box2">
          <div className="form-body">
            <h1 className="skills-heading">Hello There, I'm Aleks</h1>
            <div className="skills-container">
              <div className="form-contents pbox">
                <p className="heading-registration">
                  After completing my studies in Information Technology at
                  UniSA, I developed a solid foundation of knowledge that
                  sharpened my problem-solving, critical thinking, analytical,
                  and development abilities. Through self-directed learning, I
                  focused on gaining expertise in diverse web/cloud
                  technologies.
                </p>
              </div>
              <div className="form-contents pbox">
                <p className="heading-registration">
                  Additionally, I gained valuable experience in IT and
                  customer-service roles at renowned companies like Datacom,
                  Hewlett Packard Enterprise, and iiNet. These positions
                  enhanced my communication and teamwork abilities while
                  exposing me to contemporary IT systems, procedures, and
                  standards.
                </p>
              </div>
            </div>
          </div>
          <div className="skills-container skills-container2">
            <div className="skills-list-container">
              <ul className="skills-uls">
                <div className="skills-title-container">
                  <h3 className="skills-title skills-headings">MY SKILLS</h3>
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
        </div>
      </div>
    </>
  );
};

export default Skills;
