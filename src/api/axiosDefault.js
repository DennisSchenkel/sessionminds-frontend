import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:9000",
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken",
    headers: {
        "Content-Type": "multipart/form-data"
    },
    withCredentials: true
});

axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
      const originalRequest = error.config;
  
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
  
        const refreshToken = localStorage.getItem("refreshToken");
        
        if (refreshToken) {
          try {
            const response = await axios.post("/token/refresh/", { refresh: refreshToken });
            const newAccessToken = response.data.access;
  
            localStorage.setItem("token", newAccessToken);
  
            axiosInstance.defaults.headers.common["Authorization"] = `Token ${newAccessToken}`;
            originalRequest.headers["Authorization"] = `Token ${newAccessToken}`;
  
            return axiosInstance(originalRequest);
          } catch (error) {
            console.error("Token refresh failed:", error);
            logoutUser();
          }
        }
      }
  
      return Promise.reject(error);
    }
  );
  

// Logout function
const logoutUser = () => {
    // Clear the token and user ID from localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user_id");
  
    // If the UserContext is available, clear the user and profile
    if (window.UserContext) {
      window.UserContext.setUser(null);
      window.UserContext.setProfile(null);
    }
  
    // Redirect to the login page
    window.location.href = "/";
  };


export default axiosInstance;

