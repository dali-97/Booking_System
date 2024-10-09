import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import "./dataTable.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const DataTable = () => {
  const [data, setData] = useState(userRows);

  // Set initial pagination state
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  const handleDelete = (params) => {
    setData(data.filter(item => item.id !== params))
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">
              <Link to="/users/test" style={{ textDecoration: "none" }}>
                <span>View</span>
              </Link>
            </div>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
              <span>Delete</span>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        add New User
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
        rowsPerPageOptions={[5]} // Allow only 5 rows per page
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
