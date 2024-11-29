import React from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Pricing from "./Components/Pricing";
import Currency from "./Components/Currency";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div> 
      <Header />
      <HeroSection />
      <Pricing />
      <Currency />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
