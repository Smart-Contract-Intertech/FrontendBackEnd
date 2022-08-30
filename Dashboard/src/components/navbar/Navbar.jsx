import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
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
        <div className="item">
        </div>
        <div className="items">
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