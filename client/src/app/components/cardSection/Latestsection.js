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
    <div className="max-w-6xl mx-auto px-5 mb-8">
      <div className="title my-2 font-normal">
        <h1>
          <i className="fas fa-th-large text-xl"></i> Latest Applications :
        </h1>
      </div>
      <div className="cardgroup mt-3 grid grid-cols-6 gap-4 ">
        {/* Map for each card from db*/}
        {apps.map((app) => (
          <Link to={`/app/${app._id}`}>
            <div key={app.id} className="singlecard h-full px-1 shadow">
              <div className="app-logo">
                <img className="h-32 mx-auto" src={app.Logo} />
              </div>
              <div className="px-2 mt-1">
                <div className="app-name font-semibold">{app.Name}</div>
                <div className="app-rating-stars space-x-1">
                  <span className="fa fa-star text-sm ml-0 checked"></span>
                  <span className="fa fa-star text-sm checked"></span>
                  <span className="fa fa-star text-sm checked"></span>
                  <span className="fa fa-star text-sm"></span>
                  <span className="fa fa-star text-sm"></span>
                </div>
                <div className="app-size font-normal">{app.Size}MB</div>
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
