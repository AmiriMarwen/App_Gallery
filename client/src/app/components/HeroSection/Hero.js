import React from "react";
import * as RiIcons from "react-icons/ri";

function Hero() {
  return (
    <div>
      <div class="hero-section bg-blue-200 w-full text-center">
        <h1 class="py-5 text-3xl text-white font-medium">
          All The Apps You need , Discover your new Android App Gallery
        </h1>
        <div class="text-gray-600">
          <input
            type="search"
            name="serch"
            placeholder="Search For Apps & Games"
            class="bg-white h-12 w-4/6 px-5 pr-10 rounded-2xl text-sm z-0"
          />
        </div>
        <div class="bg-white rounded-3xl h-20 w-1/4 mx-auto mt-5 flex justify-center items-center space-x-5 px-7 shadow-md">
          <div class="text-4xl">
            <RiIcons.RiCheckboxCircleLine />
          </div>
          <div class="h-10 border-r-2 border-blue-600"></div>
          <div>
            <h3 class="font-medium">Install Apptoid Application</h3>
            <p class="font-normal">100% Completely Free</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
