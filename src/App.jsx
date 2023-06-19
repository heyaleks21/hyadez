import "./app.css";
import Navbar from "./navbar/Navbar.jsx";
import Contact from "./contact-form/Contact.jsx";
import Login from "./login/Login.jsx";
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
        <Todolist />
        <Medform />
      </div>
    </>
  );
}

export default App;
