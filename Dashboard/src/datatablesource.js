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
    field: "email",
    headerName: "Takma Isim",
    width: 230,
  },

  {
    field: "age",
    headerName: "ETH",
    width: 100,
  },
  {
    field: "gonderimTarihi",
    headerName: "Gonderim Tarihi",
    width: 350,
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
