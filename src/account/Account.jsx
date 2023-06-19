import Logout from "../logout/Logout.jsx";

const Account = () => {
  return (
    <>
      <div>
        Welcome to your account (private page based on authentication/login)
        <div className="bigbox">
          <Logout />
        </div>
      </div>
    </>
  );
};

export default Account;
