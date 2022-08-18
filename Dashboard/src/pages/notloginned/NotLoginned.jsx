import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const NotLoginned = () => {
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
        <div>
            <h1>METAMASK CÜZDANI BAĞLI DEĞİL</h1>
        </div>
    </div>
    </div>
);
  
};

export default NotLoginned;