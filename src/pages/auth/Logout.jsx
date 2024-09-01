import axios from "../../api/axiosDefault";

export default function Logout() {
    
    async function logout() {
        try {
            const response = await axios.post("/logout/");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("user_id");
            console.log(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    
    return (
        <div>
        <h1>Logout</h1>
        <button onClick={logout}>Logout</button>
        </div>
    )
    }