import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import back from "../../assets/Images/blue-background.png";
import Ordertable from "../pages/Ordertable";

const UpvoteOrder = () => {
  // State for toggling the dropdown
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Service"); // Default service
  const [isSpeedDropdownOpen, setSpeedDropdownOpen] = useState(false);
  const [selectedSpeed, setSelectedSpeed] = useState(""); // Default speed
  const [link, setLink] = useState(""); // Default link
  const [quantity, setQuantity] = useState(""); // Default quantity

  // Validation errors
  const [errors, setErrors] = useState({
    service: "",
    speed: "",
    link: "",
    quantity: "",
  });

  const validateLink = (url) => {
    // Regular expression for validating URLs
    const regex =
      /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9]{2,}(:[0-9]+)?(\/[^\s]*)?$/i;
    return regex.test(url);
  };

  const handleLinkChange = (e) => {
    const value = e.target.value;
    setLink(value);

    // Validate the link on each change
    if (value && !validateLink(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, link: "Invalid URL" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, link: "" }));
    }
  };

  const services = [
    "Post upvotes",
    "Post Downvotes",
    "Comment upvotes",
    "Comment Downvotes",
  ];

  const speeds = [
    "Slowest (1 vote/6 minutes)",
    "Ultra Slow (1 vote/5 minutes)",
    "Very Slow (1 vote/2 minutes)",
    "Slow (1 vote/minute)",
    "Normal (2 votes/minute)",
    "Fast (3 votes/minute)",
    "Very Fast (4 votes/minute)",
    "Fastest (5 votes/minute)",
  ];

  const validateForm = () => {
    const newErrors = {
      service: selectedService ? "" : "Service is required",
      speed: selectedSpeed ? "" : "Speed is required",
      link: link ? "" : "Link is required",
      quantity:
        quantity && !isNaN(quantity)
          ? ""
          : quantity === ""
          ? "quantity must be a `number` type, but the final value was: `NaN` (cast from the value `''`)"
          : "Quantity must be a number",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Displaying alert message
      alert("Order Submitted Successfully!");

      // Resetting the form after submission
      setSelectedService("");
      setSelectedSpeed("");
      setLink("");
      setQuantity("");
      setErrors({
        service: "",
        speed: "",
        link: "",
        quantity: "",
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="px-6">
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
        <div className="flex items-center justify-center bg-gray-50 mt-5">
          <div className="flex flex-wrap md:flex-nowrap w-full max-w-5xl md:space-y-0 md:space-x-8">
            <div className="w-full md:w-[50%] bg-white p-6 border-gray-border shadow-md rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Dropdown */}
                <div className="relative">
                  <div
                    className={`w-full border rounded-full p-2.5 ${
                      errors.service ? "border-red-500" : "border-gray-300"
                    } text-sub-color hover:border-black transition-all ease-in duration-150 flex justify-between items-center`}
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="text-sub-color">
                      {selectedService || "Service"}
                    </span>
                    <FaAngleDown
                      className={`text-black transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {errors.service && (
                    <p className="text-red-500 text-sm">{errors.service}</p>
                  )}
                  <ul
                    className={`absolute top-full left-0 w-full bg-white border rounded-small shadow-md p-1 mt-1 z-10 transition-transform duration-300 transform origin-top ${
                      isDropdownOpen
                        ? "scale-y-100 translate-y-0"
                        : "scale-y-0 translate-y-0 pointer-events-none"
                    }`}
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
                        className="p-2 text-sub-color hover:bg-gray-100 rounded-medium cursor-pointer"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Link"
                    value={link}
                    onChange={handleLinkChange}
                    className={`w-full border rounded-full p-2.5 ${
                      errors.link ? "border-red-500" : "border-gray-300"
                    } text-sub-color placeholder:text-sub-color hover:border-black transition-all ease-in duration-150`}
                  />
                  {errors.link && (
                    <p className="text-red-500 text-sm">{errors.link}</p>
                  )}
                </div>

                {/* Quantity Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className={`w-full border rounded-full p-2.5 ${
                      errors.quantity ? "border-red-500" : "border-gray-300"
                    } text-sub-color placeholder:text-sub-color hover:border-black transition-all ease-in duration-150`}
                  />
                  {errors.quantity && (
                    <p className="text-red-500 text-sm">{errors.quantity}</p>
                  )}
                </div>

                {/* Delivery Speed Dropdown */}
                <div className="relative">
                  <div
                    className={`w-full border rounded-full p-2.5 ${
                      errors.speed ? "border-red-500" : "border-gray-300"
                    } text-sub-color hover:border-black transition-all ease-in duration-150 flex justify-between items-center`}
                    onClick={() => setSpeedDropdownOpen(!isSpeedDropdownOpen)}
                  >
                    <span>{selectedSpeed || "Select Delivery Speed"}</span>
                    <FaAngleDown
                      className={`text-black transition-transform duration-200 ${
                        isSpeedDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {errors.speed && (
                    <p className="text-red-500 text-sm">{errors.speed}</p>
                  )}
                  <ul
                    className={`absolute top-full h-52 left-0 w-full bg-white border rounded-small shadow-md p-1 mt-1 z-10 transition-all duration-300 overflow-y-auto transform custom-scrollbar ${
                      isSpeedDropdownOpen
                        ? "scale-y-100 translate-y-0"
                        : "scale-y-0 -translate-y-4 pointer-events-none"
                    }`}
                    style={{
                      backgroundImage: `url(${back})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {speeds.map((speed, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSelectedSpeed(speed);
                          setSpeedDropdownOpen(false);
                        }}
                        className="p-2 text-sub-color hover:bg-gray-100 rounded-medium cursor-pointer"
                      >
                        {speed}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="border border-main-color text-main-color px-16 py-1.5 text-[14px] rounded-full font-bold"
                  >
                    Submit Order
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-[50%] bg-white p-4 border-gray-border shadow-md rounded-lg">
              <p className="text-[16px] font-medium underline underline-offset-1 text-[#2D2624] mb-2">
                Upvotes & downvotes:
              </p>
              <div className="space-y-4 text-gray-700">
                <div className="flex space-x-20 text-[#2D2624]">
                  <p>
                    Minimum quantity: <b className="font-black">5</b>
                  </p>
                  <p>
                    Maximum quantity: <b className="font-black">1000</b>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <hr className="w-[80%]" />
                </div>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-[#2D2624] font-black text-[14px]">
                    Mobile links are now accepted
                  </li>
                  <li className="text-[#2d2624] font-medium text-[14px]">
                    Links can only contain English characters
                  </li>
                </ul>
                <div className="flex justify-center items-center">
                  <hr className="w-[80%]" />
                </div>
                <p className="text-sm text-[#2D2624] font-medium leading-6">
                  Our upvotes/downvotes are the same as organic
                  upvotes/downvotes and will not get your account banned.
                  Unusual activity that results in users or moderators reporting
                  your account can still get you banned. Please choose your
                  order's upvote/downvote quantity wisely so as not to arouse
                  any suspicion.
                </p>
                <p className="text-[14px] text-[#2D2624] font-semibold">
                  *Upvotes on posts/comments older than 24 hours are not
                  guaranteed to go through. Downvotes are similarly not
                  guaranteed regardless of post/comment age.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5">
          <p className="text-center underline text-light-red underline-offset-1 text-[18px]">
            Due to Reddit's updated security measures, upvotes on certain
            subreddits are temporarily unavailable. If affected, the order will
            be canceled and refunded.
          </p>
        </div>

        {/* Order Tables */}
        <Ordertable />
      </div>
    </>
  );
};

export default UpvoteOrder;
