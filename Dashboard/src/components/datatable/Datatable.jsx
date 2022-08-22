import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
const Datatable = () => {
  const {transactions } = useContext(TransactionContext);

  //const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    //setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [{
    field: "değişiklik",
    headerName: "Düzenle",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">Düzenle</div>
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
        rows={transactions.reverse().map((transaction, i) => (  
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

export default Datatable;