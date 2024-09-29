import useFetch from "../../hooks/useFetch";
import Loading from "../loadingComponents/Loading";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/api/hotels/countByType");
  const images = [
    "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=",
    "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=",
    "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450093.jpeg?k=aa5cc7703f3866af8ffd6de346c21161804a26c3d0a508d3999c11c337506ae1&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450064.jpeg?k=4d4ea22dc4828fd55a3889e90531c9841ddb2d9abf460c420cdd24f2a9b658d2&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450097.jpeg?k=eac0f917a53dc395bd379fef8c191e7d5e37012b68e60232e4f6bba2a2901b7a&o=",
  ];
  // console.log(data)
  return (
    <div className="pList">
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          {data &&
            images.map((image, i) => (
              <div className="pListItem" key={i}>
                <img className="pImage" src={image} alt="image" />
                <div className="pListTitle">
                  <h1>{data[i]?.type}</h1>
                    <h2>
                      {data[i]?.count} {data[i]?.type}
                    </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
