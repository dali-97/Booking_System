import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        // console.log('error' , error.message)
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  // refatch data again
  const refatch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  return { data, loading, error, refatch };
};

export default useFetch;
