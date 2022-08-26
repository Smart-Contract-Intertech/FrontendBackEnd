import "./aboutus.scss";
import leon from "../image/leon.png";
import pejo from "../image/pejo.png";
import honda from "../image/honda.png";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <Sidebar />
      <div className="aboutusContainer">
        <Navbar />
        <div className="about-section">
          <h1><span style={{fontWeight: 'bold',color: 'white'}}>Hakkımızda</span></h1>
          <p>25 günlük staj dönemimizde  merkeziyetsiz sisteme öenmli bir adım attık.</p>
          <p>
            Aşağıda profilleri belirtilen 9 kişilik bir ekip ile Smart Contract projesini hayata geçirdik.
          </p>
        </div>

        <h2 style={{ textAlign: "center" ,fontWeight: 'bold',fontSize: "2rem"}}>Takımımız</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={leon} alt="" width="400" height="250" />
              <div className="container">
                <h2>Jane Doe</h2>
                <p className="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={honda} alt="" width="400" height="250" />
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={pejo} alt="" width="400" height="250" />
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
