import React from "react";
import { Routes, Route } from "react-router-dom";

// Dashboard Pages
import DashboardHome from "../Dashboard/pages/DashboardHome";
import Sidebar from "../Dashboard/components/Sidebar";
import Header from "../Dashboard/components/Header";
import UpvoteOrder from "../Dashboard/pages/UpvoteOrder";
import FundPricing from "../Dashboard/pages/FundPricing";
import OrderComment from "../Dashboard/pages/OrderComment";

const DashboardRoutes = () => {
  return (
    <div className="">
      <section className="flex">
        <div className="w-[20%]">
          <Sidebar />
        </div>

        <div className="w-[85%] px-3">
          <Header />
          <main className="">
            <Routes>
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/UpvoteOrder" element={<UpvoteOrder />} />
              <Route path="/OrderComment" element={<OrderComment />} />
              <Route path="/FundPrice" element={<FundPricing />} />
            </Routes>
          </main>
        </div>
      </section>
    </div>
  );
};

export default DashboardRoutes;
