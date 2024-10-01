import { useState, useContext } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axiosInstance from "../../api/axiosDefault";

export default function CommentForm({ toolId, onAddingComment }) { 
    const { user, profile } = useContext(UserContext);
    
    const [comment, setComment] = useState("");
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (comment.length < 10) {
            setError("The comment must be at least 10 characters long.");
            return;
        }

        try {
            const response = await axiosInstance.post(
                `/comments/tool/${toolId}/`,
                { text: comment },
            );
            setComment("");
            setError(null);
            if (onAddingComment) {
                onAddingComment(response.data);
            }
        } catch (error) {
            setError("Error when adding the comment. Please try again later.");
        } 
    };

    return (
        <>
            {user ?
                <>
                    {profile.first_name && profile.last_name ? 
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
                        : 
                        <>
                            <p>Please <Link to={`/profile/${profile.slug}`}>add your profile information</Link> first to write a comment.</p>
                        </>
                    }
                </>
                :
                <>
                    <p>Please <Link to="/login">login here</Link> to write a comment.</p>
                </>
            }
        </>
    );
}
