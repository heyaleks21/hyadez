import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./contact-form/Contact";
import Forum from "./forum/Forum";
import Registration from "./registration/Registration";
import PrivateRoutes from "./PrivateRoute";
import Login from "./login/Login";
import Account from "./account/Account";
import { AuthProvider } from "./AuthContext";
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const RouteSwitch = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider value={{ currentUser }}>
        <Routes>
          <Route
            exact
            path="/account"
            element={
              <PrivateRoutes>
                <Account />
              </PrivateRoutes>
            }
          />
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />
          <Route
            path="/contact"
            element={
              <div className="bigbox">
                <Contact />
              </div>
            }
          />
          <Route
            path="/forum"
            element={
              <div className="bigbox">
                <Forum />
              </div>
            }
          />
          <Route
            path="/registration"
            element={
              <div className="bigbox">
                <Registration />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="bigbox">
                <Login />
              </div>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
