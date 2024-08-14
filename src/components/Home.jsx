import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Home() {

    const { user } = useContext(UserContext);

    return (
        <div>
        <h1>Home</h1>
        {console.log(localStorage.getItem("user_id"))}
        {user ? <p>Welcome, {user.id}<br/>
        {user.first_name} {user.last_name}<br/>
        {user.profile_description}<br/>
        {user.linkedin}<br/>
        {user.image}<br/>
        {user.created}<br/>
        {user.updated}<br/>
        {user.is_owner}
        </p> 
        
        
        : <p>Please log in</p>}

        </div>
    )
    }