import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="form">
        <div className="form-body">
          <h2 className="heading-registration">Welcome to your account</h2>
          <h2 className="heading-registration">
            (private page based on authentication/login)
          </h2>

          <div className="footer footer2">
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
