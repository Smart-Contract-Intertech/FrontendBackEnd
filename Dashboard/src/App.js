import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AboutUs from "./pages/aboutus/AboutUs";
import List from "./pages/list/List";
import List2 from "./pages/list2/List2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import NewTransfer from "./pages/newtransfer/NewTransfer";
import Edit from "./pages/edit/Edit";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="user" element={<Login />} />
            <Route path="sent">
              <Route index element={<List />} />
              <Route
                path="newtransfer"
                element={<NewTransfer/>}
              />
            <Route
                path="edit"
                element={<Edit/>}
              />
              <Route path="newtransfer" element={<NewTransfer/>} />
              <Route path="edit" element={<Edit/>} />
            </Route>
            <Route path="sentToMe">
              <Route index element={<List2 />} />
            </Route>
            <Route path="about" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;