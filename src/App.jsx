import {Route, Routes, Link, Outlet} from 'react-router-dom'
import styles from './App.module.css'
import Test from "./components/Test";
import Home from "./components/Home";
import Login from "./pages/auth/Login";
import Regist from "./pages/auth/Regist";


import "./api/axiosDefault";


export default function App() {

const testGetUserList = async () => {
  const response = await fetch("http://127.0.0.1:9000/profiles/");
  const data = await response.json();
  console.log(data);
}

testGetUserList();

  return (
    <div className={styles.App}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/regist">Regist</Link>
      <Link to="/test">Test</Link>
      <p className={styles.readthedocs}>
        Click on the Vite and React logos to learn more
      </p>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
      <Outlet />
    </div>
  )
}

