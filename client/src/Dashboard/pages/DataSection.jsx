import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    remainingVotes: 1000,
    label: "Votes remaining",
    link: "dashboard/fundprice",
    icon: "fas fa-wallet",
  },
  {
    id: 2,
    remainingVotes: 0,
    label: "Total Orders",
    link: "dashboard/upvoteorder",
    icon: "fas fa-chart-line",
  },
  {
    id: 3,
    remainingVotes: 0,
    label: "Order in Progress",
    link: "dashboard/upvoteorder",
    icon: "fas fa-bolt",
  },
  {
    id: 4,
    label: "New Order",
    link: "dashboard/upvoteorder",
    icon: "fas fa-plus-circle",
  },
  {
    id: 5,
    label: "Buy Reddit Accounts",
    link: "dashboard/account",
    icon: "fab fa-reddit",
  },
  {
    id: 6,
    label: "API Documentation",
    link: "",
    icon: "fas fa-code",
  },
];

const DataSection = () => {
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      setDataList(data); // Replace with fetched JSON data if necessary.
    };
    fetchData();
  }, []);

  const handleCardClick = (link) => {
    if (link) navigate(`/${link}`);
  };

  return (
    <div className="px-2 lg:w-full w-full py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataList.map((item) => (
          <div
            key={item.id}
            className="w-full h-full cursor-pointer"
            onClick={() => handleCardClick(item.link)}
          >
            <div
              className="bg-white shadow-main rounded-small p-4 flex justify-between items-center w-full h-full"
              style={{ minHeight: "100px" }}
            >
              {/* Left Section */}
              <div>
                {item.remainingVotes !== undefined && (
                  <p className="lg:text-large font-bold text-sub-color mb-2">
                    {item.remainingVotes}
                  </p>
                )}
                <p className="lg:text-base text-para-color font-normal">
                  {item.label}
                </p>
              </div>

              {/* Icon Section */}
              <div className="text-main-color lg:text-large text-basic p-4">
                <i
                  className={`${item.icon} hover:bg-gray-hover rounded-full transition-all ease-in duration-150`}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataSection;
