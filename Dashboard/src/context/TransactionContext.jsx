import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();


const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  console.log("testesttes");
  const [formData, setformData] = useState({ addressTo: "", amount: "", nickName: "" ,gonderimTarihi:""});
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);
  
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };


  const sendTransaction = async () => {
    try {
      if (ethereum) {
        const { addressTo, amount, nickName, gonderimTarihi } = formData;
        console.log("test 1");
        const transactionsContract = createEthereumContract();
        console.log("test 2");
        const parsedAmount = ethers.utils.parseEther(amount);
        console.log("test 3");
        /*await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          }],
        });*/
        console.log("test 4");
     
        console.log(Number(new Date(gonderimTarihi)));
        console.log("test 5");
        const transactionHash = await transactionsContract.makeInvesment(addressTo,Number(new Date(gonderimTarihi)), parsedAmount);
        console.log("test 6");
        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        const transactionsCount = await transactionsContract.getTransactionCount();

        setTransactionCount(transactionsCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };
  




  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

 
        getAllInvesments();

      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Tum invesmentlarin cekilmesini saglar.
  const getAllInvesments = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        console.log(transactionsContract);
        console.log("control 1");
        const availableTransactions = await transactionsContract.myInvesments();
        console.log("control 2");
        
        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.invester,
          addressFrom: transaction.receiver,
          amount: parseInt(transaction.amount._hex) / (10 ** 18),
          gonderimTarihi: new Date(parseInt(transaction.timeForRelease)).toLocaleDateString(),
          investmentNo:transaction.invesmentNo,
        }));
       

        console.log("logTimeForRelease");
        console.log(transactionsContract.logTimeForRelease(4));
        console.log("logTimeForBlockTimeStamp");
        console.log(transactionsContract.logTimeForBlockTimeStamp());

      

        const result = await transactionsContract.withdrawInvesment(4);
        console.log(result);
        console.log("------------");
        console.log(structuredTransactions);
        console.log("++++++++++++");
        setTransactions(structuredTransactions);
        console.log("control 3");

      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };











  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const currentTransactionCount = await transactionsContract.getTransactionCount();

        window.localStorage.setItem("transactionCount", currentTransactionCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };


  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      console.log("connect wallet");
      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };



  useEffect(() => {
    console.log("deneme");

    checkIfWalletIsConnect();
    checkIfTransactionsExists();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
         currentAccount,
        isLoading,
        sendTransaction,
        setformData,
        formData,
        handleChange,
   
        isSubmit, 
        setIsSubmit
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};