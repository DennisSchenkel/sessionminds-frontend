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
        const access = localStorage.getItem("access");
        const userId = localStorage.getItem("user_id");

        if (access && userId) {
          // Fetch user data
          const userResponse = await axios.get(
            `/users/${userId}/`,
            { headers: { Authorization: `Bearer ${access}` } }
          );
          setUser(userResponse.data);

          // Fetch profile data
          const profileResponse = await axios.get(
            `/users/${userId}/profile/`,
            { headers: { Authorization: `Bearer ${access}` } }
          );
          setProfile(profileResponse.data);
        } else {
          setUser(null);
          setProfile(null);
        }
      } catch (error) {
        setError(error);
        setUser(null);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Update the user profile
  const updateProfile = async (updatedProfile) => {
    try {
      setLoading(true);
      const access = localStorage.getItem("access");
      const userId = localStorage.getItem("user_id");

      const response = await axios.put(
        `/users/${userId}/profile/`,
        updatedProfile,
        { headers: { Authorization: `Bearer ${access}` } }
      );
      setProfile(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{loading, setLoading, user, setUser, profile, setProfile, updateProfile, error, setError}}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default UserProvider;