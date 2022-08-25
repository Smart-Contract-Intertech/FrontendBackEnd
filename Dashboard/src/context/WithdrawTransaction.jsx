import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};


export const withdrawInvesment = async (id) => {

    try {
        if (ethereum) {
          const transactionsContract = createEthereumContract();
            
          /*
          const transactionId = transactionsContract.findInvesmentNo(receiverAddress);  
          console.log(transactionId);
          */
          //const owedAmount = await transactionsContract.getAmount(0);
          const transactionWithdrawn = await transactionsContract.withdrawInvesment(id);
  
          console.log(`Loading - ${transactionWithdrawn.hash}`);
          await transactionWithdrawn.wait();
          console.log(`Success - ${transactionWithdrawn.hash}`);
  
          window.location.reload();
  
        } else {
          console.log("No ethereum object");
        }
      } catch (error) {
        console.log(error);
  
        throw new Error("No ethereum object");
      }
}