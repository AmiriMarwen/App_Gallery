import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Disqus from "../components/disqus/Disqus";
import RelatedApps from "../components/RelatedApps/RelatedApps";

export const AppDetails = () => {
  const { id } = useParams();
  const [App, setsingleApp] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`http://localhost:1111/api/app/${id}`)
      .then((res) => {
        console.log(res);
        setsingleApp(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div class="appDetails max-w-4xl mx-auto px-12 shadow-md mt-10">
      <div className="app-wrapper flex justify-start items-center py-8 w-full">
        <div className="app-logo ">
          <img className="h-32" src={App.Logo} alt="" />
        </div>
        <div className="app-desc self-start ml-5 w-1/2">
          <div className="app-name text-4xl font-normal">
            <h1>{App.Name}</h1>
          </div>
          <div className="app-dev-team text-sm font-semibold text-blue-600">
            {App.Developer}
          </div>
          <div className="app-rating flex justify-start items-center text-sm font-thin">
            <div className="rating space-x-1">
              <span className="fa fa-star text-sm ml-0 checked"></span>
              <span className="fa fa-star text-sm checked"></span>
              <span className="fa fa-star text-sm checked"></span>
              <span className="fa fa-star text-sm"></span>
              <span className="fa fa-star text-sm"></span>
            </div>
            <div className="rating-number ml-3 font-normal">
              {App.Rating} (3086 Reviews)
            </div>
          </div>
        </div>
        <div className="app-download-link flex justify-center items-center space-x-5">
          <a
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-normal text-xl px-4 py-2 rounded-md"
            href={App.DownloadLink}
          >
            <i className="far fa-arrow-alt-circle-down"></i> Download
          </a>
        </div>
      </div>

      {/* application details nformations */}
      <div className="app-info flex justify-between items-center">
        <div className="app-version">
          <h3 className="font-bold text-xl">This is the latest version</h3>
          <p className="text-sm font-normal mt-1">{App.Version} (19-08-2021)</p>
        </div>
        <div className="app-other text-center flex justify-between items-center space-x-5">
          <div className="app-nb-downloads">
            <i className="fab fa-android text-xl text-blue-600"></i>
            <p className="text-sm font-bold">{App.AndroidVersion}+</p>
          </div>
          <div className="app-size-mb">
            <i className="fas fa-chart-pie text-xl text-blue-600"></i>
            <p className="text-sm font-bold">{App.Size}MB Size</p>
          </div>
          <div className="app-android-version">
            <i className="fas fa-download text-xl text-blue-600"></i>
            <p className="text-sm font-bold">
              {App.NumberOfDownloads}M Downloads
            </p>
          </div>
        </div>
      </div>

      {/* applications screens */}
      {/* application full dev-team description */}
      <div className="full-desc mt-8">
        <h3 className="text-2xl font-medium">
          Description of Clash of Kings: Newly Presented Knight System
        </h3>
        <p className="text-base mt-2">{App.Description}</p>
      </div>
      {/* disqus comment section */}

      <Disqus />
      {/* apps look like this app section */}
      
      <div className="text-xl my-2 font-normal">
        <h1>
          Apps like {App.Name} <i class="fas fa-sort-down"></i>
        </h1>
      </div>
      <RelatedApps category={App.Category} />
    </div>
  );
};
