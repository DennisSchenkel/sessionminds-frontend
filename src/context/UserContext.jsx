import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import axios from "../api/axiosDefault";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");
    if (token && userId) {
      axios.get(`/profiles/${userId}/`, { headers: { Authorization: `Token ${token}` } })
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


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};