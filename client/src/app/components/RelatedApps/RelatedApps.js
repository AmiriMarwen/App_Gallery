import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import * as RiIcons from "react-icons/ri";

function RelatedApps(props) {
  const category = props.category;
  const [apps, setApps] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`http://localhost:1111/api/apps/Video`)
      .then((res) => {
        setApps(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="mx-auto mb-8">
      <div className="cardgroup w-5/6 mx-auto mt-3 grid grid-cols-4 gap-1">
        {/* single card */}
        {apps.map((app) => (
          <div key={app.id} className="singlecard p-2">
            <div className="app-logo">
              <img className="h-32" src={app.Logo} />
            </div>
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
        ))}
        {/* single card */}
      </div>
      <div className="py-2 px-5 mt-1 font-normal text-center mb-32 shadow-sm border-t-2 hover:bg-blue-300">
        <a className="cursor-pointer">
          <i class="far fa-arrow-alt-circle-down mr-8"></i>
          Load More
        </a>
      </div>
      <div>...</div>
    </div>
  );
}

export default RelatedApps;
