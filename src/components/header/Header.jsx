import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";



export default function Header() {

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
    

    const { loading, user, profile } = useContext(UserContext);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.header}>
        <h1>Header</h1>
        {user ? <p>Welcome, {user.id}<br/>
        </p> 
        
        
        : <p>Please log in</p>}

        {profile ? <p>Profile vorhanden <br />{profile.image}</p> : <p>No profile</p>}


        <button onClick={logoutUser}>Logout</button>

        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/regist">Regist</Link>
        <Link to="/tools">Tools</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/contributors">Contributors</Link>
        </div>
    )
    }