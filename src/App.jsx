import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home_Page from "./Pages/Home_Page";
import Sign_In from "./Pages/Sign_In";
import Sign_Up from "./Pages/Sign_Up";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/signin" element={<Sign_In />} />
          <Route path="/signup" element={<Sign_Up />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
};

export default App;
