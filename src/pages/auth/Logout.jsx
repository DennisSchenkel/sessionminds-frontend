import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Alert from "react-bootstrap/Alert";
import axios from "../../api/axiosDefault";

export default function Logout() {
  // Local state to store the error
  const [error, setError] = useState({});

  // Get the user and setUser functions from the context
  const { user, setUser, setProfile } = useContext(UserContext);

  // Get the navigate function from the router
  const navigate = useNavigate();

  // Redirect to the home page if the user is not logged in
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Logout function to remove the access and refresh tokens
  const logout = async () => {
    // Attempt to logout
    try {
      const response = await axios.post("/logout/");
      // If the logout is successful, remove the tokens and user data
      if (response.status === 200) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user_id");
        setUser(null);
        setProfile(null);
        navigate("/");
        // Handle errors
      } else {
        setError({ non_field_errors: ["Failed to logout."] });
      }
      // Handle errors
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else if (error.request) {
        setError({
          non_field_errors: [
            "No response from server. Please try again later.",
          ],
        });
      } else {
        setError({ non_field_errors: ["An unexpected error occurred."] });
      }
    }
  };

  // Render the error messages
  return (
    <div>
      {error.non_field_errors?.map((message, index) => (
        <Alert variant="danger" key={index}>
          {message}
        </Alert>
      ))}
      <span onClick={logout}>Logout</span>
    </div>
  );
}
