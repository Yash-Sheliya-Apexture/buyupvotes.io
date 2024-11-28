import React from "react";
import currency from "../assets/Images/payment_logos.png";

const Currency = () => {
  return (
    <div className="container py-10">
      <div className="flex flex-row justify-center items-center">
        <img
          src={currency}
          alt="Price"
          className="lg:h-14 md:h-10 xs:ml-10 ml-10"
        />
      </div>
    </div>
  );
};

export default Currency;
