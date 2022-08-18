import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./loginned.scss";
import Chart from "../../components/chart/Chart";
import TradingViewWidget, {Themes} from "react-tradingview-widget";

const Loginned = () => {
  window.ethereum.on('accountsChanged', async () => {
    window.setTimeout(function () {
    window.location.href='/';
  }, 1000);
  });
  
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <TradingViewWidget symbol="BINANCE:ETHUSDT" theme={Themes.LIGHT} locale="en" />
        </div>
      </div>
    </div>
  );
};

export default Loginned;