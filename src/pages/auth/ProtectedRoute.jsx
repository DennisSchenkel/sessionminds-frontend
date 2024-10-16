import { Navigate } from "react-router-dom";
import { useUser } from "../../context/useUser";

export default function ProtectedRoute({ children }) {
  // Get the user and loading state from the context
  const { user, loading } = useUser();

  // Render loading state
  if (loading) return <div>Loading...</div>;

  // Redirect to the login page if the user is not logged in
  if (!user) return <Navigate to="/login" />;

  // Render the children if the user is logged in
  return children;
}
