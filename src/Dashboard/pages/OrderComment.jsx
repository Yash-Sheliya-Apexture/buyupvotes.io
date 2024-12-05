import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

const OrderComment = () => {
  return (
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
          <h3 className="text-light-gray font-medium">Order Comments</h3>
        </div>
      </div>

      <div className="p-4">
        <div className="border border-gray-border rounded-md p-4 bg-white shadow-md">
          <h1 className="text-small font-semibold text-light-red underline underline-offset-1 mb-2">
            <u>Please read instructions carefully before placing an order:</u>
          </h1>
          <p className="text-sub-color text-small font-normal leading-6 mb-4">
            This service allows you to generate and automate Reddit comments
            using our extensive network of Reddit accounts. Each automated
            comment will deduct 10 upvotes from your balance. Comment upvotes
            can also be applied automatically and cost the same as a regular
            order of upvotes.
          </p>

          <div className="flex justify-between items-center mb-4">
            {/* Left Side */}
            <div className="w-1/2">
              <h3 className="font-medium text-small text-sub-color underline underline-offset-1">
                Custom comments:{" "}
              </h3>
              <div className="flex items-center my-2 space-x-20">
                <p className="text-small text-sub-color">
                  Minimum quantity: <span className="font-black">1</span>
                </p>
                <p className="text-small text-sub-color">
                  Maximum quantity: <span className="font-black">75</span>
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-1/2">
              <h3 className="font-medium text-small text-sub-color underline underline-offset-1">
                Comment upvotes (per comment):
              </h3>
              <div className="flex items-center my-2 space-x-20">
                <p className="text-small text-sub-color">
                  Minimum quantity: <span className="font-black">5</span>
                </p>
                <p className="text-small text-sub-color">
                  Maximum quantity: <span className="font-black">1000</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mb-4">
            <hr className="w-[80%] text-sub-color" />
          </div>

          <div className="flex mb-4">
            <p className="text-sub-color text-small underline underline-offset-1 font-medium">
              Links can be inserted in the following format: &nbsp;
            </p>
            <span className="text-sub-color font-black">
              [link text](https://yourlink.com)
            </span>
          </div>

          <div className="flex mb-4">
            <p className="text-sub-color text-small underline underline-offset-1 font-medium">
              To make a new line in the comment, include the text: &nbsp;
            </p>
            <span className="text-sub-color font-black"> [newline]</span>
          </div>

          <p className="text-sub-color text-small font-medium mb-4">
            Comments are made with aged but low-karma accounts and{" "}
            <span className="font-black">are not guaranteed to go through</span>{" "}
            due to Reddit's spam filters or a subreddit's karma requirements.
          </p>

          <p className="text-sub-color text-small font-medium mb-4">
            Due to the high amount of resources spent on making a comment,{" "}
            <span className="font-black">we do not provide refunds</span> for
            comment orders that do not go through. Please make sure to test this
            service before ordering in bulk.
          </p>
        </div>

        <div class="flex items-center gap-4 p-4 border-gray-border rounded-md bg-white shadow-md my-4">
          {/* Number Input */}
          <div class="flex flex-col w-[50%]">
            <div className="flex relative">
              <input
                type="text"
                className="w-full p-2 rounded-full border hover:border-black transition-all ease-in duration-200"
                placeholder="Number Of Comments"
              />
              <FaAngleDown className="absolute top-3 right-3" />
            </div>
          </div>

          <div class="flex flex-col w-[50%]">
            {/* Speed Input */}
            <div className="flex relative">
              <input
                type="text"
                className="w-full p-2 rounded-full border hover:border-black transition-all ease-in duration-200"
                placeholder="Speed"
              />
              <FaAngleDown className="absolute top-3 right-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComment;
