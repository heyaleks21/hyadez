import { Outlet } from "react-router-dom";
import { useAuthValue } from "./AuthContext";
import Login from "./login/Login";
import Account from "./account/Account";

const PrivateRoutes = () => {
  const { currentUser } = useAuthValue();
  return currentUser ? (
    <div className="bigbox">
      <Account />
    </div>
  ) : (
    <div className="bigbox">
      <Login />
    </div>
  );
};

export default PrivateRoutes;
