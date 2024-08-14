import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:9000",
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    headers: {
        'Content-Type': 'multipart/form-data'
    },
    withCredentials: true
});

export default axiosInstance;

