import React from "react";


import DataTable from "Components/DataTable";

import Footer from "Components/Footer";
import Navbar from "Components/Navbar";

import BarChart from "Components/BarChart";
import DonutChart from "Components/DonutChart";


const Dashboard = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="container">
          <h1 className="text-primary py-3">DashBoard de Vendas</h1>

          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso %</h5>
              <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Todas vendas</h5>
              <DonutChart />
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-primary">Todas vendas</h2>
          </div>

          <DataTable />
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Dashboard;
