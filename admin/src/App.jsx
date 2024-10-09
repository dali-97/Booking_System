import "./App.css";
import Home from "./pages/home/Home";
import Lgoin from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import { prorductInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Lgoin />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add new User" />}
            />
            <Route path=":userId" element={<Single />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={prorductInputs} title="Add new Product" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
