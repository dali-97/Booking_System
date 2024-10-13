import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./context/AuthContext";
import { DarkModeContext } from "./context/darkModeContext";
import { prorductInputs, userInputs } from "./formSource";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Lgoin from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./style/dark.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);
  const ProtectedRoutes = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Lgoin />} />
          <Route
            index
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="users">
            <Route
              index
              element={
                <ProtectedRoutes>
                  <List />
                </ProtectedRoutes>
              }
            />
            <Route
              path="new"
              element={
                <ProtectedRoutes>
                  <New inputs={userInputs} title="Add new User" />
                </ProtectedRoutes>
              }
            />
            <Route
              path=":userId"
              element={
                <ProtectedRoutes>
                  <Single />
                </ProtectedRoutes>
              }
            />
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <ProtectedRoutes>
                  <List />
                </ProtectedRoutes>
              }
            />
            <Route
              path=":productId"
              element={
                <ProtectedRoutes>
                  <Single />
                </ProtectedRoutes>
              }
            />
            <Route
              path="new"
              element={
                <ProtectedRoutes>
                  <New inputs={prorductInputs} title="Add new Product" />
                </ProtectedRoutes>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
