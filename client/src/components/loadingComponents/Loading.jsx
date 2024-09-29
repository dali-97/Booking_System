import PuffLoader from "react-spinners/PuffLoader";
import './loading.css'

const Loading = ({ loading }) => {
  return (
    <div className="loading-container">
      <PuffLoader color="blue" size={65} speedMultiplier={2} loading={loading} />
    </div>
  );
};

export default Loading;
