import { Outlet } from "react-router-dom";
import { useAuthValue } from "./AuthContext";
import Login from "./login/Login";
import Account from "./account/Account";

const PrivateRoutes = () => {
  const { currentUser } = useAuthValue();
  return currentUser ? <Account /> : <Login />;
};

export default PrivateRoutes;
