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


const Datatable2 = () => {

 
  const {transactionsToMe,setformData } = useContext(TransactionContext);
  
  



  const handleDelete = (id) => {
    //setData(data.filter((item) => item.id !== id));
  };

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
      status: "active",
      email: "1snow@gmail.com",   
      age: transaction.amount,
      gonderimTarihi:transaction.investmentNo
      }))
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
    <div className="datatable2">
      <div className="datatableTitle">
        Bana Gönderilenler
        <Link to="/users/newtransfer" className="link">
          Yeni Yatırım Oluştur<i></i>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={transactionsToMe.reverse().map((transaction, i) => (  
          {   
          id: i,
          username: shortenAddress(transaction.addressTo),
          status: "active",
          email: "1snow@gmail.com",
          age: transaction.amount,
          gonderimTarihi:transaction.gonderimTarihi
          }))}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
};

export default Datatable2;