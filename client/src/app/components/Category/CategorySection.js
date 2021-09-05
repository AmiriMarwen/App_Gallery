import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const CategorySection = (props) => {
  const category = props.category_url;
  const [categoryApps, setcategoryApps] = useState([]);

  useEffect(() => {
    // window.scrollTo(0, 0);
    axios
      .get(`http://localhost:1111/api/apps/${category}`)
      .then((res) => {
        setcategoryApps(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="max-w-6xl mx-auto px-1 mt-4 h-screen ">
      <div className="title flex justify-between items-start gap-2 my-2 font-normal">
        <h1 className="text-xl px-3">
          All
          <span className="rounded-lg bg-blue-500 text-white mx-1 p-1">
            {category}
          </span>
          Applications :
        </h1>
      </div>

      <div className="w-auto border-t-2 border-gray-400" />

      <div className="grid gap-2 mb-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Map for each card from db*/}
        {categoryApps.map((app) => (
          <a href={`/app/${app._id}`}>
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
                    {app.Size} MB <i className="far fa-save" />
                  </p>
                  <p className="text-xs font-medium">
                    {app.NumberOfDownloads} M{" "}
                    <i className="far fa-arrow-alt-circle-down" />
                  </p>
                </div>
              </div>
              <a className="md:hidden absolute right-10 px-2 leading-7 font-normal text-blue-500 rounded border-2 border-blue-500">
                GET
              </a>
            </div>
          </a>
        ))}
        {/* single card */}
      </div>
    </div>
  );
};

export default CategorySection;
