import main1 from '../image/main1.png';
import main2 from '../image/main2.png';
import main3 from '../image/main3.png';
import main4 from '../image/main4.png';
import main5 from '../image/main5.png';
import main6 from '../image/Vector.png'
import metamask from '../image/metamask.png'
import Container from 'react-bootstrap/Container';
import { notification } from 'antd';
import 'antd/dist/antd.min.css';
import { useState } from 'react';
import { browserName } from 'react-device-detect';
import './landing.scss'

export default function MainPage(){
  const [defaultAccount, setDefaultAccount] = useState();
  const [connectButtonText, setConnectButtonText] = useState('Metamask Cüzdanı ile Bağlan');

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
  }

  const connectWallet = () => {
    if(window.ethereum){
      window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
        accountChangedHandler(result[0]);
        window.setTimeout(function () {
          window.location.href='/user';
        }, 1500);
        notification['info']({
          message: 'Bağlantı Kuruldu.'
        });
      })
    }
    else{
      notification['error']({
        message: 'Metamask Kurmanız Gerekiyor!'
      });

      if(browserName === "Chrome"){
        window.setTimeout(function () {
          window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en','_blank');
        }, 1500);
      }
      else if(browserName === "Firefox"){
        window.setTimeout(function () {
          window.open('https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/','_blank');
        }, 1500);
      }
      else if(browserName === "Brave"){
        window.setTimeout(function () {
          window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en','_blank');
        }, 1500);
      }

      return;
    }
  }
  return(
    <Container style ={{fontFamily:'sans-serif-medium', fontSize:20, color:'#9980EC', textAlign:'center'}}>
      <p>Metamask cüzdanınızı bağlayın.</p><br/>
      <img 
        src={main1} 
        alt="" 
        width="400" 
        height="100"
      /><br/><br/>
      <p>Mirasçılarınızı belirleyin.</p><br/>
      <img
        src={main2}
        alt=""
        width="175"
        height="200"
      /><br/><br/>
      <p>Size en uygun aktarım tarihini seçin.</p><br/>
      <img
        src={main3}
        alt=""
        width="125"
        height="125"
      /><br/><br/>
      <img src={main6} alt="" width="20" height="20" style={{display:"inline"}}></img><p style={{display:"inline"}}> Ve işlemi onaylayın.</p><br/><br/>
      <img
        src={main4}
        alt=""
        width="125"
        height="175"
      /><br/><br/>
      <p>MOIRA dağıtık etheryum ağıyla mirasınızı merkezi bir kurum olmadan <br/> belirlediğiniz tarihte belirlediğiniz cüzdana güvenle sizin için aktarsın.</p><br/>
      <img
        src={main5}
        alt=""
        width="350"
        height="350"
      /><br/><br/>
      <button onClick={connectWallet}><p style={{display:"inline"}}>Metamask Cüzdanı ile Bağlan</p>
      <img src={metamask} alt="metamask" width="40" height="40" style={{display:"inline"}}></img></button><br/><br/>
    </Container>
  )
}