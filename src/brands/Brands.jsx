import React from "react";
import "./brands.css";

import img1 from "../assets/brands/google.png";
import img2 from "../assets/brands/css-3.png";
import img3 from "../assets/brands/facebook.png";
import img4 from "../assets/brands/java.png";
import img5 from "../assets/brands/microsoft.png";
import img6 from "../assets/brands/node.png";
import img7 from "../assets/brands/social.png";

const Brands = () => {
  return (
    <>
      <div className="brands-background">
        <div className="brands-container">
          <img className="imgs" src={img1} />
          <img className="imgs" src={img5} />
          <img className="imgs" src={img3} />
          <img className="imgs" src={img2} />
          <img className="imgs" src={img6} />
          <img className="imgs" src={img7} />
          <img className="imgs" src={img4} />
        </div>
      </div>
    </>
  );
};

export default Brands;
