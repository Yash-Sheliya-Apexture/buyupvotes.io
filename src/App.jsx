import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import WebsiteRoutes from "./routes/WebsiteRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
const App = () => {
  return (
    <div>
      <Router>
        {window.location.pathname.startsWith("/dashboard") ? (
          <DashboardRoutes />
        ) : (
          <WebsiteRoutes />
        )}
      </Router>
    </div>
  );
};

export default App;
