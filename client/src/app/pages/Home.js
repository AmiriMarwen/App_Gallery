import React from "react";
import Hero from "../components/HeroSection/Hero";
import Latestsection from "../components/cardSection/Latestsection";
import Trendingsection from "../components/cardSection/Trendingsection";
import Recomended from "../components/cardSection/Recomended";

// import Slidersection from "../components/slider/Slidersection";

export const Home = () => (
  <div className="home">
    <div className="main">
      <Hero />
      <Latestsection />
      <Trendingsection />
      <Recomended />
    </div>
  </div>
);
