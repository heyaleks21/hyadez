import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="skillsbox">
        <div className="box2">
          <div className="form-body">
            <h1 className="skills-heading">Welcome to Hyadez</h1>
            <h2 className="skills-heading h2heading">
              Software Development Services
            </h2>

            <div className="form-contents pbox">
              <p className="heading-registration">
                Based in the vibrant city of Adelaide, South Australia, Hyadez
                offers exceptional freelance software development services
                tailored to meet your unique business needs. With a wealth of
                experience, our team delivers cutting-edge solutions that drive
                growth and efficiency.
              </p>
            </div>
            <div className="form-contents pbox">
              <p className="heading-registration">
                At Hyadez, we specialize in creating robust, scalable, and
                user-friendly software solutions that empower businesses to
                thrive in the digital landscape. Whether you need a web
                application, mobile app, or custom software, our experienced
                team has the expertise to turn your vision into a reality.
              </p>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default Skills;
