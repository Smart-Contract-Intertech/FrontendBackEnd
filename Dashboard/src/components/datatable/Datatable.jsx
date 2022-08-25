import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useContext,useEffect } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import { deleteTransaction } from "../../context/TransactionReversal";
import { withdrawInvesment } from "../../context/WithdrawTransaction";

const Datatable = () => {

  const {transactions,setformData } = useContext(TransactionContext);

  const sta = ['PENDING', 'COMPLETED', 'CANCELLED'];

  const handleDelete = () => {

    const rows=transactions.reverse().map((transaction, i) => (  
      {   
      id: i,
      username: transaction.addressFrom,
      status: transaction.status,
      email: transaction.name,   
      age: transaction.amount,
      gonderimTarihi:transaction.gonderimTarihi,
      invesmentNumber: transaction.invesmentNo
      }))

      deleteTransaction();
  };

  const handleWithdraw = async () => {
    withdrawInvesment();
  }

  
  const handleResend = (id) => {
    const rows=transactions.reverse().map((transaction, i) => (  
      {   
      id: i,
      username: transaction.addressFrom,
      status: transaction.status,
      email: transaction.name,   
      age: transaction.amount,
      gonderimTarihi:transaction.gonderimTarihi
      }))
   
      console.log(rows[id]);
      setformData((prevState) => ({ "addressTo": rows[id].gonderimTarihi ,["nickName"]: rows[id].email}));  
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
         
          <Link to="/users/newtransfer" style={{ textDecoration: "none" }}>
            <div className="resendButton" 
            onClick={() => handleResend(params.row.id)}>Tekrar Gönder </div>
          </Link>

          <div
            className="deleteButton"
            onClick={() => handleDelete()}
          >
            Sil
          </div>
        </div>
        
      );
    },
  },];
  return (
    <div className="datatable">
      <div className="withdrawButton" onClick={() => handleWithdraw()}>Withdraw</div>
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
          status: sta[transaction.status],
          email: transaction.name,
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