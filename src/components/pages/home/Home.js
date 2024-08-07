import React from "react";
import HomeSlide from "./HomeSlide";
import "./Home.css";
import HomeWelcome from "./HomeWelcome";
import HomeArrivals from "./HomeArrivals";
import HomeAdvert from "./HomeAdvert";
import HomeSales from "./HomeSales";
import HomeDelivery from "./HomeDelivery";
import HomeCounterUp from "./HomeCounterUp";
import HomeVideo from "./HomeVideo";
import HomeCategory from "./HomeCategory";
import Homeproducts from "./Homeproducts";

export default function Home() {
  return (
    <div className="home_container">
      <HomeVideo />
      <HomeWelcome/>
      <HomeCategory />
      <Homeproducts />
      <HomeSlide/>
      <HomeArrivals/>
      <HomeAdvert/>
      <HomeSales/>
      <HomeDelivery />
      <HomeCounterUp />
    </div>
  );
}
