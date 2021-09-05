import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClickOutHandler from "react-clickout-handler";
import * as RiIcons from "react-icons/ri";
import "./Logbar.css";

export const Login = () => {
  const [LoginMenuVisibility, setLoginMenuVisibility] = useState("hidden");
  function toggleLoginMenu() {
    if (LoginMenuVisibility === "hidden") {
      setLoginMenuVisibility("block");
    } else {
      setLoginMenuVisibility("hidden");
    }
  }

  return (
    <div className="login-navbar">
      <Link
        to="#"
        className="login-navbar-logo"
        onClick={() => toggleLoginMenu()}
      >
        <RiIcons.RiAccountPinCircleLine className="h-6 w-6 hover:text-white" />
      </Link>
      <ClickOutHandler onClickOut={() => setLoginMenuVisibility("hidden")}>
        <div
          className={`login-items absolute top-10 right-5 ${LoginMenuVisibility}`}
        >
          <Link to="/login" className="login-navbar-item">
            <RiIcons.RiUser3Line className="login-navbar-icon" />
            <p>Log in / Sign up</p>
          </Link>
        </div>
      </ClickOutHandler>
    </div>
  );
};
{
  /* <IconContext.Provider value={{ color: "#fff" }}></IconContext.Provider> */
}
