import useFetch from "../../hooks/useFetch";
import Loading from "../loadingComponents/Loading";
import "./featuredPropperties.css";

const FeaturedPropperties = () => {
  const { data, loading, error } = useFetch("api/hotels?featured=true&limit=4");
  return (
    <div className="fp">
      {loading ? (
        <Loading loading={Loading} />
      ) : (
        <>
          {data &&
            data.map((item) => (
              <div className="fpItem" key={item}>
                <img className="fpImage" src={item.photos[0]} alt="" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">
                  Starting from ${item.cheapestPrice}
                </span>
                {item.raiting && (
                  <div className="fpRaiting">
                    <button>{item.raiting}</button>
                    <span>Exellent</span>
                  </div>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FeaturedPropperties;
