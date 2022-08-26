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

const Datatable = () => {

 
  
  
  const {transactions,setformData } = useContext(TransactionContext);


  const handleDelete = async (id) => {


 
    const transactionsContract = createEthereumContract();

    
    const rows=transactions.map((transaction, i) => (  
      {   
      id: i,
      username: shortenAddress(transaction.addressTo),
      status: "active",
      email: "1snow@gmail.com",   
      age: transaction.amount,
      gonderimTarihi:transaction.investmentNo
      }))
   

      const transactionDeleted = await transactionsContract.reverseInvesment(rows[id].gonderimTarihi);

      await transactionDeleted.wait();

      console.log(`Loading - ${transactionDeleted.hash}`);
      await transactionDeleted.wait();
      console.log(`Success - ${transactionDeleted.hash}`);

      window.location.reload();

  };

  const resendState = {
    "amount":"",
    "nickName":"",
  }
  const handleResend = (id) => {
    

   
    const rows=transactions.map((transaction, i) => (  
      {   
      id: i,
      username: shortenAddress(transaction.addressTo),
      status: "active",
      email: "1snow@gmail.com",   
      age: transaction.amount,
      gonderimTarihi:transaction.investmentNo
      }))

      setformData((prevState) => ({ "addressTo": rows[id].gonderimTarihi ,"nickName": rows[id].email}));  
  };

  const actionColumn = [{
    field: "değişiklik",
    headerName: "Düzenle",
    width: 350,
    renderCell: (params) => {
      
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">Düzenle</div>
          </Link>
         
          <Link to="/users/newtransfer"  style={{ textDecoration: "none" }}>
            <div className="resendButton" 
            onClick={() => handleResend(params.row.id)}>Tekrar Gönder </div>
          </Link>

          <div
            className="deleteButton"
            onClick={() => handleDelete(params.row.id)}
          >
            Sil
          </div>
        </div>
        
      );
    },
  },];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Gönderilenler
        <Link to="/users/newtransfer" className="link">
          Yeni Yatırım Oluştur<i></i>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={transactions.map((transaction, i) => (  
          {   
          id: i,
          username: shortenAddress(transaction.addressTo),
          status: "active",
          email: "1snow@gmail.com",
          age: transaction.amount,
          gonderimTarihi:transaction.investmentNo
          }))}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
};

export default Datatable;