import "./aboutus.scss";
import Ali from "../image/ali.png";
import Okan from "../image/okan.png";
import Ogulcan from "../image/ogulcan.png";
import Samet from "../image/samet.png";
import Irem from "../image/irem.png";
import Erdem from "../image/erdem.png";
import Mustafa from "../image/mustafa.png";
import Yuksel from "../image/yuksel.png";
import Berke from "../image/berke.png";
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
                <p>İstanbul Üniversitesi-Bilgisayar Mühendisliği(4. Sınıf)</p>
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
                <p>Gebze Teknik Üniversitesi-Bilgisayar Mühendisliği(4. Sınıf)</p>
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
                <p>Türk Alman Üniversitesi-Bilgisayar Mühendisliği(3. Sınıf)</p>
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
                <p>Gebze Teknik Üniversitesi-Bilgisayar Mühendisliği(4. Sınıf)</p>
                <p>torun.okn@gmail.com</p>          
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={Yuksel} alt="" width="400" height="350" />
              <div className="container">
                <h2>Yüksel Erin</h2>
                <p className="title">Yazılım Geliştirici</p>
                <p>İstanbul Teknik Üniversitesi-Bilgisayar Mühendisliği-(4. Sınıf)</p>
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
                <p>İstanbul Teknik Üniversitesi-Endüstri Mühendisliği(4. Sınıf)</p>
                <p>samet.8basaran@gmail.com</p>        
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={Berke} alt="" width="400" height="350" />
              <div className="container">
                <h2>Berke Ayorak</h2>
                <p className="title">Yazılım Geliştirici</p>
                <p>Kırıkkale Üniversitesi-Bilgisayar Mühendisliği(2. Sınıf)</p>
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
                <p>Ege Üniversitesi-Bilgisayar Mühendisliği(4. Sınıf)</p>
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
                <p>Orta Doğu Teknik Üniversitesi KKK-Bilgisayar Mühendisliği(4. Sınıf)</p>
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
