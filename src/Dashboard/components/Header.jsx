import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import rocket from "../../assets/Images/rocket-1.png";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  const [showTooltip, setShowTooltip] = useState(false); // Tooltip state
  const [showMenu, setShowMenu] = useState(false); // Menu toggle state for small screens

  const toggleTooltip = () => {
    setShowTooltip((prev) => !prev); // Toggle tooltip visibility
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev); // Toggle mobile menu
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    /* Header Part Start */
    <section className="flex justify-end items-center lg:space-x-4 space-x-2 relative container lg:p-4 p-2">
      {/* Country Icon */}
      <button
        className="relative"
        onClick={toggleTooltip} // Toggle tooltip on click
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="rounded-md hover:blur-[1px] hover:scale-110 transition-all ease-linear duration-200"
          width="24"
          height="24"
          viewBox="0 0 32 24"
        >
          <g fill="none">
            <path fill="#F7FCFF" d="M0 0h32v24H0z"></path>
            <path
              fill="#E31D1C"
              d="M0 14.667v2h32v-2zm0 3.666v2h32v-2zm0-11v2h32v-2zM0 22v2h32v-2zm0-11v2h32v-2zM0 0v2h32V0zm0 3.667v2h32v-2z"
            ></path>
            <path fill="#2E42A5" d="M0 0h20v13H0z"></path>
          </g>
        </svg>
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute right-80  top-14 bg-[#dceff5] border border-gray-300 rounded-[10px] px-4 py-1.5 z-10">
          <div className="flex justify-between ap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="rounded-md"
              width="24"
              height="24"
              viewBox="0 0 32 24"
            >
              <g fill="none">
                <path fill="#F7FCFF" d="M0 0h32v24H0z"></path>
                <path
                  fill="#E31D1C"
                  d="M0 14.667v2h32v-2zm0 3.666v2h32v-2zm0-11v2h32v-2zM0 22v2h32v-2zm0-11v2h32v-2zM0 0v2h32V0zm0 3.667v2h32v-2z"
                ></path>
                <path fill="#2E42A5" d="M0 0h20v13H0z"></path>
              </g>
            </svg>
            <p className="text-sm text-black">English</p>
          </div>
        </div>
      )}

      {/* Icon Day */}
      <span className="svg-color icon-set"></span>

      <div className="relative">
        {/* Dropdown Button */}
        <button
          className="px-6 py-2.5 rounded-full bg-[#FF5700] flex items-center relative focus:outline-none"
          onClick={toggleDropdown}
        >
          <img
            src={rocket}
            alt="Rocket Icon"
            className="h-10 absolute top-0 left-0 animate-rocket"
          />
          <p className="text-white font-bold ml-6">
            Balance:{" "}
            <span className="underline underline-offset-1">100 Votes</span>
          </p>
          <FaAngleDown
            className={`text-white ml-2 transform transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-12 right-0 w-[100%] bg-gradient-to-t from-pink-100/50 rounded-[12px] border border-gray-200 z-10 transform transition-all duration-300 ease-in-out ${
            isDropdownOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <ul className="text-sm text-[#2D2624]">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => alert("Your ID :")}
            >
              Rudra Rudrasutariya003@gmail.com
            </li>
            <hr className="border-t border-dashed " />
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => alert("Home")}
            >
              Home
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => alert("Setting Menu")}
            >
              Settings
            </li>
            <hr className="border-t border-dashed " />
            <li
              className="px-4 py-2 hover:bg-gray-100 text-[#FF5630] font-bold cursor-pointer"
              onClick={() => alert("Sign Out Successfully")}
            >
              Sign Out
            </li>
          </ul>
        </div>
      </div>
    </section>
    /* Header Part End */
  );
};

export default Header;
