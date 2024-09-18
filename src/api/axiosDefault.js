import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:9000",
    headers: {
        "Content-Type": "application/json",
    },
});

// Füge einen Interceptor hinzu, um den Authorization-Header für jede Anfrage zu setzen
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem("access");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Interceptor für die Behandlung von 401-Fehlern (Token-Aktualisierung)
axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refresh = localStorage.getItem("refresh");
            
            if (refresh) {
                try {
                    const response = await axios.post("/api/token/refresh/", { refresh: refresh });
                    const newAccessToken = response.data.access;

                    localStorage.setItem("access", newAccessToken);

                    // Setze den neuen Token für die Wiederholung der ursprünglichen Anfrage
                    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
                    originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

                    // Wiederhole die ursprüngliche Anfrage mit dem neuen Token
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

// Logout-Funktion
const logoutUser = () => {
    // Lösche Token und User-Daten aus localStorage
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user_id");

    // Wenn UserContext vorhanden ist, setze User und Profil auf null
    if (window.UserContext) {
      window.UserContext.setUser(null);
      window.UserContext.setProfile(null);
    }

    // Weiterleitung zur Login-Seite
    window.location.href = "/";
};

export default axiosInstance;
