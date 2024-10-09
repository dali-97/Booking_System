import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import "./hotels.css";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faL,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useContext, useState } from "react";
import {
  faArrowAltCircleLeft,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/loadingComponents/Loading";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Modal from "../../components/moadlComponents/Modal";

const Hotels = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, error, loading, refatch } = useFetch(`/api/hotels/find/${id}`);
  const [slidNumber, setSlidNumber] = useState(0);
  const [openSlid, setOpenSlid] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { dates, options } = useContext(SearchContext);
  // transform the dates
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const { user } = useContext(AuthContext);

  const handleClick = () => {
    if (user) {
      setOpenModal((prev) => !prev);
    } else {
      navigate("/login");
    }
  };

  const handelOpen = (index) => {
    setSlidNumber(index);
    setOpenSlid((prev) => !prev);
  };
  const handelMove = (direction) => {
    let newSlidNumber;
    if (direction === "l") {
      newSlidNumber = slidNumber === 0 ? 5 : slidNumber - 1;
    } else {
      newSlidNumber = slidNumber === 5 ? 0 : slidNumber + 1;
    }
    setSlidNumber(newSlidNumber);
  };
  return (
    <div>
      <NavBar />
      <Header type="list" />
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <div className="hotelContainer">
            {openSlid && (
              <div className="slider">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="close"
                  onClick={() => setOpenSlid(false)}
                />
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className="arrow"
                  onClick={() => handelMove("l")}
                />
                <div className="sliderWrapper">
                  <img
                    src={data.potos[slidNumber]}
                    alt=""
                    className="sliderImage"
                  />
                </div>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="arrow"
                  onClick={() => handelMove("r")}
                />
              </div>
            )}
            <div className="hotelWrapper">
              <button className="bookNow">Reserve or Book Now!</button>
              <h1 className="hotelTitle">{data.name}</h1>
              <div className="hotelAdress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address}</span>
              </div>
              <span className="hotelDistance">
                Excellent location - {data.distance}m from center
              </span>
              <span className="hotelPriceHighlight">
                Book a stay over ${data.cheapestPrice} at this property and get
                a free airport taxi
              </span>
              <div className="hotelImages">
                {data.potos?.map((photo, index) => (
                  <div className="hotelImageWrapper">
                    <img
                      src={photo}
                      alt=""
                      className="hotelImg"
                      onClick={() => handelOpen(index)}
                    />
                  </div>
                ))}
              </div>
              <div className="hotelDeatils">
                <div className="hotelDeatilsText">
                  <h1 className="hotelTitel">{data?.title}</h1>
                  <p className="hotelDescription">{data.desc}</p>
                </div>
                <div className="hotelDeatilsPrice">
                  <h1>Perfect for a 9-night stay!</h1>
                  <span>
                    Located in {data.city}, this prperty has an excellent
                    location score of9.8!
                  </span>
                  <h2>
                    <b>${`${data.cheapestPrice * days * options.room} `}</b> (
                    {days}night)
                  </h2>
                  <button onClick={handleClick}>Reserve or Book Now!</button>
                </div>
              </div>
            </div>
            <MailList />
            <Footer />
          </div>
        </>
      )}
      {openModal && <Modal setOpen={setOpenModal} hotelID={id}/>}
    </div>
  );
};

export default Hotels;
