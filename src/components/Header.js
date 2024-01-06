import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="no img" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Internet connection: {onlineStatus ? "✅" : "🅾️"}</li>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About us </Link>
          </li>
          <li>
            <Link to="/contact"> Contact us </Link>
          </li>
          <li>
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li>cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
