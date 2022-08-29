import React, { useContext } from "react";
import Chart from "react-apexcharts";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./loginned.scss";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { TransactionContext } from "../../context/TransactionContext";

const Loginned = () => {

  const {gelenIslemde,gidenIslemde,balanceInEth } = useContext(TransactionContext);
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
            series={[gidenIslemde ,gelenIslemde , Number(balanceInEth)]}
            options={{
              noData: { text: "Empty Data" },
              // colors:["#f90000","#f0f"],
              labels: ["Giden İşlemler", "Gelen İşlemler", "Metamask Bakiyesi"],
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
