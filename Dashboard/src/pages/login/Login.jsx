import "./login.scss";
import NotLoginned from "../notloginned/NotLoginned";
import Loginned from "../loginned/Loginned";
import { Web3Provider, wallet } from "ethers-react";

const Login = () => {
  window.ethereum.on('accountsChanged', async () => {
    window.setTimeout(function () {
    window.location.href='/';
  }, 1000);
  });

  /*async function isUnlocked() {
    const provider = new Web3Provider(wallet);
    await provider.send('eth_requestAccounts', []);
    const signer = await provider.getSigner(0);
    return signer;
  }

  console.log(isUnlocked().signer);
*/
  return (
    <Loginned/>
  );
};

export default Login;