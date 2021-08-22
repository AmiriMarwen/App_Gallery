import React from "react";
import "react-router-dom";
import "../../../styles/main.css";
import Logo from "../../assets/img/logo.svg";
import { Navbar } from "../sidebar/Navbar";

export const NavMenue = () => (
  <div className="nav-wraper py-1 w-full bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
    <div className="max-w-6xl mx-auto px-3 flex justify-between justify-items-center items-center">
      <Navbar />

      <div className="logo">
        <img src={Logo} alt="Website Logo" />
      </div>

      <div className="search">
        <div class="flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div class="relative">
            {" "}
            <input
              type="text"
              class="h-8 w-80 pr-8 pl-5 z-0 focus:shadow focus:outline-none rounded-lg"
              placeholder=""
            />
            <div class="absolute top-1 right-3 ">
              {" "}
              <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
