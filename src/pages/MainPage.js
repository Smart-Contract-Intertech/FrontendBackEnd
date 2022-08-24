import main1 from './image/main1.png';
import main2 from './image/main2.png';
import main3 from './image/main3.png';
import main4 from './image/main4.png';
import main5 from './image/main5.png';
import main6 from './image/Vector.png'
import metamask from './image/metamask.png'
import Container from 'react-bootstrap/Container';
import { notification, message } from 'antd';
import './MainPage.css';
import 'antd/dist/antd.min.css';
import {ethers} from 'ethers';
import react, {useState} from 'react';
import { browserName } from 'react-device-detect';

export default function MainPage(){

    const [defaultAccount, setDefaultAccount] = useState('Bağlı Cüzdan Yok.');
    const [connectButtonText, setConnectButtonText] = useState('Metamask Cüzdanı\n ile Bağlan');

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
    }

    window.ethereum.on('accountsChanged', async () => {
        setConnectButtonText('Metamask Cüzdanı ile Bağlan');
        setDefaultAccount(null);
    });

    const connectWallet = () => {
        if(window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
                accountChangedHandler(result[0]);
                setConnectButtonText('Cüzdan Bağlandı');
                notification['info']({
                    message: 'Bağlantı Kuruldu.'
                });
            })
        }
        else{
            /*
            setTimeout(()=>{
                message.error('Metamask Kurmanız Gerekiyor!')
            }, 100);
            */
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
        <Container style ={{fontFamily:'sans-serif-medium', fontSize:26, color:'#9980EC'}}>
            <br/><br/><br/><p>Mirasınızı güvence altına alın..</p><br/><br/><br/><br/><br/>
            <p>Metamask cüzdanınızı bağlayın.</p><br/><br/>
            <img 
                src={main1} 
                alt="" 
                width="400" 
                height="100"
            /><br/><br/><br/>
            <p>Mirasçılarınızı belirleyin.</p><br/><br/>
            <img
                src={main2}
                alt=""
                width="175"
                height="200"
            /><br/><br/><br/>
            <p>Size en uygun aktarım tarihini seçin.</p><br/><br/>
            <img
                src={main3}
                alt=""
                width="125"
                height="125"
            /><br/><br/><br/>
            <img src={main6} alt="" width="20" height="20" style={{display:"inline"}}></img><p style={{display:"inline"}}> Ve işlemi onaylayın.</p><br/><br/><br/>
            <img
                src={main4}
                alt=""
                width="125"
                height="175"
            /><br/><br/><br/>
            <p>MOIRA dağıtık etheryum ağıyla mirasınızı merkezi bir kurum olmadan <br/> belirlediğiniz tarihte belirlediğiniz cüzdana güvenle sizin için aktarsın.</p><br/><br/>
            <img
                src={main5}
                alt=""
                width="350"
                height="350"
            /><br/><br/><br/>
            <h3 style={{color:'#9980EC'}}> Bağlı Cüzdan Adresi: {defaultAccount} </h3>
            <button style={{color:'white', backgroundColor:'#9980EC'}} onClick={connectWallet}><p style={{display:"inline"}}>{connectButtonText}</p>
            <img src={metamask} alt="metamask" width="40" height="40" style={{display:"inline"}}></img></button><br/><br/><br/>
        </Container>
    )
}