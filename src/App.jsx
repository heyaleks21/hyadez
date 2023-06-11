import "./app.css";
import Navbar from "./navbar/Navbar.jsx";
import Skills from "./skills/Skills.jsx";
import Contact from "./contact-form/Contact.jsx";
import Login from "./login/Login.jsx";
import Logout from "./logout/Logout.jsx";
import Registration from "./registration/Registration.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Registration />
        <Login />
        <Contact />
        <Logout />
      </div>
    </>
  );
}

export default App;
