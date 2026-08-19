import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStaus from "../utils/useOnlineStaus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStaus();
  return (
    <div className="flex justify-between shadow-blue-100 shadow-md p-4">
      <div className="logo-container">
        <img className="w-60" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 py-2">Online Staus: {isOnline ? "✅" : "🔴"}</li>
          <li className="px-4 py-2">
            <Link className="card-link" to="/">
              Home
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link className="card-link" to="/about">
              About
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link className="card-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link className="card-link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4 py-2">Cart</li>
          <li className="px-4 py-2">
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
