import React from "react";
import blacklogo from "../../assets/img/blacklogo.svg";

export const Footersection = () => {
  return (
    <div className=" px-5 py-5 mt-5">
      <div class="h-1 my-3 ::before shadow-md"></div>
      <div className="footer-wraper max-w-6xl mx-auto flex justify-between items-start">
        <div className="logo">
          <img src={blacklogo} alt="footer logo" />
        </div>
        <div className="footer-links">
          <div className="contact font-normal">
            <p>©2021 APTOIDE.COM. All rights reserved</p>
          </div>
        </div>
        <div className="socials flex text-3xl space-x-4">
          <a href="#">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
