import { useState } from "react";
import "./services.css";

import img1 from "../assets/services/graphic-design.png";
import img2 from "../assets/services/keychain.png";
import img3 from "../assets/services/database.png";
import img4 from "../assets/services/seo.png";
import img5 from "../assets/services/analytics.png";
import img6 from "../assets/services/creative.png";
import img7 from "../assets/services/social-media.png";
import img8 from "../assets/services/photography.png";

const Services = () => {
  const [isShown1, setIsShown1] = useState("");
  const [isShown2, setIsShown2] = useState("");
  const [isShown3, setIsShown3] = useState("");
  const [isShown4, setIsShown4] = useState("");
  const [isShown5, setIsShown5] = useState("");
  const [isShown6, setIsShown6] = useState("");
  const [isShown7, setIsShown7] = useState("");
  const [isShown8, setIsShown8] = useState("");

  return (
    <>
      <div className="services services-background">
        <div className="services-body">
          <div
            className="services-boxes s1"
            onMouseEnter={() =>
              setIsShown1(
                "Stunning and intuitive websites tailored to your unique brand and audience."
              )
            }
            onMouseLeave={() => setIsShown1("")}
          >
            {isShown1 && <div className="cards">{isShown1}</div>}
            <img className="tt22" src={img1}></img>
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown2(
                "Create a memorable brand identity that reflects your values and resonates with your target market."
              )
            }
            onMouseLeave={() => setIsShown2("")}
          >
            <img className="tt22" src={img2}></img>
            {isShown2 && <div className="cards">{isShown2}</div>}
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown3(
                "Reliable and secure hosting solutions to keep your website running smoothly and efficiently."
              )
            }
            onMouseLeave={() => setIsShown3("")}
          >
            <img className="tt22" src={img3}></img>
            {isShown3 && <div className="cards">{isShown3}</div>}
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown4(
                "Boost your online visibility and drive organic traffic with proven search engine optimization strategies."
              )
            }
            onMouseLeave={() => setIsShown4("")}
          >
            <img className="tt22" src={img4}></img>
            {isShown4 && <div className="cards">{isShown4}</div>}
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown5(
                "Gain valuable insights into your website's performance and user behavior to make data-driven decisions."
              )
            }
            onMouseLeave={() => setIsShown5("")}
          >
            <img className="tt22" src={img5}></img>
            {isShown5 && <div className="cards">{isShown5}</div>}
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown6(
                "Engaging and compelling content that captivates your audience and drives conversions."
              )
            }
            onMouseLeave={() => setIsShown6("")}
          >
            <img className="tt22" src={img6}></img>
            {isShown6 && <div className="cards">{isShown6}</div>}
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown7(
                "Strategic digital marketing campaigns to amplify your online presence and reach your target customers."
              )
            }
            onMouseLeave={() => setIsShown7("")}
          >
            <img className="tt22" src={img7}></img>
            {isShown7 && <div className="cards">{isShown7}</div>}
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown8(
                "High-quality visuals that showcase your products in the best light, enticing customers to make a purchase."
              )
            }
            onMouseLeave={() => setIsShown8("")}
          >
            <img className="tt22" src={img8}></img>
            {isShown8 && <div className="cards">{isShown8}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
