import "./app.css";
import Navbar from "./navbar/Navbar.jsx";
import Skills from "./skills/Skills.jsx";
import Contact from "./contact-form/Contact.jsx";
import Landing from "./landing/Landing.jsx";
import Login from "./login/Login.jsx";
import Logout from "./logout/Logout.jsx";
import Registration from "./registration/Registration.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Logout />
        <Login />
        <Registration />
        <Landing />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
