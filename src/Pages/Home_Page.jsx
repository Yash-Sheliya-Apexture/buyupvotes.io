import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import Pricing from "../Components/Pricing";
import Currency from "../Components/Currency";
import Contact from "../Components/Contact";

const Home_Page = () => {
  return (
    <div>
      <React.Fragment>
        <Header />
        <HeroSection />
        <Pricing />
        <Currency />
        <Contact />
      </React.Fragment>
    </div>
  );
};

export default Home_Page;
