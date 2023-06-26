import "./app.css";
import Navbar from "./navbar/Navbar.jsx";
import Skills from "./skills/Skills.jsx";
import Contact from "./contact-form/Contact.jsx";
import Techstack from "./techstack/Techstack";

function App() {
  return (
    <>
      <Navbar />
      <div className="undernavdiv"></div>
      <Skills />
      <Contact />
      <Techstack />
      <div className="bottompagediv"></div>
    </>
  );
}

export default App;
