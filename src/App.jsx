import React from "react";
import Home_Page from "./Pages/Home_Page";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Sign_In from "./Pages/Sign_In";
import Sign_Up from "./Pages/Sign_Up";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home_Page />} />
          <Route exact path="/signin" element={<Sign_In />} />
          <Route exact path="/signup" element={<Sign_Up />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
