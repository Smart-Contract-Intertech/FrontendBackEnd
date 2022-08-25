import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { userColumns, userRows } from "../datatablesource";

import { contractABI, contractAddress } from "../utils/constants";

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};

export const deleteTransaction = async (id) => {

    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        /*
        const transactionId = transactionsContract.findInvesmentNo(receiverAddress);  
        console.log(transactionId);
        */
        const transactionDeleted = await transactionsContract.reverseInvesment(id);

        await transactionDeleted.wait();

        console.log(`Loading - ${transactionDeleted.hash}`);
        await transactionDeleted.wait();
        console.log(`Success - ${transactionDeleted.hash}`);

        window.location.reload();

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }

  }
