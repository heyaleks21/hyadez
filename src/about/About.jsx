import "./about.css";

const About = () => {
  return (
    <>
      <div className="firstbox background-image">
        <div className="box2">
          <div className="form-body">
            <h1 className="skills-heading">
              <img
                className="about-logo"
                src="/static/images/brand-logo.svg"
              ></img>{" "}
              Hyadez Web Development
            </h1>

            <div className="form-contents pbox">
              <p className="heading-registration">
                Based in Australia, Hyadez offers exceptional freelance software
                development services tailored to meet your unique business
                needs. With a wealth of experience, our team delivers
                cutting-edge solutions that drive growth and efficiency.
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
        </div>
      </div>
    </>
  );
};

export default About;
