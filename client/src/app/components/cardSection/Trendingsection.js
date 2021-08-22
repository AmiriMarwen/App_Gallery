import React from "react";
import * as RiIcons from "react-icons/ri";
import logo from "./logo/logo.png";
import logo1 from "./logo/logo1.png";
import logo2 from "./logo/logo2.png";
import logo3 from "./logo/logo3.png";
import logo4 from "./logo/logo4.png";
import logo5 from "./logo/logo5.png";

function Trendingsection() {
  return (
    <div className="max-w-6xl mx-auto px-5 mt-10">
      <div className="title flex justify-between items-start gap-2 my-2 font-normal">
        <h1>
          <i class="px-2 fas fa-fire"></i>Trending Applications :
        </h1>
        <p class="text-sm font-semibold self-end">MORE</p>
      </div>

      <div class="w-auto border-t-2 border-gray-400"></div>

      <div className="cardgroup mt-3 grid grid-cols-3 gap-3 ">
        {/* single card */}
        <div className="single-card flex justify-start">
          <div className="card-logo">
            <img class="h-20" src={logo1} alt="" />
          </div>
          <div className="card-info ml-5">
            <div className="card-title font-normal">
              <h2>Garena Free Fire - Rampage</h2>
            </div>
            <div className="card-desc text-sm font-normal">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>size : 25MB</p>
            </div>
          </div>
        </div>
        {/* single card */}

        {/* single card */}
        <div className="single-card flex justify-start">
          <div className="card-logo">
            <img class="h-20" src={logo} alt="" />
          </div>
          <div className="card-info ml-5">
            <div className="card-title font-normal">
              <h2>Garena Free Fire - Rampage</h2>
            </div>
            <div className="card-desc text-sm font-normal">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>size : 25MB</p>
            </div>
          </div>
        </div>
        {/* single card */}

        {/* single card */}
        <div className="single-card flex justify-start">
          <div className="card-logo">
            <img class="h-20" src={logo5} alt="" />
          </div>
          <div className="card-info ml-5">
            <div className="card-title font-normal">
              <h2>Garena Free Fire - Rampage</h2>
            </div>
            <div className="card-desc text-sm font-normal">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>size : 25MB</p>
            </div>
          </div>
        </div>
        {/* single card */}

        {/* single card */}
        <div className="single-card flex justify-start">
          <div className="card-logo">
            <img class="h-20" src={logo3} alt="" />
          </div>
          <div className="card-info ml-5">
            <div className="card-title font-normal">
              <h2>Garena Free Fire - Rampage</h2>
            </div>
            <div className="card-desc text-sm font-normal">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>size : 25MB</p>
            </div>
          </div>
        </div>
        {/* single card */}

        {/* single card */}
        <div className="single-card flex justify-start">
          <div className="card-logo">
            <img class="h-20" src={logo4} alt="" />
          </div>
          <div className="card-info ml-5">
            <div className="card-title font-normal">
              <h2>Garena Free Fire - Rampage</h2>
            </div>
            <div className="card-desc text-sm font-normal">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>size : 25MB</p>
            </div>
          </div>
        </div>
        {/* single card */}

        {/* single card */}
        <div className="single-card flex justify-start">
          <div className="card-logo">
            <img class="h-20" src={logo1} alt="" />
          </div>
          <div className="card-info ml-5">
            <div className="card-title font-normal">
              <h2>Garena Free Fire - Rampage</h2>
            </div>
            <div className="card-desc text-sm font-normal">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>size : 25MB</p>
            </div>
          </div>
        </div>
        {/* single card */}

        {/* single card */}
        <div className="single-card flex justify-start">
          <div className="card-logo">
            <img class="h-20" src={logo5} alt="" />
          </div>
          <div className="card-info ml-5">
            <div className="card-title font-normal">
              <h2>Garena Free Fire - Rampage</h2>
            </div>
            <div className="card-desc text-sm font-normal">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>size : 25MB</p>
            </div>
          </div>
        </div>
        {/* single card */}

        {/* single card */}
        <div className="single-card flex justify-start">
          <div className="card-logo">
            <img class="h-20" src={logo3} alt="" />
          </div>
          <div className="card-info ml-5">
            <div className="card-title font-normal">
              <h2>Garena Free Fire - Rampage</h2>
            </div>
            <div className="card-desc text-sm font-normal">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>size : 25MB</p>
            </div>
          </div>
        </div>
        {/* single card */}

        {/* single card */}
        <div className="single-card flex justify-start">
          <div className="card-logo">
            <img class="h-20" src={logo} alt="" />
          </div>
          <div className="card-info ml-5">
            <div className="card-title font-normal">
              <h2>Garena Free Fire - Rampage</h2>
            </div>
            <div className="card-desc text-sm font-normal">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>size : 25MB</p>
            </div>
          </div>
        </div>
        {/* single card */}
      </div>
    </div>
  );
}

export default Trendingsection;

