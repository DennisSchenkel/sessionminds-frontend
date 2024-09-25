import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";


export default function CommentForm({ onSubmit }) {

    const { user, profile } = useContext(UserContext);
    
    const [comment, setComment] = useState("");

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(comment);
        setComment("");
    };

    return (
        <>
            {user ?
            <>
                {profile.first_name && profile.last_name ? 
                <>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Write a nice comment..."
                                value={comment}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary" className="mt-2">
                            Submit Comment
                        </Button>
                    </Form>
                </>
                : 
                <>
                <p>Please <Link to="/login">login</Link> to add a comment.</p>
                </>
                }
            </>
            :
            <>
                <p>Please <Link to="/login">login</Link> to add a comment.</p>
            </>
            }
        </>
    );
}