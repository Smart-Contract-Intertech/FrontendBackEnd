export const userColumns = [
  {
    field: "user",
    headerName: "Adres",
    width: 250,
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
    width: 200,
  },
  {
    field: "age",
    headerName: "ETH",
    width: 170,
  },
  {
    field: "gonderimTarihi",
    headerName: "Teslim Tarihi",
    width: 180,
  },
  {
    field: "status",
    headerName: "Durum",
    width: 190,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];