import {Route, Routes, Outlet} from "react-router-dom"
import styles from "./App.module.css"
import Tools from "./pages/Tools";
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Regist from "./pages/auth/Regist";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Contributors from "./pages/Contributors";

import "./api/axiosDefault";

export default function App() {

const testGetUserList = async () => {
  const response = await fetch("http://127.0.0.1:9000/profiles/");
  const data = await response.json();
  console.log(data);
}

testGetUserList();

  return (
    <>
      <Header />
      <div className={styles.Container}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
        <Outlet />
      </div>
    </>
  )
}

