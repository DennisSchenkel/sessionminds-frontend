import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from "../api/axiosDefault";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    // Get user and profile data from the API
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const accessToken = localStorage.getItem("accessToken");
          const userId = localStorage.getItem("user_id");
  
          if (accessToken && userId) {
            // Fetch user data
            const userResponse = await axios.get(`/users/${userId}/`, { headers: { Authorization: `Token ${accessToken}` } });
            setUser(userResponse.data);
  
            // Fetch profile data
            const profileResponse = await axios.get(`/users/${userId}/profile/`, { headers: { Authorization: `Token ${accessToken}` } });
            setProfile(profileResponse.data);
          } else {
            console.error("Token or user ID not found.");
          }
        } catch (err) {
          setError(err);
          console.error("Error loading data:", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

  return (
    <UserContext.Provider value={{loading, setLoading, user, setUser, profile, setProfile, error, setError}}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};