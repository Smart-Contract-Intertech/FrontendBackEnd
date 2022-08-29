export const userColumns = [
  
  {
    field: "user",
    headerName: "Adres",
    width: 230,
    renderCell: (params) => {
      return (
        <div >
        
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "age",
    headerName: "ETH",
    width: 100,
  },
  {
    field: "gonderimTarihi",
    headerName: "Teslim Tarihi",
    width: 150,
  },
  {
    field: "status",
    headerName: "Durum",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
