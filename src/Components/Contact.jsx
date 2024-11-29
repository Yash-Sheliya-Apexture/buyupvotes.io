import React from "react";
import Rocket from "../assets/Images/rocket.webp";
import { FaUpRightFromSquare } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="pt-10">
        <h1 className="text-center text-[24px] font-bold text-[#2D2624]">
          Have any questions?
        </h1>
        <p className="lg:text-[18px] text-[16px] text-[#403633] mt-3 mb-6 text-center">
          Contact us and we'll get back to you as soon as possible.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="py-2 px-20 border-2 align-middle border-[#FF5700] text-[#FF5700] hover:text-[#fff] font-bold text-[16px] rounded-full hover:bg-[#FF5700] transition-all ease-in duration-300"
          >
            Contact us
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <section className="lg:container mx-auto xs:p-4" >
        <div className="bg-[#FF4C00] my-10 rounded-[30px] pb-6">
          <div className="flex flex-wrap items-center lg:flex-nowrap">
            {/* Left Side: Image */}
            <div className="w-full lg:w-[40%] flex justify-center lg:justify-start">
              <img
                src={Rocket}
                alt="Rocket"
                className="max-w-[350px] md:max-w-[500px] lg:max-w-full animate-float"
              />
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-[60%] text-center lg:text-left mt-10 lg:mt-0">
              <h1 className="text-white text-[24px] md:text-[32px] lg:text-[50px] font-black leading-tight">
                Buy upvotes today & <br /> get instant delivery!
              </h1>
              <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start space-y-4 md:space-y-0 md:space-x-4">
                {/* Sign In Button */}
                <button className="bg-white text-[#FF5700] font-bold px-20 py-1.5 rounded-full transition-all hover:bg-[#454F5B] hover:text-white">
                  Sign in
                </button>

                {/* Sign Up Button */}
                <button className="text-white font-bold lg:px-20 px-16 py-1.5 rounded-full border-2 border-transparent flex items-center transition-all hover:border-white">
                  Sign up
                  <FaUpRightFromSquare className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
