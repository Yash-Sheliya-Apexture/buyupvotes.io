import React from "react";
import Home_Page from "./Pages/Home_Page";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home_Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
