import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import InfoIcon from '@mui/icons-material/Info';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import React, {useCallback} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import Logo from '../image/Logo.png';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/about', {replace: true}), [navigate]);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="column">
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
        <div className="item">
        </div>
        <div className="items">
          <div className="item">
            <InfoIcon className="icon" onClick={handleOnClick} />
            <Link to='/about'>
              <span>Hakkımızda</span>
            </Link>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;