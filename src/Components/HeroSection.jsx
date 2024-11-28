import React from "react";
import image1 from "../assets/Images/slide1.png";
import image2 from "../assets/Images/slide2.png";

const HeroSection = () => {
  return (
    <section className="">
      <div className="max-h-full bg-gradient-to-b from-white to-gray-100 flex items-center justify-center pb-20 p-6">
        <div className="flex flex-col lg:flex-row max-w-7xl items-center lg:items-start">
          <div className="lg:w-[50%] space-y-8 mt-20">
            <h1 className="font-black tracking-[12px] text-4xl text-center lg:text-6xl text-transparent text-stroke bg-clip-text bg-gradient-to-tl from-[#FF5E00] to-[#FF9D00]">
              Buy Reddit Upvotes
            </h1>
            <p className="text-[20px] text-[#FF5A04] font-bold text-center">
              Boost your posts, dominate your conversion
            </p>
            <div className="space-y-2 flex flex-col items-center">
              <p className="flex items-center text-[14px] lg:text-[16px] font-medium text-[#2d2624]">
                <span className="lg:w-2 lg:h-2 h-1.5 w-1.5 bg-[#2d2624] rounded-full mr-3"></span>
                Get trending by sending instant upvotes to any post or
                commentes.
              </p>
              <p className="flex items-center text-[14px] lg:text-[16px] font-medium text-[#2d2624]">
                <span className="lg:w-2 lg:h-2 h-1.5 w-1.5 bg-[#2d2624] rounded-full mr-3"></span>
                Take control of comments on your posts by upvotes and downvotes
              </p>
            </div>
            <div className="flex justify-center items-center pt-5">
              <button className="px-8 py-1.5 text-[rgb(255,87,0)] border border-solid font-bold border-[rgb(255,87,0)] rounded-full hover:bg-orange-500 hover:text-white transition">
                Dashboard
              </button>
            </div>
          </div>

          <div className="lg:w-[50%] mt-10 lg:mt-0 relative slide-image">
            <div className="flex flex-row space-y-6">
              <div className="flex mt-10">
                <img
                  src={image1}
                  alt="Example 1"
                  className="w-[30%] -skew-x-[15deg]"
                />
                <img
                  src={image2}
                  alt="Example 2"
                  className="w-[50%] h-auto -skew-x-[15deg]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
