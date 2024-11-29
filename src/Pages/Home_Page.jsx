import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import Pricing from "../Components/Pricing";

const Home_Page = () => {
  return (
    <div>
      <React.Fragment>
        <Header />
        <HeroSection />
        <Pricing />
      </React.Fragment>
    </div>
  );
};

export default Home_Page;
