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
import { deleteTransaction } from "../../context/TransactionReversal";

const { ethereum } = window;

const Datatable = () => {

  const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
  
    return transactionsContract;
  };

  const sta = ["PENDING", "COMPLETED", "CANCELLED"];
  
  const {transactions,setformData,balanceInEth } = useContext(TransactionContext);


  const handleDelete = async (id) => {

    const transactionsContract = createEthereumContract();
    
    const rows=transactions.map((transaction, i) => (  
      {   
      id: i,
      username: transaction.addressFrom,
      status: sta[transaction.status],
      email: transaction.name,
      age: transaction.amount,
                rate:((transaction.amount/balanceInEth)*100).toFixed(2),

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
      username: transaction.addressFrom,
      status: sta[transaction.status],
      email: transaction.name,
      age: transaction.amount,
      rate:((transaction.amount/balanceInEth)*100).toFixed(2),

      gonderimTarihi:transaction.investmentNo,
      }))

      setformData((prevState) => ({ "addressTo": rows[id].gonderimTarihi ,"nickName": rows[id].email}));  
  };

  const handleEdit = (id) => {
    const rows=transactions.map((transaction, i) => (  
      {   
      id: i,
      username: transaction.addressFrom,
      status: sta[transaction.status],
      email: transaction.name,
      age: transaction.amount,
     
      rate:((transaction.amount/balanceInEth)*100).toFixed(2),

      gonderimTarihi:transaction.investmentNo,
      tarih:transaction.gonderimTarihi
      }));

      //var editedDate = String(rows[id].tarih).substring(0, 2) +'/'+String(rows[id].tarih.substring(3, 5))+'/'+String(rows[id].tarih.substring(6, 10));
     // console.log(editedDate);
      setformData((prevState) => ({ "addressTo": rows[id].username, "nickName": rows[id].email, "amount": rows[id].age, "gonderimTarihi": rows[id].gonderimTarihi, "id": rows[id].id}));  
  };

  const actionColumn = [{
    field: "değişiklik",
    headerName: "Düzenle",
    width: 350,
    renderCell: (params) => {
      
      return (
        <div className="cellAction">
          <Link to="/users/edit" style={{ textDecoration: "none" }}>
            <div className="viewButton"
            onClick={() => handleEdit(params.row.id)}>Düzenle</div>
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
          username: transaction.addressFrom,
          status: sta[transaction.status],
          email: transaction.name,
          age: transaction.amount,
          gonderimTarihi:transaction.gonderimTarihi,
          rate:((transaction.amount/balanceInEth)*100).toFixed(2),
          invesmentNo: transaction.investmentNo,
          }))}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
};

export default Datatable;

