import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import { deleteTransaction } from "../../context/TransactionReversal";
import { withdrawInvesment } from "../../context/WithdrawTransaction";
import React from "react";

const Datatable = () => {
  const {transactions } = useContext(TransactionContext);

  //const [data, setData] = useState(userRows);

  const handleDelete = async (address) => {
    deleteTransaction(address);
  };

  const handleCopy = async (address) => {
    if('clipboard' in navigator){
      return await navigator.clipboard.writeText(address);
    }
    else{
      return document.execCommand('copy', true, address);
    }
  }

  const handleWithdraw = async (address) => {
    withdrawInvesment();
  }

  const actionColumn = [{
    field: "değişiklik",
    headerName: "Düzenle",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          
            <div className="viewButton" onClick={() => handleWithdraw()}>Withdraw</div>
          
          <div
            className="deleteButton"
            onClick={() => handleDelete(params.row.username)}
          >
            Delete
          </div>
          <div className="copyButton" onClick={() => handleCopy(params.row.username)}> Copy </div>
        </div>
      );
    },
  },];
  return (
    <div className="datatable">

      <div className="viewButton" onClick={() => handleWithdraw()}>Withdraw</div> 
      <div className="datatableTitle">
        Gönderilenler
        <Link to="/users/newtransfer" className="link">
          Yeni Yatırım Oluştur<i></i>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={transactions.reverse().map((transaction, i) => (  
          {   
          id: i,
          username: transaction.addressFrom,
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

export default Datatable;