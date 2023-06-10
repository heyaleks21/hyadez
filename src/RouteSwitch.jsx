import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./about/About";
import Contact from "./contact-form/Contact";
import Skills from "./skills/Skills";
import Forum from "./forum/Forum";
import Registration from "./registration/Registration";
import Login from "./login/Login";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
