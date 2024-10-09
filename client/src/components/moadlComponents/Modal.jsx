import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./modal.css";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Modal = ({ setOpen, hotelID }) => {
  const { data, loading } = useFetch(`/api/hotels/room/${hotelID}`);
  const [selectedRooms, setSelectedRooms] = useState([]);

  const { dates } = useContext(SearchContext);

  // get the range betwen the startDate and endDate
  const getDateInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let list = [];
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };

  const allDates = getDateInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unvailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };
  const handelSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item != value)
    );
  };
  const navigate = useNavigate()
  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/api/room/availability/${roomId}`, {
            dates: allDates,
          });
          return res.data;
        })
      );
      setOpen((prev) => !prev);
      navigate('/')
    } catch (error) {}
  };

  return (
    <div className="reserve">
      <div className="reserveContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen((prev) => !prev)}
        />
        <span>Select your rooms</span>
        {data &&
          data.map((item) => (
            <div className="rItem">
              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc} </div>
                <div className="rMax">
                  Max People : <b>{item.maxPeople}</b>
                </div>
                <div className="rPrice">minPrice: ${item.price} </div>
              </div>
              <div className="SelectRooms">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="room">
                    <label>{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handelSelect}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Modal;
