import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-24 " src={LOGO_URL} alt="no img" />
      </div>
      <div className="nav-item flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Internet connection: {onlineStatus ? "✅" : "🅾️"}
          </li>
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About us </Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact us </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="px-4">cart</li>
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
