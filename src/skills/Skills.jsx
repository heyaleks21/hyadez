import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="description-container">
        <div className="skills-container2">
          <h1 className="landing-vars">Hello There, I'm Aleks Manevski</h1>
        </div>

        <div className="skills-container2">
          <h2 className="landing-vars">This is my Portfolio</h2>
        </div>
        <div className="skills-container2">
          <p className="landing-vars">
            Having previously studied Information Technology at UniSA, I have
            gained a solid foundation of knowledge - while enhancing my problem
            solving, critical thinking, analytical and development skills.
            Following independant studies, I was able to specialize in a range
            of web/cloud technologies such as JavaScript, HTML, CSS,
            SQL/databases and M365 services.
          </p>
        </div>
        <div className="skills-container2">
          <p className="landing-vars">
            Additionally, I have undertaken several IT and customer-service
            based positions at companies such as Datacom, Hewlett Packard
            Enterprise and iiNet which have further developed my communication
            and teamwork skills while providing exposure to modern IT systems,
            procedures and standards.
          </p>
        </div>

        <div className="skills-container skills-container2" id="skills-id">
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
      </div>
    </>
  );
};

export default Skills;
