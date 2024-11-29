import React from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Pricing from "./Components/Pricing";
import Currency from "./Components/Currency";
import Content from "./Components/Content";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Pricing />
      <Currency />
      <Content />
    </div>
  );
};

export default App;
