import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userColumns } from "../../datatablesource";
import useFetch from "../../hooks/useFetch";
import "./dataTable.scss";

const DataTable = () => {
  const [list, setList] = useState();
  const { data, error, loading } = useFetch(`api/users`);
  // Set initial pagination state
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  console.log(data)
  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`api/users/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error)
    }
  };

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
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
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
        rows={list}
        columns={userColumns.concat(actionColumn)}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
        rowsPerPageOptions={[5]} // Allow only 5 rows per page
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default DataTable;
