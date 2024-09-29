import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchitem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
        alt=""
        className="searchimg"
      />
      <div className="siDesc">
        <h1 className="sTitle">{item.name}</h1>
        <span className="siDistance">
          {item.distance ? item.distance : 500}m from center
        </span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later , so lock in this great price today !
        </span>
      </div>
      <div className="siDeatils">
        {item.rating && (
          <div className="siRaiting">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailsTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/hotels/${item._id}`}
          >
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
