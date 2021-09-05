import React, { useState, useEffect } from "react";
import axios from "axios";
import * as RiIcons from "react-icons/ri";
import { post } from "jquery";
import { Link } from "react-router-dom";


function Latestsection() {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("http://localhost:1111/api/apps")
      .then((res) => {
        setApps(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="px-4 md:max-w-7xl mx-auto mt-10 mb-10">
      <div className="w-full text-xl font-normal flex justify-between md:text-2xl">
        <h1 className="">
          <i className="fab fa-get-pocket mr-2" />
          Latest Applications :
        </h1>
        <p className="">
          <i class="fas fa-angle-double-right"></i>
        </p>
      </div>
      <div className="w-auto border-t-2 border-gray-400 mb-2" />
      <div className="grid gap-2 mb-4 md:grid-cols-2 lg:grid-cols-4">
        {/* single card */}
        {apps.map((app) => (
          <Link to={`/app/${app._id}`}>
            <div key={app.id}>
              <div className="flex items-center p-1 bg-white border-2 border-gray-200 rounded-lg shadow-sm md:h-24">
                <div className="p-1 mr-1 text-white rounded-full">
                  <img className="max-h-16" src={app.Logo} alt="" />
                </div>
                <div className="">
                  <h2 className="mb-1 my-auto text-xl font-medium text-gray-700 self-center">
                    {app.Name}
                  </h2>
                  <div className="flex space-x-2 text-sm font-normal text-gray-600">
                    <p className="text-xs font-bold px-1 rounded-lg border-2 border-blue-600">
                      {app.Category}
                    </p>
                    <p className="text-xs font-medium">
                      {app.Size} MB <i class="far fa-save"></i>
                    </p>
                    <p className="text-xs font-medium">
                      {app.NumberOfDownloads} M{" "}
                      <i class="far fa-arrow-alt-circle-down"/>
                    </p>
                  </div>
                </div>
                <a
                  className="md:hidden absolute right-10 px-2 leading-7 font-normal text-blue-500 rounded border-2 border-blue-500"
                  href={`/app/${app._id}`}
                >
                  GET
                </a>
              </div>
            </div>
          </Link>
        ))}

        {/* single card */}
      </div>
    </div>
  );
}

export default Latestsection;