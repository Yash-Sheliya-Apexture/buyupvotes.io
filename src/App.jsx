import React from "react";
import Home_Page from "./Pages/Home_Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_In from "./Pages/Sign_In";
import Sign_Out from "./Pages/Sign_Up";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/signin" element={<Sign_In />} />
          <Route path="/signup" element={<Sign_Out />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
