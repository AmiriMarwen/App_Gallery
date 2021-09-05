import React from "react";
import blacklogo from "../../assets/img/blacklogo.svg";

export class Footersection extends React.Component {
  render() {
    return (
      <div className="px-5 py-2 mt-5">
        <div className="h-1 my-3 ::before shadow-md" />
        <div className="max-w-6xl mx-auto flex justify-between items-start">
          <div className="logo">
            <img className="h-8" src={blacklogo} alt="footer logo" />
          </div>
          <div className="footer-links"></div>
          <div className="socials flex md:text-3xl space-x-4">
            <a href="#">
              <i className="fab fa-facebook" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="w-full text-center text-base font-normal italic">
          <p>©2021 All rights reserved</p>
        </div>
      </div>
    );
  }
}
