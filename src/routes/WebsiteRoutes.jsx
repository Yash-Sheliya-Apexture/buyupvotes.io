import React from "react";
import { Routes, Route } from "react-router-dom";

// Website Pages
import Home_Page from "../Pages/Home_Page";
import Sign_In from "../Pages/Sign_In";
import Sign_Up from "../Pages/Sign_Up";


const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home_Page />} />
      <Route path="/signin" element={<Sign_In />} />
      <Route path="/signup" element={<Sign_Up />} />

    </Routes>
  );
};

export default WebsiteRoutes;
