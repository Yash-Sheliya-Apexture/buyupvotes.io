import React, { useState } from "react";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { BsBarChartFill } from "react-icons/bs";
import { PiSpeedometerFill } from "react-icons/pi";
import { IoMdChatboxes } from "react-icons/io";
import { IoIosChatboxes } from "react-icons/io";
import { HiCurrencyEuro } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { MdContactPage } from "react-icons/md";
import { IoTv } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";
import { GoFileDirectoryFill } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard"); // State for active menu
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    {
      id: "Dashboard",
      icon: <PiSpeedometerFill />,
      label: "Dashboard",
      link: "/",
    },
    {
      id: "Order Upvotes",
      icon: <BsBarChartFill />,
      label: "Order Upvotes",
      link: "/products",
    },
    {
      id: "Orders",
      icon: <IoMdChatboxes />,
      label: "Order Comments",
      link: "/orders",
    },
    {
      id: "Order messages",
      icon: <IoIosChatboxes />,
      label: "Order Direct Messages",
      link: "/notifications",
    },
    {
      id: "Add Funds",
      icon: <HiCurrencyEuro />,
      label: "Add Funds-Princing",
      link: "/login",
    },
    {
      id: "Raddit Accounts",
      icon: <FaCartShopping />,
      label: "Buy Raddit Accounts",
      link: "/signup",
    },
    {
      id: "faqs",
      icon: <MdContactPage />,
      label: "FAQ'S",
      link: "/password",
    },
    { id: "OTP", icon: <GoFileDirectoryFill />, label: "Blogs", link: "/otp" },
    {
      id: "API",
      icon: <IoTv />,
      label: "API (New)",
      link: "/settings",
    },
    {
      id: "Contact",
      icon: <MdContacts />,
      label: "Contact Us",
      link: "/settings",
    },
    {
      id: "Account",
      icon: <RiAccountBoxFill />,
      label: "Account",
      link: "/settings",
    },
  ];

  return (
    <>
      {/* Hamburger Menu for Small Screens */}
      <div className="lg:hidden p-4 bg-[#ffffff] flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-10 h-10 hidden" />
        </Link>
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <section
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#ffffff] border-r-2 border-[#e5e7eb] transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:static lg:block h-screen`}
      >
        <div className="flex items-center justify-between p-3">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="p-2">
          <ul className="flex flex-col space-y-2.5">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`relative group rounded-base cursor-pointer ${
                  activeMenu === item.id
                    ? "bg-[#FF570014] text-[#FF5700] font-bold" // Active menu styles
                    : "text-[#403633] hover:bg-[rgba(240,240,240,0.6)]" // Inactive menu styles
                }`}
                onClick={() => setActiveMenu(item.id)} // Set active menu on click
              >
                <Link
                  to={item.link}
                  className="w-full px-2.5 py-2.5 flex justify-start items-center transition-colors duration-200"
                >
                  <span className="mr-4 text-2xl">{item.icon}</span>
                  <span className="text-small">{item.label}</span>
                </Link>
                <div
                  className={`absolute left-0 top-0 h-full w-1 ${
                    activeMenu === item.id
                      ? "bg-[#FF5700] scale-y-100"
                      : "bg-transparent scale-y-0"
                  } transition-all duration-300`}
                ></div>
              </li>
            ))}
          </ul>
          <div className="py-2">
            <button className="w-full p-1.5 hover:shadow-Sidebar rounded-full border border-[#FF5700]">
              Add Funds
            </button>
          </div>
        </div>
      </section>

      {/* Overlay for Small Screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default SideBar;
