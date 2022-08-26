import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useContext,useEffect } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import { Footer } from "antd/lib/layout/layout";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../utils/constants";
const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};


const edit = () => {

  const sta = ["PENDING", "COMPLETED", "CANCELLED"];

  const {transactionsToMe,setformData } = useContext(TransactionContext);

  const resendState = {
    "amount":"",
    "nickName":"",
  }
  const handleWithdrawInvesment = async (id) => {
    
    const transactionsContract = createEthereumContract();

   
    
    const rows=transactionsToMe.map((transaction, i) => (  
      {   
      id: i,
      username: shortenAddress(transaction.addressTo),
      status: transaction.status,
      email: transaction.name,   
      age: transaction.amount,
      gonderimTarihi:transaction.investmentNo
      }))
      //const timeForRelase = await transactionsContract.dateTimeOfWithdraw(rows[id].gonderimTarihi);
   
      


      const transactionHash = await transactionsContract.withdrawInvesment(rows[id].gonderimTarihi);

      //setformData((prevState) => ({ "addressTo": rows[id].gonderimTarihi ,"nickName": rows[id].email}));  
  };

  const actionColumn = [{
    field: "değişiklik",
    headerName: "Düzenle",
    width: 350,
    renderCell: (params) => {
      
      return (
        <div className="cellAction">
          
         
          <Link to="/users/newtransfer"  style={{ textDecoration: "none" }}>
            <div className="resendButton" 
            onClick={() => handleWithdrawInvesment(params.row.id)}>Parayı Çek </div>
          </Link>

         
        </div>
        
      );
    },
  },];
  return (
    <div className="edit">
      <div className="datatableTitle">
        Bana Gönderilenler
     
      </div>
      <DataGrid
        className="datagrid"
        rows={transactionsToMe.map((transaction, i) => (  
          {   
          id: i,
          username: shortenAddress(transaction.addressTo),
          status: sta[transaction.status],
          email: transaction.name,
          age: transaction.amount,
          gonderimTarihi:transaction.gonderimTarihi,
          investmentNo: transaction.investmentNo,
          }))}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
};

export default edit;