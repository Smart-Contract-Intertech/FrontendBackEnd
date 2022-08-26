import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./loginned.scss";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Loginned = () => {
  window.ethereum.on("accountsChanged", async () => {
    window.setTimeout(function () {
      window.location.href = "/";
    }, 1000);
  });

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="container-fluid mb-3">
          <Chart
            type="pie"
            width={1200}
            height={450}
            series={[30, 30, 40]}
            options={{
              noData: { text: "Empty Data" },
              // colors:["#f90000","#f0f"],
              labels: ["Gelen Para", "Giden Para", "Varlık"],
            }}
          ></Chart>
        </div>
        <div className="charts">
          <TradingViewWidget
            width={1200}
            symbol="BINANCE:ETHUSDT"
            theme={Themes.LIGHT}
            locale="en"
          />
        </div>
      </div>
    </div>
  );
};

export default Loginned;
