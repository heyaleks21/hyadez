import "./app.css";
import Navbar from "./navbar/Navbar.jsx";
import About from "./about/About.jsx";
import Contact from "./contact-form/Contact.jsx";
import Services from "./services/Services";

function App() {
  return (
    <>
      <Navbar />
      <div className="undernavdiv"></div>
      <About />
      <Services />
      <Contact />
      <div className="bottompagediv"></div>
      <div className="footercontainer">
        <div className="brandnamefooter">Hyadez 2023 ©</div>
      </div>
    </>
  );
}

export default App;
