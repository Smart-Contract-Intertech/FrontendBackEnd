import React, { useContext } from "react";


import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";



const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="a"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
  

  const handleSubmit = (e) => {
    //console.log(e)
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;
      sendTransaction();
  };

  return (
    <div className="a">
      <div className="a">
        <div className="a">
         
          <p className="a">
            Explore the crypto world. Take and send cryptocurrencies easily on Moira.
          </p>
          {!/*currentAccount*/true && (
            <button
              type="button"
              onClick={/*connectWallet*/()=>{}}
              className="a"
            >
              <p className="a">
                Connect Wallet
              </p>
            </button>
          )}

          
        </div>

        <div className="a">
          <div className="a">
            <div className="a">
              <div className="a">
                <div className="a">
                </div>
              </div>
              <div>
                <p className="a">
                  {/*shortenAddress(currentAccount)*/}
                </p>
               
              </div>
            </div>
          </div>
          <div className="a">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="a" />

            {false
              ? test
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="a"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;