import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "../../api/axiosDefault";

export default function Logout() {
    
    const navigate = useNavigate();
    const [error, setError] = useState({});

    const { user, setUser, setProfile } = useContext(UserContext);

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }
    , [user, navigate]);


    const logout = async () => {
        try {
            const response = await axios.post("/logout/")
            if (response.status === 200) {
                localStorage.removeItem("access");
                localStorage.removeItem("refresh");
                localStorage.removeItem("user_id");
                setUser(null);
                setProfile(null);
                navigate("/");
            } else {
                setError({ non_field_errors: ["Failed to logout."] });
            }          
        } catch (error) {
            if (error.response) {
                setError(error.response.data);
            } else if (error.request) {
                setError({ non_field_errors: ["No response from server. Please try again later."] });
            } else {
                setError({ non_field_errors: ["An unexpected error occurred."] });
            }
        }
    }

    return (
        <div>
            {error.non_field_errors?.map((message, index) => (
                <Alert variant="danger" key={index}>
                    {message}
                </Alert>
            ))}      
            <span onClick={logout}>Logout</span>
        </div>
    )
}
