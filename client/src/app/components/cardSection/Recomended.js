import React, { useState, useEffect } from "react";
import axios from "axios";
import * as RiIcons from "react-icons/ri";
import { post } from "jquery";
import { Link } from "react-router-dom";


function Recomended() {
  const [Rapps, setRApps] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("http://localhost:1111/api/apps")
      .then((res) => {
        setRApps(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="px-4 md:max-w-7xl mx-auto mt-10">
      <div className="w-full text-xl font-normal flex justify-between md:text-2xl">
        <h1 className="">
          <i class="fab fa-get-pocket mr-2"></i>Best Recomended :
        </h1>
        <p class="">
          <i class="fas fa-angle-double-right"></i>
        </p>
      </div>
      <div class="w-auto border-t-2 border-gray-400"></div>
      <div className="w-full mt-2 grid grid-cols-2 md:grid-cols-4 gap-2 lg:grid-cols-6 gap-1">
        {/* single card */}
        {Rapps.map((app) => (
          <Link to={`/app/${app._id}`}>
            <div
              key={app.id}
              className="h-24 flex items-center shadow-md leading-3"
            >
              <img className="h-16 rounded-xl m-2" src={app.Logo} alt="" />

              <div className="">
                <h3 className="w-auto text-base font-normal">{app.Name}</h3>
                <a className="text-xs rounded-lg px-2 text-white font-bold bg-blue-500">
                  {app.Category}
                </a>
                <div className="w-full flex font-normal mt-1 space-x-2">
                  <div className="text-xs">{app.Size}MB</div>
                  <div className="text-xs">{app.NumberOfDownloads}M</div>
                  <div className="text-xs">
                    {app.Rating}
                    <i class="far fa-star text-blue-600 text-xs"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Recomended;