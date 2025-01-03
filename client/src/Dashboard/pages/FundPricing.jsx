import React from "react";
import Pricing from "../../Components/Pricing";
import Customize_Payment from "../components/Customize_Payment";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const FundPricing = () => {
  return (
    <div className="container mx-auto">
      <Pricing />
      <Customize_Payment />
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <hr className="border border-gray-300/50 w-4/5" />
        </div>
        <h1 className="mb-4 text-base font-bold text-sub-color">
          Have any questions?
        </h1>
        <p className="font-medium text-sub-color text-small">
          Contact us and we'll get back to you as soon as possible.
        </p>
        <div className="my-6">
          <Link to="/dashboard/contactus">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FundPricing;
