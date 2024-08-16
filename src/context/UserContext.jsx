import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import axios from "../api/axiosDefault";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  // Get data for user
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");
    if (token && userId) {
      axios.get(`/users/${userId}/`, { headers: { Authorization: `Token ${token}` } })
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error("Error loading user:", error);
        });
    } else {
      console.error("Token or user ID not found.");
    }
  }, []);
  
  // Get data for profile of the user
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");
    if (userId) {
    axios.get(`/users/${userId}/profile/`, { headers: { Authorization: `Token ${token}`} })
      .then(response => {
        setProfile(response.data)
      })
      .catch(error => {
        console.error("Error loading profile information", error);
      });
    } else {
      console.error("Profile could not get loaded.");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, profile, setProfile}}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};