import { useState, useContext } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axiosInstance from "../../api/axiosDefault";

export default function CommentForm({ toolId, onAddingComment }) {
  // Get user and profile data from the context
  const { user, profile } = useContext(UserContext);

  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);

  // Handle the change in the comment input
  const handleChange = (event) => {
    setComment(event.target.value);
  };

  // Handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if the comment is at least 10 characters long
    if (comment.length < 10) {
      setError("The comment must be at least 10 characters long.");
      return;
    }

    // Send the comment to the API
    try {
      const response = await axiosInstance.post(`/comments/tool/${toolId}/`, {
        text: comment,
      });
      setComment("");
      setError(null);
      // Call the onAddingComment function if it was passed as a prop
      if (onAddingComment) {
        onAddingComment(response.data);
      }
      // Handle any errors
    } catch (error) {
      setError("Error when adding the comment. Please try again later.");
    }
  };

  // If the user is logged in and has a first and last name, show the comment form
  return (
    <>
      {user ? (
        <>
          {profile.first_name && profile.last_name ? (
            <>
              <Form onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write a nice comment..."
                    value={comment}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-2">
                  Send comment
                </Button>
              </Form>
            </>
          ) : (
            <>
              <p>
                Please{" "}
                <Link to={`/profile/${profile.slug}`}>
                  add your profile information
                </Link>{" "}
                first to write a comment.
              </p>
            </>
          )}
        </>
      ) : (
        <>
          <p>
            Please <Link to="/login">login here</Link> to write a comment.
          </p>
        </>
      )}
    </>
  );
}
