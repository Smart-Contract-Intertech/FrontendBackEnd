import "./login.scss";
import Loginned from "../loginned/Loginned";

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