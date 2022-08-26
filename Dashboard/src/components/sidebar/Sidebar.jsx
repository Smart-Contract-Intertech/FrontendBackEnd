import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import InfoIcon from '@mui/icons-material/Info';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Sent from "@mui/icons-material/EastOutlined";
import Taken from "@mui/icons-material/WestOutlined";
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
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Sent className="icon" />
              <span>Benim Gönderdiklerim</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <Taken className="icon" />
              <span>Bana Gönderilenler</span>
            </li>
          </Link>
          
          <p className="title">Hakkımızda</p>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li>
              <InfoIcon className="icon" />
              <span>Hakkımızda</span>
            </li>
          </Link>

          <p className="title">USEFUL</p>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
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
