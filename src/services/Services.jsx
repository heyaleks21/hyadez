import { useState } from "react";
import "./services.css";

const Services = () => {
  const [isShown1, setIsShown1] = useState("Web Design");
  const [isShown2, setIsShown2] = useState("Branding");
  const [isShown3, setIsShown3] = useState("Hosting");
  const [isShown4, setIsShown4] = useState("SEO");
  const [isShown5, setIsShown5] = useState("Analytics");
  const [isShown6, setIsShown6] = useState("Content Creation");
  const [isShown7, setIsShown7] = useState("Marketing");
  const [isShown8, setIsShown8] = useState("Product Photography");

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
            onMouseLeave={() => setIsShown1("Web Design")}
          >
            {isShown1 && <div className="cards">{isShown1}</div>}
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown2(
                "Create a memorable brand identity that reflects your values and resonates with your target market."
              )
            }
            onMouseLeave={() => setIsShown2("Branding")}
          >
            {isShown2 && <div className="cards">{isShown2}</div>}
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown3(
                "Reliable and secure hosting solutions to keep your website running smoothly and efficiently."
              )
            }
            onMouseLeave={() => setIsShown3("Hosting")}
          >
            {isShown3 && <div className="cards">{isShown3}</div>}
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown4(
                "Boost your online visibility and drive organic traffic with proven search engine optimization strategies."
              )
            }
            onMouseLeave={() => setIsShown4("SEO")}
          >
            {isShown4 && <div className="cards">{isShown4}</div>}
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown5(
                "Gain valuable insights into your website's performance and user behavior to make data-driven decisions."
              )
            }
            onMouseLeave={() => setIsShown5("Analytics")}
          >
            {isShown5 && <div className="cards">{isShown5}</div>}
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown6(
                "Engaging and compelling content that captivates your audience and drives conversions."
              )
            }
            onMouseLeave={() => setIsShown6("Content Creation")}
          >
            {isShown6 && <div className="cards">{isShown6}</div>}
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown7(
                "Strategic digital marketing campaigns to amplify your online presence and reach your target customers."
              )
            }
            onMouseLeave={() => setIsShown7("Marketing")}
          >
            {isShown7 && <div className="cards">{isShown7}</div>}
          </div>
          <div
            className="services-boxes"
            onMouseEnter={() =>
              setIsShown8(
                "High-quality visuals that showcase your products in the best light, enticing customers to make a purchase."
              )
            }
            onMouseLeave={() => setIsShown8("Product Photography")}
          >
            {isShown8 && <div className="cards">{isShown8}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
