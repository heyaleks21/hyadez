import "./app.css";
import Navbar from "./navbar/Navbar.jsx";
import Skills from "./skills/Skills.jsx";
import Contact from "./contact-form/Contact.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
}

export default App;
