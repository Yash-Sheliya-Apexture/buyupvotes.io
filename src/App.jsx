import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home_Page from "./Pages/Home_Page";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
};

export default App;
