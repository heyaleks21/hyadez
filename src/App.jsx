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

      <Contact />
      <Services />
      <div className="bottompagediv"></div>
    </>
  );
}

export default App;
