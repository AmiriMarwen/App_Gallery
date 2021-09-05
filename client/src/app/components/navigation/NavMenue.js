import React from "react";
import "react-router-dom";
import "../../../styles/main.css";
import Logo from "../../assets/img/logo.svg";
import { Navbar } from "../sidebar/Navbar";
import { Login } from "../login/Login";
import { Link } from "react-router-dom";

export const NavMenue = () => (
  <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
    <div className="max-w-4xl relative mx-auto flex justify-center items-center px-4">
      <Navbar />
      <div className="mx-auto md:mx-auto sm:mx-auto">
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>
      <Login />
    </div>
  </div>
);
