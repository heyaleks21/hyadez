import Navbar from "./navbar/Navbar.jsx";
import About from "./about/About.jsx";
import Skills from "./skills/Skills.jsx";
import Contact from "./contact-form/Contact.jsx";
import Landing from "./landing/Landing.jsx";
import Registration from "./registration/Registration.jsx";
import Login from "./login/Login.jsx";
import "./app.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Landing />
        <Skills />
        <Contact />
        <Registration />
      </div>
    </>
  );
}

export default App;
