import DataTable from "../../components/dataTable/DataTable";
import Navbar from "../../components/navbar/Navbar";
import SidBar from "../../components/sidbar/SidBar";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <SidBar />
      <div className="listContainer">
        <Navbar />
        <DataTable />
        data table
      </div>
    </div>
  );
};

export default List;
