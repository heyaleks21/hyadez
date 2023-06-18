import "./app.css";
import Navbar from "./navbar/Navbar.jsx";
import Contact from "./contact-form/Contact.jsx";
import Login from "./login/Login.jsx";
import Logout from "./logout/Logout.jsx";
import Registration from "./registration/Registration.jsx";
import Medform from "./med-form/Medform";
import Todolist from "./todolist/Todolist.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bigbox">
        <Contact />
        <Registration />
        <Login />
        <Logout />
        <Medform />
        <Todolist />
      </div>
    </>
  );
}

export default App;
