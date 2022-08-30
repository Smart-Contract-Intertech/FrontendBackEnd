import "./aboutus.scss";
import leon from "../image/leon.png";
import honda from "../image/honda.png";
import Ali from "../image/ali.png";
import Okan from "../image/okan.png";
import Ogulcan from "../image/ogulcan.png";
import Samet from "../image/samet.png";
import Irem from "../image/irem.png";
import Erdem from "../image/erdem.png";
import Mustafa from "../image/mustafa.png";
import Anonim from "../image/anonim.jpg";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <Sidebar />
      <div className="aboutusContainer">
        <Navbar />
        <div className="about-section">
          <h1>
            <span style={{ fontWeight: "bold", color: "white" }}>
              Hakkımızda
            </span>
          </h1>
          <p>
            25 günlük staj dönemimizde merkeziyetsiz sisteme önemli bir adım
            attık.
          </p>
          <p>
            Aşağıda profilleri belirtilen 9 kişilik bir ekip ile Smart Contract
            projesini hayata geçirdik.
          </p>
        </div>

        <h2
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem" }}
        >
          Takımımız
        </h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={Erdem} alt="" width="400" height="350" />
              <div className="container">
                <h2>Erdem Çokatar</h2>
                <p className="title">Yazılım Geliştirici</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>erdemcokatar@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={Mustafa} alt="" width="400" height="350" />
              <div className="container">
                <h2>Mustafa Şenol</h2>
                <p className="title">Yazılım Geliştirici</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mstfsnol@hotmail.com</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={Ali} alt="" width="400" height="350" />
              <div className="container">
                <h2>Ali Murat Kuşlu</h2>
                <p className="title">Yazılım Geliştirici</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>alimuratkuslu@gmail.com</p>        
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={Okan} alt="" width="400" height="350" />
              <div className="container">
                <h2>Okan Torun</h2>
                <p className="title">Yazılım Geliştirici</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>torun.okn@gmail.com</p>          
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={Anonim} alt="" width="400" height="350" />
              <div className="container">
                <h2>Yüksel Erin</h2>
                <p className="title">Yazılım Geliştirici</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>ykselerin@gmail.com</p>          
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={Samet} alt="" width="400" height="350" />
              <div className="container">
                <h2>Samet Başaran</h2>
                <p className="title">İş Analisti</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>samet.8basaran@gmail.com</p>        
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={Anonim} alt="" width="400" height="350" />
              <div className="container">
                <h2>Berke Ayorak</h2>
                <p className="title">Yazılım Geliştirici</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>berkeayorak@gmail.com</p>           
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={Ogulcan} alt="" width="400" height="350" />
              <div className="container">
                <h2>Oğulcan Yusuf Akçay</h2>
                <p className="title">Yazılım Geliştirici</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>ogyuak4@gmail.com</p>         
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={Irem} alt="" width="400" height="350" />
              <div className="container">
                <h2>İrem Çiloğlu</h2>
                <p className="title">Yazılım Geliştirici</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>irem-ciloglu@hotmail.com</p>          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
