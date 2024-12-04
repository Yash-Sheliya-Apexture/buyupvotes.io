import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import back from "../../assets/Images/blue-background.png";

const UpvoteOrder = () => {
  // State for toggling the dropdown
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Service");
  const [isSpeedDropdownOpen, setSpeedDropdownOpen] = useState(false);

  const [selectedSpeed, setSelectedSpeed] = useState("Delivery Speed");

  // List of services for the dropdown
  const services = [
    "Post upvotes",
    "Post Downvotes",
    "Comment upvotes",
    "Comment Downvotes",
  ];

  const speeds = ["Normal", "Fast"];


  return (
    <div>
      <div className="p-4 container">
        <h1 className="text-sub-color font-bold text-basic mb-2">
          Order Upvotes
        </h1>
        <div className="flex space-x-4 items-center">
          <Link
            to="/dashboard"
            className="hover:underline text-sub-color font-medium"
          >
            Dashboard
          </Link>
          <span className="size-1.5 rounded-full bg-light-gray"></span>
          <h3 className="text-light-gray font-medium">Order Upvotes</h3>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center bg-gray-50 my-10">
        {/* Container */}
        <div className="flex flex-wrap md:flex-nowrap w-full max-w-5xl md:space-y-0 md:space-x-8">
          {/* Left Section */}
          <div className="w-full md:w-[50%] bg-white p-6 border-gray-border shadow-md rounded-lg cursor-pointer">
            <form className="space-y-6">
              {/* Service Dropdown */}
              <div className="relative">
                <div
                  className="w-full border rounded-full p-2.5 text-sub-color hover:border-black transition-all ease-in duration-150 flex justify-between items-center"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  <span>{selectedService}</span>
                  <FaAngleDown
                    className={`text-black transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul
                    className="absolute top-full left-0 w-full bg-white border rounded-small shadow-md p-1 mt-1 z-10 transition-all duration-200"
                    style={{
                      backgroundImage: `url(${back})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {services.map((service, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSelectedService(service);
                          setDropdownOpen(false);
                        }}
                        className="p-2 text-sub-color hover:bg-gray-100 cursor-pointer"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Link Input */}
              <div>
                <input
                  type="text"
                  placeholder="link"
                  className="w-full border rounded-full p-2.5 text-sub-color hover:border-black transition-all ease-in duration-150"
                />
              </div>

              {/* Quantity Input */}
              <div>
                <input
                  type="text"
                  placeholder="Quantity"
                  className="w-full border rounded-full p-2.5 text-sub-color hover:border-black transition-all ease-in duration-150"
                />
              </div>

              {/* Delivery Speed Dropdown */}
              <div className="relative">
                <div
                  className="w-full border rounded-full p-2.5 text-sub-color hover:border-black transition-all ease-in duration-150 flex justify-between items-center"
                  onClick={() => setSpeedDropdownOpen(!isSpeedDropdownOpen)}
                >
                  <span>{selectedSpeed}</span>
                  <FaAngleDown
                    className={`text-black transition-transform duration-200 ${
                      isSpeedDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {isSpeedDropdownOpen && (
                  <ul className="absolute top-full left-0 w-full bg-white border rounded-small shadow-md p-1 mt-1 z-10 transition-opacity duration-300">
                    {speeds.map((speed, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSelectedSpeed(speed);
                          setSpeedDropdownOpen(false);
                        }}
                        className="p-2 text-sub-color hover:bg-gray-100 cursor-pointer"
                      >
                        {speed}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-md font-bold hover:bg-orange-600"
                >
                  Submit order
                </button>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[50%] bg-white p-6 border-gray-border shadow-md rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Upvotes & downvotes:
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between text-sm">
                <span>Minimum quantity:</span>
                <span className="font-bold">5</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Maximum quantity:</span>
                <span className="font-bold">1000</span>
              </div>
              <ul className="list-disc list-inside space-y-2">
                <li>Mobile links are now accepted</li>
                <li>Links can only contain English characters</li>
              </ul>
              <p className="text-sm">
                Our upvotes/downvotes are the same as organic ones and will not
                get your account banned. However, unusual activity might still
                result in issues. Choose wisely to avoid suspicion.
              </p>
              <p className="text-xs text-gray-500">
                *Upvotes on posts/comments older than 24 hours are not
                guaranteed to go through. Downvotes are similarly not
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpvoteOrder;
