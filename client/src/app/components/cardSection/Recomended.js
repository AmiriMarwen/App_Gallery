import React from "react";
import logo1 from "./logo/logo1.png";
import logo2 from "./logo/logo2.png";
import logo3 from "./logo/logo3.png";
import logo4 from "./logo/logo4.png";
import logo5 from "./logo/logo5.png";
import logo6 from "./logo/logo6.png";
import logo7 from "./logo/logo7.png";
function Recomended() {
  return (
    <div className="max-w-6xl mx-auto px-5 mt-10">
      <div className="title flex justify-between items-start gap-2 my-2 font-normal">
        <h1>
          <i class="fab fa-get-pocket"></i> Best Recommends :
        </h1>
        <p class="text-sm font-semibold self-end">MORE</p>
      </div>
      <div class="w-auto border-t-2 border-gray-200"></div>

      <div className="cardgroup mt-3 grid grid-cols-2 gap-3 ">
        {/* single card */}
        <div className="single-card p-4 space-x-4 flex justify-between items-start shadow-sm">
          <div className="card-logo">
            <img class="h-24" src={logo1} alt="AppLogo" />
          </div>
          <div className="card-desc">
            <h3 class="font-medium text-xl">Troll Master - Draw One</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          </div>
          <div className="card-button self-center">
            <button class="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-400 text-white">
              <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
        {/* single card */}

        {/* single card */}
        <div className="single-card p-4 space-x-4 flex justify-between items-start shadow-sm">
          <div className="card-logo">
            <img class="h-24" src={logo1} alt="AppLogo" />
          </div>
          <div className="card-desc">
            <h3 class="font-medium text-xl">Troll Master - Draw One</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          </div>
          <div className="card-button self-center">
            <button class="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-400 text-white">
              <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
        {/* single card */}

        {/* single card */}
        <div className="single-card p-4 space-x-4 flex justify-between items-start shadow-sm">
          <div className="card-logo">
            <img class="h-24" src={logo1} alt="AppLogo" />
          </div>
          <div className="card-desc">
            <h3 class="font-medium text-xl">Troll Master - Draw One</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          </div>
          <div className="card-button self-center">
            <button class="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-400 text-white">
              <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
        {/* single card */}

        {/* single card */}
        <div className="single-card p-4 space-x-4 flex justify-between items-start shadow-sm">
          <div className="card-logo">
            <img class="h-24" src={logo1} alt="AppLogo" />
          </div>
          <div className="card-desc">
            <h3 class="font-medium text-xl">Troll Master - Draw One</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          </div>
          <div className="card-button self-center">
            <button class="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-400 text-white">
              <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
        {/* single card */}

        {/* single card */}
        <div className="single-card p-4 space-x-4 flex justify-between items-start shadow-sm">
          <div className="card-logo">
            <img class="h-24" src={logo1} alt="AppLogo" />
          </div>
          <div className="card-desc">
            <h3 class="font-medium text-xl">Troll Master - Draw One</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          </div>
          <div className="card-button self-center">
            <button class="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-400 text-white">
              <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
        {/* single card */}

        {/* single card */}
        <div className="single-card p-4 space-x-4 flex justify-between items-start shadow-sm">
          <div className="card-logo">
            <img class="h-24" src={logo1} alt="AppLogo" />
          </div>
          <div className="card-desc">
            <h3 class="font-medium text-xl">Troll Master - Draw One</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          </div>
          <div className="card-button self-center">
            <button class="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-400 text-white">
              <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
        {/* single card */}
      </div>
    </div>
  );
}

export default Recomended;
