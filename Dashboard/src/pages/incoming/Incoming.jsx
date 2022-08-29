import "./incoming.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Container from "react-bootstrap/Container";
import { useState } from "react";

const Incoming = () => {
  const[defaultReleaseTime,setDefaultReleaseTime] = useState();
  const[defaultAmount,setDefaultAmount] = useState();
  const[defaultRemainingTime,setDefaultRemainingTime] = useState();
  let today = new Date().toISOString().slice(0, 10);
  //setDefaultRemainingTime(defaultReleaseTime-today);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Container className="data">
              {defaultRemainingTime === 0 || defaultRemainingTime < 0 ? (<p style={{fontWeight:"bold", color:"GrayText"}}>Yatırım Başarıyla İletildi! Aşağıdaki Düğme ile Parayı Cüzdanınıza Aktarabilirsiniz.</p>) : 
              (<p style={{fontWeight:"bold", color:"GrayText"}}>Yatırım Gerçekleştirilemiyor!</p>)}
              <br/><br/>
              <p>Aktarımın gerçekleşeceği tarih: {defaultReleaseTime}</p><br/>
              <form>
                <label>Tarih:</label>
                <input type="date" value={defaultReleaseTime}/>
              </form>
              <br/><p>{defaultReleaseTime}</p><br/>
              <div>
                <svg width="73px" height="88px" viewBox="0 0 73 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g id="hourglass">
                    <path d="M63.8761664,86 C63.9491436,84.74063 64,83.4707791 64,82.1818182 C64,65.2090455 57.5148507,50.6237818 48.20041,44 C57.5148507,37.3762182 64,22.7909545 64,5.81818182 C64,4.52922091 63.9491436,3.25937 63.8761664,2 L10.1238336,2 C10.0508564,3.25937 10,4.52922091 10,5.81818182 C10,22.7909545 16.4851493,37.3762182 25.79959,44 C16.4851493,50.6237818 10,65.2090455 10,82.1818182 C10,83.4707791 10.0508564,84.74063 10.1238336,86 L63.8761664,86 Z" id="glass" fill="#ECF1F6"></path>
                    <rect id="top-plate" fill="#4D4544" x="0" y="0" width="74" height="8" rx="2"></rect>
                    <rect id="bottom-plate" fill="#4D4544" x="0" y="80" width="74" height="8" rx="2"></rect>
                    <g id="top-sand" transform="translate(18, 21)">
                      <clipPath id="top-clip-path" fill="white">
                      <rect x="0" y="0" width="38" height="21"></rect>
                      </clipPath>
                      <path fill="#F5A623" clip-path="url(#top-clip-path)" d="M38,0 C36.218769,7.51704545 24.818769,21 19,21 C13.418769,21 1.9,7.63636364 0,0 L38,0 Z"></path>
                    </g>
                    <g id="bottom-sand" transform="translate(18, 55)">
                      <clipPath id="bottom-clip-path" fill="white">
                      <rect x="0" y="0" width="38" height="21"></rect>
                      </clipPath>
                      <g clip-path="url(#bottom-clip-path)">
                        <path fill="#F5A623" d="M0,21 L38,21 C36.1,13.3636364 24.581231,0 19,0 C13.181231,0 1.781231,13.4829545 0,21 Z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <br/>
              <p>Aktarılası beklenen miktar: {defaultAmount} ether</p><br/>
              <button>Cüzdana Aktar</button>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incoming;