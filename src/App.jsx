import "./app.css";
import Navbar from "./navbar/Navbar.jsx";
import About from "./about/About.jsx";
import Contact from "./contact-form/Contact.jsx";
import Services from "./services/Services.jsx";
import ImageSlider from "./imageslider/ImageSlider.jsx";
import Brands from "./brands/Brands";

function App() {
  return (
    <>
      <Navbar />
      <div className="undernavdiv"></div>
      <About />
      <Brands />
      <Services />
      <Contact />
      <ImageSlider />
      <div className="footercontainer">
        <div className="brandnamefooter">© Hyadez</div>
      </div>
    </>
  );
}

export default App;
