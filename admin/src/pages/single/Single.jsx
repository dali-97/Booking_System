import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import SidBar from "../../components/sidbar/SidBar";
import Tablee from "../../components/table/Table";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <SidBar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://media.istockphoto.com/id/1345020578/photo/cheerful-caucasian-schoolgirl-teenager-pupil-student-smiling-with-toothy-smile-looking-at.jpg?b=1&s=612x612&w=0&k=20&c=jsQRZP9z4YCAUH8UBHZ3CPva7RllTuFrAUJLEOam8ZU="
                alt="avatar"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Do</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemvalue">Jane_Do@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemvalue">+216 26403146</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemvalue">
                    Elton st. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemvalue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={"User spending (Last 6 Monthes)"} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <Tablee/>
        </div>
      </div>
    </div>
  );
};

export default Single;
