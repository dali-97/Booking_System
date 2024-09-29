import { createContext, useEffect, useReducer } from "react";
import Loading from "../components/loadingComponents/Loading";

//  initial state
const INITIAL_STATE = {
  user: null,
  Loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        Loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        Loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: JSON.parse(localStorage.getItem('user')) ||  null,
        Loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        Loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  // update LocalStorge 
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
  },[state.user])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        Loading: state.Loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
