import styles from "../tools/Tools.module.css";
import { useEffect, useState, useContext, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Emoji } from "emoji-picker-react";
import { UserContext } from "../../context/UserContext";
import { Modal, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import CommentForm from "../comments/CommentForm";
import CommentListElement from "../comments/CommentListElement";

import axios from "../../api/axiosDefault";

export default function ContentToolDetails() {
  // Get the tool slug from the URL
  const { slug } = useParams();
  // Get the user from the context
  const { user } = useContext(UserContext);

  // Navigation hook for redirecting
  const navigate = useNavigate();

  // Tool details state
  const [toolDetails, setToolDetails] = useState({});
  // Alert state
  const [alert, setAlert] = useState({ message: "", variant: "" });
  // Error state
  const [loading, setLoading] = useState(true);
  // Error state
  const [error, setError] = useState(null);

  // Vote count state
  const [voteCount, setVoteCount] = useState(toolDetails.vote_count);
  // User has voted state
  const [userHasVoted, setUserHasVoted] = useState(false);
  // Vote ID state
  const [voteId, setVoteId] = useState(null);
  // Show vote modal state
  const [showVoteModal, setShowVoteModal] = useState(false);
  // Show delete modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Fetch tool data
  const fetchToolData = useCallback(async () => {
    // Fetch tool details
    try {
      const toolResponse = await axios.get(`/tools/tool/${slug}`);
      setToolDetails(toolResponse.data);
      setVoteCount(toolResponse.data.vote_count);
      // Fetch vote details if the tool has an ID
      if (toolResponse.data.id) {
        const voteResponse = await axios.get(
          `/votes/tool/${toolResponse.data.id}/`
        );
        setUserHasVoted(voteResponse.data.user_has_voted);
        setVoteId(voteResponse.data.vote_id);
      }
      // Handle errors
    } catch (error) {
      setError("Failed to load tool.");
      // Handle loading
    } finally {
      setLoading(false);
    }
  }, [slug]);

  // Fetch tool data on initialization
  useEffect(() => {
    fetchToolData();
  }, [fetchToolData]);

  // Upvote handler
  const upVoteHandler = useCallback(async () => {
    const toolVoteData = { tool: toolDetails.id };
    // Submit vote
    try {
      const response = await axios.post("/votes/", toolVoteData);
      // Handle successful vote submission
      if (response.status === 201) {
        const voteId = response.data.id;
        await fetchToolData();
        setUserHasVoted(true);
        setVoteId(voteId);
      }
      // Handle errors
    } catch (error) {
      setError("Error submitting vote.");
    }
  }, [toolDetails.id, fetchToolData]);

  // Downvote handler
  const downVoteHandler = useCallback(async () => {
    // Delete vote
    if (!voteId) {
      return;
    }
    // Submit vote
    try {
      const response = await axios.delete(`/votes/${voteId}/`);
      // Handle successful vote deletion
      if (response.status === 204) {
        await fetchToolData();
        setUserHasVoted(false);
        setVoteId(null);
      }
      // Handle errors
    } catch (error) {
      setError("Error submitting vote.");
    }
  }, [voteId, fetchToolData]);

  // Delete tool handler
  const handleDeleteTool = (event) => {
    event.preventDefault();
    // Delete tool
    if (toolDetails.id && toolDetails.is_owner) {
      axios
        .delete(`/tools/${toolDetails.id}/`)
        .then(() => {
          navigate("/", {
            state: {
              message: `${toolDetails.title} was deleted!`,
              variant: "danger",
            },
          });
        })
        // Handle errors
        .catch((error) => {
          setError(error.response.data);
        });
    }
  };

  // Add new comment handler
  const handleNewComment = (newComment) => {
    setToolDetails((prevDetails) => ({
      ...prevDetails,
      comments: [...prevDetails.comments, newComment],
    }));
  };

  // Delete comment handler
  const handleDeleteComment = (
    commentId,
    message = "Comment was deleted successfully!",
    variant = "info"
  ) => {
    // Delete comment
    if (commentId) {
      const newComments = toolDetails.comments.filter(
        (comment) => comment.id !== commentId
      );
      setToolDetails((prevDetails) => ({
        ...prevDetails,
        comments: newComments,
      }));
      setAlert({ message, variant });
      // Handle errors
    } else {
      setAlert({
        message: "Error when deleting the comment. Please try again later.",
        variant: "danger",
      });
    }

    // Hide the alert after 5 seconds
    const timer = setTimeout(() => {
      setAlert({ message: "", variant: "" });
    }, 5000);

    return () => clearTimeout(timer);
  };

  // Display loading message
  if (loading) return <div>Loading...</div>;

  // Display error message
  return (
    <>
      <Alert
        variant="danger"
        show={error}
        onClose={() => setError(null)}
        dismissible
      >
        {error}
      </Alert>

      <div className="pb-3">
        <Link
          to={".."}
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </Link>
      </div>
      <div className="row">
        <div className="col row">
          <div className={`${styles["tool-details-icon"]} col-auto`}>
            <Emoji unified={toolDetails.icon} size={40} />
          </div>
          <div className={`${styles["tool-details-title"]} col-auto mb-2`}>
            <p className={`${styles["tool-details-topics"]}`}>
              {toolDetails.topic.title}
            </p>
            <h1>{toolDetails.title}</h1>
            <p>{toolDetails.short_description}</p>
          </div>
        </div>

        <div className="col-auto text-center">
          <div className={`${styles["tool-details-vote-container"]}`}>
            {user ? (
              userHasVoted ? (
                <div
                  className={`${styles["tool-details-vote"]} justify-content-center ${styles["tool-details-vote-user-has-voted"]}`}
                  onClick={downVoteHandler}
                >
                  <div className={`${styles["tool-details-vote-icon"]}`}>
                    <FontAwesomeIcon icon={faCaretUp} className="fa-2x" />
                  </div>
                  <div
                    className={`${styles["tool-details-vote-number"]} text-center`}
                  >
                    {voteCount}
                  </div>
                </div>
              ) : (
                <div
                  className={`${styles["tool-details-vote"]} justify-content-center`}
                  onClick={upVoteHandler}
                >
                  <div className={`${styles["tool-details-vote-icon"]}`}>
                    <FontAwesomeIcon icon={faCaretUp} className="fa-2x" />
                  </div>
                  <div
                    className={`${styles["tool-details-vote-number"]} text-center`}
                  >
                    {voteCount}
                  </div>
                </div>
              )
            ) : (
              <div
                className={`${styles["tool-details-vote"]} justify-content-center`}
                onClick={() => setShowVoteModal(true)}
              >
                <div className={`${styles["tool-details-vote-icon"]}`}>
                  <FontAwesomeIcon icon={faCaretUp} className="fa-2x" />
                </div>
                <div
                  className={`${styles["tool-details-vote-number"]} text-center`}
                >
                  {voteCount}
                </div>
              </div>
            )}
            {showVoteModal && (
              <Modal
                show={showVoteModal}
                onHide={() => setShowVoteModal(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Log in first!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Sorry, you are not logged in.
                    <br />
                    Please log in to vote for this tool.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => setShowVoteModal(false)}
                  >
                    No thanks!
                  </Button>
                  <Link to="/login">
                    <Button variant="primary">Log in</Button>
                  </Link>
                </Modal.Footer>
              </Modal>
            )}
          </div>
          <div className="d-grid gap-2">
            {toolDetails.is_owner ? (
              <>
                <Link
                  to={`/editor/${toolDetails.id}/`}
                  className="btn btn-primary"
                >
                  Edit tool
                </Link>
              </>
            ) : null}
            {/* Only show delete button if user is the owner of the tool*/}
            {toolDetails.is_owner ? (
              <Button
                variant="danger"
                type="delete"
                aria-label="Delete Tool"
                onClick={() => setShowDeleteModal(true)}
              >
                Delete Tool
              </Button>
            ) : null}
          </div>
          <div className="mt-2">
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <span> Share</span>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Deleting tool...</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Do you really want to delete this tool?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              type="delete"
              aria-label="Delete Tool"
              onClick={handleDeleteTool}
            >
              Delete Tool!
            </Button>

            <Link onClick={() => setShowDeleteModal(false)}>
              <Button variant="primary">No, keep it!</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      )}

      <div className="pb-4">
        <h2>Description</h2>
        <p>{toolDetails.full_description}</p>
      </div>
      <div className="pb-4">
        <h2>Instructions</h2>
        <p>{toolDetails.instructions}</p>
      </div>
      <div className={`${styles["tool-details-comments-headline-row"]}`}>
        <h3>Comments</h3>
      </div>

      {toolDetails.comments.map((comment) => (
        <CommentListElement
          key={comment.id}
          comment={comment}
          onDeletingComment={handleDeleteComment}
        />
      ))}

      {alert.message && (
        <Alert
          variant={alert.variant}
          onClose={() => setAlert({ message: "", variant: "" })}
          dismissible
        >
          {alert.message}
        </Alert>
      )}

      <CommentForm toolId={toolDetails.id} onAddingComment={handleNewComment} />
    </>
  );
}
