import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import { parse } from "@ethersproject/transactions";

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
  const [transactionsToMe,setTransactionsToMe] =useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  var [gidenIslemde,setGidenIslemde] = useState(0);
  var [gelenIslemde,setGelenIslemde] = useState(0);
  const [balanceInEth,setBalanceInEth] = useState(0);


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
        
        const transactionHash = await transactionsContract.makeInvesment(addressTo,Math.floor(new Date(gonderimTarihi) / 1000),nickName, {value: parsedAmount});

        await transactionHash.wait();
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

  const editTransaction = async (id) => {
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
        
        const transactionHash = await transactionsContract.reviseInvesment(id, {value: parsedAmount}, Math.floor(new Date(gonderimTarihi) / 1000));

        await transactionHash.wait();
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
        


        setCurrentAccount();
        console.log("rrrrrrrrrrrrrrrrrr");
  
        setBalanceInEth(accounts[0].balanceInEth);
        ethers.getDefaultProvider('goerli').getBalance(accounts[0]).then((balance) => {
          // convert a currency unit from wei to ether
          console.log("tttttttttttttttttttt");
          console.log(balance);
          console.log("ffffffffffffffffffff");
          setBalanceInEth(ethers.utils.formatEther(balance));
         })


        getAllInvesments();
      } 
      else {
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
        
        const structuredTransactions = availableTransactions.map((transaction) => (
          setGidenIslemde(gidenIslemde+=parseInt(transaction.amount._hex) / (10 ** 18)),
          {
          addressTo: transaction.invester,
          addressFrom: transaction.receiver,
          amount: parseInt(transaction.amount._hex) / (10 ** 18),
          gonderimTarihi: new Date(parseInt(transaction.timeForRelease*1000)).toLocaleDateString(),
          investmentNo:transaction.invesmentNo,
          status: transaction.invesmentStatus,
          name: transaction.name,
          
        }));
        
        //structuredTransactions

        const toMeTransactions = await transactionsContract.invesmentsMadeToMe();
        const structuredTransactionsToMe = toMeTransactions.map((transaction) => (
          setGelenIslemde(gelenIslemde+=parseInt(transaction.amount._hex) / (10 ** 18)),
          {
          addressTo: transaction.invester,
          addressFrom: transaction.receiver,
          amount: parseInt(transaction.amount._hex) / (10 ** 18),
          gonderimTarihi: new Date(parseInt(transaction.timeForRelease*1000)).toLocaleDateString(),
          investmentNo:transaction.invesmentNo,
          name: transaction.name,
          status: transaction.invesmentStatus,
        })); 

        
        //Math.floor(new Date(parseInt(transaction.timeForRelease)).getTime() / 1000)
        console.log("logTimeForRelease");
        //console.log(transactionsContract.logTimeForRelease(0));
        console.log("logTimeForBlockTimeStamp");
        //  console.log(transactionsContract.logTimeForBlockTimeStamp());
        
        console.log("------------");
        console.log(structuredTransactionsToMe);
        console.log("++++++++++++");
        console.log(structuredTransactions)
        console.log("xxxxxxxxxxxx");
        setTransactions(structuredTransactions);
        console.log("////////////");
        
        setTransactionsToMe(structuredTransactionsToMe);
        console.log("control 3");

      } 
      else {
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
        editTransaction,
        setformData,
        formData,
        handleChange,
        transactionsToMe,
        setTransactionsToMe,
        isSubmit, 
        setIsSubmit,
        gidenIslemde,
        gelenIslemde,
        balanceInEth
      }}  
    >
      {children}
    </TransactionContext.Provider>
  );
};