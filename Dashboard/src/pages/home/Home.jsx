import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Landing from "../../pages/landing/Landing";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Mirasınızı Güvence Altına Alın..</div>
          <Landing />
        </div>
      </div>
    </div>
  );
};

export default Home;