import { useState } from "react";
import "./login.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const handelChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handelClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          className="lInput"
          placeholder="userName"
          id="username"
          onChange={handelChange}
          autoComplete="none"
        />
        <input
          type="password"
          className="lInput"
          placeholder="password"
          autoComplete="none"
          id="password"
          onChange={handelChange}
        />
        <button className="lButton" onClick={handelClick} disabled={loading}>
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
