import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStaus from "../utils/useOnlineStaus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStaus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Staus: {isOnline ? "✅" : "🔴"}</li>
          <li>
            <Link className="card-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="card-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="card-link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="card-link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <li>
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
