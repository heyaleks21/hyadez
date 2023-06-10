import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./registration.css";

const Registration = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Error: passwords do not match");
      } else if (password.length < 6) {
        isValid = false;
        setError("Error: password minimum length is under 6");
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          console.log(userCredential);
          console.log(userCredential.user);
          navigate("/account");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <>
      <div>
        <div className="form">
          <div className="form-body">
            <h2 className="heading-registration">Register</h2>
            {error && <div className="credential-error">{error}</div>}
            <div className="form-contents">
              <label htmlFor="" className="form__label">
                Username
              </label>
              <input
                type="text"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="form__input"
                required
              />
            </div>
            <div className="form-contents">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="form__input"
                required
              />
            </div>

            <div className="form-contents">
              <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                type="password"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="form__input"
                required
              />
            </div>

            <div className="form-contents">
              <label htmlFor="confirmPassword" className="form__label">
                Confirm password
              </label>
              <input
                type="text"
                label="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="form__input"
                required
              />
            </div>

            <form onSubmit={register} className="footer footer2">
              <button className="btn" type="submit">
                Sign up
              </button>
            </form>
            <div className="footer">
              <p className="txt">
                Already have an account? <NavLink to="/login">Sign in</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
