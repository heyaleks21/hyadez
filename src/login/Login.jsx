import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError("Error: invalid credentials");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main className="form-leader">
        <section className="form">
          <div className="form-body">
            <h2 className="heading-registration">Login</h2>
            {error && <div className="password-error">{error}</div>}
            <form>
              <div className="form-contents">
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
                <input
                  className="form__input"
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-contents">
                <label htmlFor="password" className="form__label">
                  Password
                </label>
                <input
                  className="form__input"
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="footer footer2">
                <button className="btn" onClick={onLogin}>
                  Login
                </button>
              </div>
              <div className="footer">
                <p className="txt">
                  No account yet? <NavLink to="/registration">Sign up</NavLink>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
