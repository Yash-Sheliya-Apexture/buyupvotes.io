import React, { useState } from "react";
import Data from "../../assets/Images/nodata.svg";
import { FiSearch } from "react-icons/fi";

const Ordertable = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    {
      label: "All",
      count: 0,
      color: "bg-[#919EAB29] text-para-color",
      colors: "bg-black text-white",
    },
    {
      label: "Pending",
      count: 0,
      color: "bg-[#FFAB0029] text-[#B76E00]",
      colors: "bg-[#FFAB00] text-[#212B36]",
    },
    {
      label: "In Progress",
      count: 0,
      color: "bg-[#22C55E29] text-[#118D57]",
      colors: "bg-[#22C55E] text-white",
    },
    {
      label: "Completed",
      count: 0,
      color: "bg-[#22C55E29] text-[#118D57]",
      colors: "bg-[#22C55E] text-white",
    },
    {
      label: "Partial",
      count: 0,
      color: "bg-[#919EAB29] text-para-color",
      colors: "bg-sub-color text-white",
    },
    {
      label: "Canceled",
      count: 0,
      color: "bg-[#FF563029] text-[#B71D18]",
      colors: "bg-light-orange text-white",
    },
  ];

  return (
    <div className="p-6 max-h-screen">
      <h1 className="py-2 text-sub-color font-bold text-basic">
        Your past upvote orders:
      </h1>

      {/* Tabs */}
      <div className="flex items-center shadow-sm border border-gray-border">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`relative p-3 font-bold text-sm mr-4 ${
              activeTab === tab.label
                ? "text-main-color border-b-2 border-main-color"
                : "text-sub-color"
            }`}
          >
            {tab.label}
            <span
              className={`ml-2 px-2 py-1 rounded text-xs font-bold ${
                activeTab === tab.label ? tab.colors : tab.color
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Filter date */}
      <div className="flex flex-wrap items-center gap-4 py-4 border border-gray-border p-2">
        <div className="flex items-center gap-2">
          <input
            type="date"
            className="border rounded-full hover:border-black transition-all ease-in duration-150 px-6 py-2 text-black"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="date"
            className="border rounded-full hover:border-black transition-all ease-in duration-150 px-6 py-2 text-black"
          />
        </div>
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Search by name or order number..."
            className="w-full border rounded-full hover:border-black transition-all ease-in duration-150 py-2 px-10 text-sub-color"
          />
          <FiSearch className="absolute top-3 left-3 size-5 text-light-gray" />
        </div>
      </div>

      {activeTab !== "All" && (
        <div className="pb-2">
          <h1 className="text-black">
            <span className="text-sub-color font-bold"> 0 </span>Results found
          </h1>
        </div>
      )}

      <div className="flex space-x-4">
        {/* Status Check Section - Show for tabs other than "All" */}
        {activeTab !== "All" && (
          <div className="mb-2 flex items-center space-x-2 border border-dashed w-48 p-1.5">
            <h1 className="text-sub-color">Status :</h1>
            {/* Status Btn */}
            <button
              onClick={() => setActiveTab("All")} // Set active tab to "All" on click
              className="px-2 py-1 flex bg-sub-color rounded-full text-white text-[14px] hover:bg-light-gray transition-all ease-in duration-150 font-bold"
            >
              {activeTab}
              {/* Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                viewBox="0 0 24 24"
                className="size-6 ml-1"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        )}

        {activeTab !== "All" && (
          <div
            className="flex items-center mb-2 cursor-pointer"
            onClick={() => setActiveTab("All")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              viewBox="0 0 24 24"
              className="size-6 text-light-orange"
            >
              <path
                fill="currentColor"
                d="M3 6.386c0-.484.345-.877.771-.877h2.665c.529-.016.996-.399 1.176-.965l.03-.1l.115-.391c.07-.24.131-.45.217-.637c.338-.739.964-1.252 1.687-1.383c.184-.033.378-.033.6-.033h3.478c.223 0 .417 0 .6.033c.723.131 1.35.644 1.687 1.383c.086.187.147.396.218.637l.114.391l.03.1c.18.566.74.95 1.27.965h2.57c.427 0 .772.393.772.877s-.345.877-.771.877H3.77c-.425 0-.77-.393-.77-.877"
              ></path>
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.339 1.181-5.245l.267-4.188c.1-1.577.15-2.366-.303-2.865c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.288-.303 2.865l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.043.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.043-.713-.43-.672-.864l.5-5.263c.04-.434.409-.75.82-.707"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h1 className="ml-2 text-small font-bold text-light-orange">
              Clear
            </h1>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-md shadow-md overflow-hidden h-screen">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-light text-para-color text-small font-bold">
            <tr className="flex justify-center space-x-32 py-1 px-4">
              <td>Order #</td>
              <td>Details</td>
              <td>Progress</td>
              <td>Date</td>
              <td>Total Votes</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder for No Data */}
            <tr>
              <td colSpan="6" className="text-center text-light-gray">
                <div className="flex flex-col items-center lg:mt-40 mt-20 ">
                  <img src={Data} alt="Nodata Icon" className="h-40" />
                  <p className="text-base font-bold">No Data</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-end space-x-5 items-center p-4 bg-white border border-gray-border">
        <span className="text-sm text-sub-color">
          Rows per page:{" "}
          <select className="rounded-md text-sub-color outline-none text-small">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
        </span>

        <span className="text-sm text-sub-color">0-0 of 0</span>
        <div className="flex items-center gap-2">
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-sub-color"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-sub-color"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Pagination */}
    </div>
  );
};

export default Ordertable;
