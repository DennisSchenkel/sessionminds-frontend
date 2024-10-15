import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

// Indication if a token refresh is in progress
let isRefreshing = false;
// Queue for requests that are waiting for the token refresh
let failedQueue = [];
// Flag to indicate if the user is logged out
let isLoggedOut = false;

// Function to process the queue
const processQueue = (error, token = null) => {
    if (error && !isLoggedOut) {
        logoutUser();
    }

    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

// Add a request interceptor to add the authorization header to all requests
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem("access");
        if (token) {
            // Not adding the authorization header to the token refresh request
            if (!config.url.endsWith("/api/token/refresh/")) {
                config.headers["Authorization"] = `Bearer ${token}`;
            } 
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle 401 errors and refresh the token
axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        // Check if the error response is 401 and the request is the token refresh request
        if (originalRequest.url.includes("/api/token/refresh/")) {
            logoutUser();
            return Promise.reject(error);
        }

        // Check if the error response is 401 and the request has not been retried yet
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (isRefreshing) {
                // If a token refresh is already in progress, add the request to the queue
                return new Promise(function(resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                .then(token => {
                    // The request will be retried with the new token
                    originalRequest.headers['Authorization'] = 'Bearer ' + token;
                    return axiosInstance(originalRequest);
                })
                .catch(err => {
                    return Promise.reject(err);
                });
            }

            isRefreshing = true;

            const refresh = localStorage.getItem("refresh");

            if (refresh) {
                try {
                    // Request a new token with the refresh token
                    const refreshConfig = {
                        headers: {
                            "Content-Type": "application/json",
                        }
                    };
                    const response = await axiosInstance.post("/api/token/refresh/", { refresh: refresh }, refreshConfig);
                    const newAccessToken = response.data.access;
                    // Also get the new refresh token
                    const newRefreshToken = response.data.refresh;

                    localStorage.setItem("access", newAccessToken);
                    localStorage.setItem("refresh", newRefreshToken);

                    // The new token is added to the authorization header
                    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;

                    // Process the queue
                    processQueue(null, newAccessToken);

                    isRefreshing = false;

                    // The original request is retried with the new token
                    originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                    return axiosInstance(originalRequest);

                } catch (err) {
                    // If the token refresh fails, process the queue with the error
                    processQueue(err, null);
                    isRefreshing = false;
                    logoutUser();
                    return Promise.reject(err);
                }
            } else {
                isRefreshing = false;
                processQueue(error, null);
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);

// Logout function to delete tokens from local storage
const logoutUser = () => {
    if (isLoggedOut) return;
    isLoggedOut = true;

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user_id");

    // If UserContext is available, set user and profile to null
    if (window.UserContext) {
        window.UserContext.setUser(null);
        window.UserContext.setProfile(null);
    }

    // Redirect to home page
    window.location.href = "/";
};

export default axiosInstance;
