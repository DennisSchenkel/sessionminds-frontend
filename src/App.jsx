import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import styles from "./App.module.css"
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Regist from "./pages/auth/Regist";
import Logout from "./pages/auth/Logout";
import Profile from "./pages/Profile";
import ProfileEditor from "./pages/profile/ProfileEditor";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import ToolEditor from "./pages/ToolEditor";
import ToolDetails from "./pages/ToolDetails";
import Topics from "./pages/Topics";
import TopicDetails from "./pages/TopicDetails";
import Contributors from "./pages/Contributors";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

import "./api/axiosDefault";

export default function App() {

  const location = useLocation();
  const { loading, profile } = useContext(UserContext);  

  const [alert, setAlert] = useState({ message: "", variant: "" });
  const [profileAlert, setProfileAlert] = useState({ message: "" });

  useEffect(() => {
    if (profile) {
      if (!profile.first_name || !profile.last_name) {
        setProfileAlert({
          message: (
            <>
              For contribution in the community, you need to have your first name and last name in your profile. Please update your profile{' '}
              <a href={`/profile/editor/${profile.slug}`}>here</a>.
            </>
          ),
          variant: "warning",
        });
      } else {
        setProfileAlert({ message: "" });
      }
    }
  }, [profile]);

  useEffect(() => {
    if (location.state && location.state.message) {
      setAlert({
        message: location.state.message,
        variant: location.state.variant || "info",
      });

      // Set a timer to clear the alert message after 5 seconds
      const timer = setTimeout(() => {
        setAlert({ message: "", variant: "" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [location.state]);


  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <div className={styles.Container}>
      {profileAlert.message && 
        <Alert variant={profileAlert.variant || "info"}>
          {profileAlert.message}
        </Alert>
      }

      {alert.message && 
        <Alert 
          variant={alert.variant} 
          onClose={() => setAlert({ message: "", variant: "" })} 
          dismissible
        >
          {alert.message}
        </Alert>
      }   
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile/:slug" element={<Profile />} />
          <Route path="/profile/editor/:slug" 
            element={
            <ProtectedRoute>
              <ProfileEditor />
            </ProtectedRoute>
              }
          />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/:slug" element={<ToolDetails />} />
          <Route path="/editor"
            element={
              <ProtectedRoute>
                <ToolEditor />
              </ProtectedRoute>
            }
          />
          <Route path="/editor/:id" 
            element={
              <ProtectedRoute>
                <ToolEditor />
              </ProtectedRoute>
            }
          />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:slug" element={<TopicDetails />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
        <Outlet />
      </div>
    </>
  )
}

