import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Sent from "@mui/icons-material/EastOutlined";
import Taken from "@mui/icons-material/WestOutlined";
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import Logo from '../image/Logo.png';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/user" style={{ textDecoration: "none" }}>
          <img
          alt="Anasayfa"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          />
          <span className="logo">MOIRA</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Genel Görünüm</p>
            <Link to="/user" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Anasayfa</span>
              </li>
            </Link>
          <p className="title">Aktarımlarım</p>
          <Link to="/sent" style={{ textDecoration: "none" }}>
            <li>
              <Sent className="icon" />
              <span>Benim Gönderdiklerim</span>
            </li>
          </Link>
          <Link to="/senttome" style={{ textDecoration: "none" }}>
            <li>
              <Taken className="icon" />
              <span>Bana Gönderilenler</span>
            </li>
          </Link>
          <p className="title">Hakkımızda</p>
          <Link to="/about" style={{ textDecoration: "none "}}>
            <li>
              <InfoIcon className="icon" />
              <span>Hakkımızda</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;