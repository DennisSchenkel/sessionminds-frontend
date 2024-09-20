import { Route, Routes, Outlet } from "react-router-dom"
import styles from "./App.module.css"
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Regist from "./pages/auth/Regist";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import ToolEditor from "./pages/ToolEditor";
import ToolDetails from "./pages/ToolDetails";
import Topics from "./pages/Topics";
import Contributors from "./pages/Contributors";

import "./api/axiosDefault";

export default function App() {

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
          <Route path="/tools/:slug" element={<ToolDetails />} />
          <Route path="/editor"
            element={
              <ProtectedRoute>
                <ToolEditor />
              </ProtectedRoute>
            }
          />
          <Route path="/editor" element={<ToolEditor />} />
          <Route path="/editor/:id" element={<ToolEditor />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
        <Outlet />
      </div>
    </>
  )
}

