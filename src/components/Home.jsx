import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Home() {

    const { user, profile } = useContext(UserContext);



    return (
        <div>
        <h1>Home</h1>
        {console.log(localStorage.getItem("user_id"))}
        {user ? <p>Welcome, {user.id}<br/>
        </p> 
        
        
        : <p>Please log in</p>}

        {profile ? <p>Profile vorhanden <img src={profile.image} /> {profile.image}</p> : <p>No profile</p>}

        

        </div>
    )
    }