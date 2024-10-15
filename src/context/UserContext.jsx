import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "../api/axiosDefault";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // User and profile data
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect to load user data on initialization
  useEffect(() => {
    const fetchData = async () => {
      try {
        const access = localStorage.getItem("access");
        const userId = localStorage.getItem("user_id");

        if (access && userId) {
          // Fetch user data
          const userResponse = await axios.get(`/users/${userId}/`, {
            headers: { Authorization: `Bearer ${access}` },
          });
          setUser(userResponse.data);

          // Fetch profile data
          const profileResponse = await axios.get(`/users/${userId}/profile/`, {
            headers: { Authorization: `Bearer ${access}` },
          });
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

  // Login function
  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await axios.post("/login/", credentials);
      const { access, refresh, user_id } = response.data;

      // Store tokens and user ID
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      localStorage.setItem("user_id", user_id);

      // Fetch user and profile data
      const userResponse = await axios.get(`/users/${user_id}/`, {
        headers: { Authorization: `Bearer ${access}` },
      });
      setUser(userResponse.data);

      const profileResponse = await axios.get(`/users/${user_id}/profile/`, {
        headers: { Authorization: `Bearer ${access}` },
      });
      setProfile(profileResponse.data);

      setError(null);
    } catch (error) {
      setError(error.response?.data || { non_field_errors: ["Login failed"] });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    // Clear local storage
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user_id");

    // Reset user and profile data
    setUser(null);
    setProfile(null);
  };

  // Update profile
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
      setError(
        error.response?.data || { non_field_errors: ["Profile update failed"] }
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        setUser,
        profile,
        setProfile,
        login,
        logout,
        updateProfile,
        error,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
