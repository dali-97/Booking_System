import useFetch from "../../hooks/useFetch";
import "./feature.css";

const Featured = () => {
  //  custem hooks for fetching data
  const { data, loading, error } = useFetch(
    "/api/hotels/countByCity?cities=madrid,berlin,london"
  );
  return (
    <div className="featured">
      {loading ? (
        ""
      ) : (
        <>
          <div className="featuredItem">
            <img
              className="featuredimg"
              src="https://cf.bstatic.com/xdata/images/hotel/square600/452906354.webp?k=5d92d67fb47bb6e033e25e408801af2e59874b204337b74178ef50d16569594c&o="
              alt=""
            />
            <div className="featuredTitles">
              <h1>madrid</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredimg"
              src="https://cf.bstatic.com/xdata/images/hotel/square600/190435922.webp?k=a9f4631bd929d13cf4ee71bfd643dbb1e4ebde1bb532c639e79a146e3909d7ed&o="
              alt=""
            />
            <div className="featuredTitles">
              <h1>berlin</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredimg"
              src="https://cf.bstatic.com/xdata/images/hotel/square600/260560238.webp?k=33c832ff2e05fafebad2671e0eea997fce4f778195beb6f16973803548a6f938&o="
              alt=""
            />
            <div className="featuredTitles">
              <h1>london</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
