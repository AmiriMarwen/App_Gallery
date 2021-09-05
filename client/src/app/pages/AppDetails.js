import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import RelatedApps from "../components/RelatedApps/RelatedApps";

export const AppDetails = () => {
  const { id } = useParams();
  const [App, setsingleApp] = useState([]);
  const [AppScreens, setAppScreens] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`http://localhost:1111/api/app/${id}`)
      .then((res) => {
        setsingleApp(res.data);
        setAppScreens(res.data.Screens);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const thisCategory = App.Category;
  return (
    <div class="appDetails max-w-5xl mx-auto px-8 shadow-md mt-2 md:relative">
      <div className="mx-auto space-x-5 flex items-start py-8">
        <div className="mr-1">
          <img className="rounded-lg h-28" src={App.Logo} alt="" />
        </div>

        <div className="md:flex flex-row">
          <div className="">
            <div className="app-name text-xl font-normal">
              <h1 className="text-2xl md:text-4xl">{App.Name}</h1>
            </div>
            <div className="app-dev-team text-sm font-semibold text-blue-600">
              {App.Developer}
            </div>
            <div className="app-rating flex justify-start items-center text-sm font-thin">
              <div className="rating-number font-bold">
                {App.Rating}{" "}
                <i class="fa fa-star mr-2 checked" aria-hidden="true"></i>
                (Reviews)
              </div>
            </div>
          </div>

          <a
            href={App.DownloadLink}
            className="bg-blue-600 text-white leading-9 px-4 my-4 rounded-md shadow-md hover:shadow-lg md:mx-12 md:h-10 md:self-center md:absolute md:right-5"
          >
            Download <i class="fas fa-download text-xs mx-1"></i>
          </a>
        </div>
      </div>

      {/* application details nformations */}
      <div className="mx-auto flex justify-between items-center space-x-2">
        <div className="w-1/3 py-1">
          <h3 className="font-normal text-md">
            <i class="fas fa-exclamation-circle text-blue-600 text-sm mr-3"></i>
            version
          </h3>
          <p className="text-sm mt-1 font-medium">{App.Version}</p>
        </div>
        <div className="w-52 md:w-2/4 md:mx-auto text-center flex justify-around items-center space-x-12">
          <div className="app-nb-downloads">
            <i className="fab fa-android text-blue-600"></i>
            <p className="text-sm font-medium">{App.AndroidVersion}+</p>
          </div>
          <div className="app-size-mb">
            <i className="fas fa-chart-pie text-blue-600"></i>
            <p className="text-sm font-medium">{App.Size}MB</p>
          </div>
          <div className="app-android-version">
            <i className="fas fa-download text-blue-600"></i>
            <p className="text-sm font-medium">{App.NumberOfDownloads} M</p>
          </div>
        </div>
      </div>

      <div className="my-4 slider-flex">
        {AppScreens.map((screen) => (
          <div class="item slider-flex-item">
            <img src={screen} />
          </div>
        ))}
      </div>

      {/* application full dev-team description */}
      <div className="full-desc mt-8">
        <h3 className="text-xl font-medium">
          Description of Clash of Kings: Newly Presented Knight System
        </h3>
        <p className="text-sm mt-2">{App.Description}</p>
      </div>
      {/* disqus comment section */}

      {/* apps look like this app section */}

      <div className="text-xl my-2 font-normal">
        <h1>
          Apps like {App.Name} <i className="fas fa-sort-down" />
        </h1>
        <RelatedApps category={thisCategory} />
      </div>
    </div>
  );
};
