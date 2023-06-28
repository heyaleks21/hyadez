import { useState, useEffect } from "react";
import "./imageslider.css";
import test from "../assets/test.jpeg";
import test1 from "../assets/test1.jpeg";
import test2 from "../assets/test2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ImageSlider = () => {
  const images = [test, test1, test2];
  const length = 3;

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  useEffect(() => {
    setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 10000);
  }, []);

  return (
    <>
      <div className="carousel-background">
        <div className="carousel-container">
          <button className="btn" onClick={handlePrev}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <img className="image-carousel" src={images[index]} />
          <div>
            <button className="btn" onClick={handleNext}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
