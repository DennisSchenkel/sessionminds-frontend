import styles from "../../assets/styles/ItemList.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { Emoji } from "emoji-picker-react";
import { UserContext } from "../../context/UserContext";
import axios from "../../api/axiosDefault";

export default function ToolsListItem({ tool }) {
  // Get the user context
  const { user } = useContext(UserContext);

  // Get the icon from the tool
  const icon = tool.icon.toLowerCase();

  // Vote count state
  const [voteCount, setVoteCount] = useState(tool.vote_count);
  // User has voted state
  const [userHasVoted, setUserHasVoted] = useState(false);
  // Vote ID state
  const [voteId, setVoteId] = useState(null);
  // Show modal state
  const [showModal, setShowModal] = useState(false);
  // Loading vote state
  const [loadingVote, setLoadingVote] = useState(true);

  // Error state
  const [error, setError] = useState(null);

  // Fetch tool data
  const fetchToolData = useCallback(async () => {
    try {
      const response = await axios.get(`/tools/${tool.id}/`);
      const voteCount = response.data.vote_count;
      setVoteCount(voteCount);
    } catch (error) {
      setError("Failed to load tool data.");
    }
  }, [tool.id]);

  // Fetch vote data
  useEffect(() => {
    const fetchData = async () => {
      // Fetch vote data
      try {
        const response = await axios.get(`/votes/tool/${tool.id}/`);
        const { user_has_voted, vote_id } = response.data;
        setUserHasVoted(user_has_voted);
        setVoteId(vote_id);
        // Handle errors
      } catch (error) {
        setError("Failed to load vote data.");
      } finally {
        setLoadingVote(false);
      }
    };
    fetchData();
  }, [tool.id]);

  // Up vote handler
  useEffect(() => {
    fetchToolData();
  }, [tool.id, fetchToolData]);

  // Up vote handler
  useEffect(() => {
    const fetchData = async () => {
      // Fetch vote data
      try {
        const response = await axios.get(`/tools/${tool.id}/`);
        const voteCount = response.data.vote_count;
        setVoteCount(voteCount);
        // Handle errors
      } catch (error) {
        setError("Failed to load tool data.");
      }
    };
    fetchData();
  }, [tool.id]);

  // Up vote handler
  const upVoteHandler = useCallback(async () => {
    const toolVoteData = { tool: tool.id };
    // Attempt to submit vote
    try {
      const response = await axios.post("/votes/", toolVoteData);
      // If vote is successful
      if (response.status === 201) {
        const voteId = response.data.id;
        await fetchToolData();
        setUserHasVoted(true);
        setVoteId(voteId);
      }
      // Handle errors
    } catch (error) {
      setError("Failed to submit vote.");
    }
  }, [tool.id, fetchToolData]);

  // Down vote handler
  const downVoteHandler = useCallback(async () => {
    // Check if vote ID is available
    if (!voteId) {
      setError("Vote ID is missing.");
      return;
    }
    // Attempt to remove vote
    try {
      const response = await axios.delete(`/votes/${voteId}/`);
      // If vote is removed
      if (response.status === 204) {
        await fetchToolData();
        setUserHasVoted(false);
        setVoteId(null);
      }
      // Handle errors
    } catch (error) {
      setError("Failed to remove vote.");
    }
  }, [voteId, fetchToolData]);

  // Display error message
  if (error) return <p>{error}</p>;

  // Render the tool list item
  return (
    <>
      {loadingVote ? (
        // Platzhalter während des Ladens
        <div className={`${styles["list-item"]} row g-0`}>
          <div
            className={`${styles["list-item-icon"]} col-auto d-none d-sm-block pt-2`}
          >
            <div
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#ccc",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className={`${styles["list-item-desc"]} col ps-2`}>
            <div>
              <h3>Loading...</h3>
              <div className={`${styles["list-item-desc-text"]}`}>
                Loading description...
              </div>
              <div className={`${styles["list-item-desc-misc"]}`}>
                <FontAwesomeIcon icon={faComment} /> --
                <span> &#183; </span>
                Loading topic
                <span> &#183; </span>
                Loading author
                <span> &#183; </span>
                --
              </div>
            </div>
          </div>
          <div
            className={`${styles["list-item-vote-container"]} col-auto pt-2`}
          >
            <div
              className={`${styles["list-item-vote"]} justify-content-center`}
            >
              <div>
                <FontAwesomeIcon icon={faCaretUp} className="fa-xl" />
              </div>
              <div>--</div>
            </div>
          </div>
        </div>
      ) : (
        // Tatsächlicher Inhalt nach dem Laden
        <div className={`${styles["list-item"]} row g-0`}>
          <div
            className={`${styles["list-item-icon"]} col-auto d-none d-sm-block pt-2`}
          >
            <div id="tool-icon">
              <Emoji unified={icon} size={40} />
            </div>
          </div>
          <div className={`${styles["list-item-desc"]} col ps-2`}>
            <Link to={`/tools/${tool.slug}`}>
              <div>
                <h3>{tool.title}</h3>
                <div className={`${styles["list-item-desc-text"]}`}>
                  {tool.short_description}
                </div>
                <div className={`${styles["list-item-desc-misc"]}`}>
                  <FontAwesomeIcon icon={faComment} /> {tool.comments.length}
                  <span> &#183; </span>
                  {tool.topic.title}
                  <span> &#183; </span>
                  {tool.profile.first_name} {tool.profile.last_name}
                  <span> &#183; </span>
                  {tool.created}
                </div>
              </div>
            </Link>
          </div>
          <div
            className={`${styles["list-item-vote-container"]} col-auto pt-2`}
          >
            {user ? (
              <div
                className={`${
                  styles["list-item-vote"]
                } justify-content-center ${
                  userHasVoted ? styles["list-item-vote-user-has-voted"] : ""
                }`}
                onClick={userHasVoted ? downVoteHandler : upVoteHandler}
              >
                <div>
                  <FontAwesomeIcon icon={faCaretUp} className="fa-xl" />
                </div>
                <div>{voteCount}</div>
              </div>
            ) : (
              <div
                className={`${styles["list-item-vote"]} justify-content-center`}
                onClick={() => setShowModal(true)}
              >
                <div>
                  <FontAwesomeIcon icon={faCaretUp} className="fa-xl" />
                </div>
                <div>{voteCount}</div>
              </div>
            )}
            {showModal && (
              <Modal show={showModal} onHide={() => setShowModal(false)}>
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
                    onClick={() => setShowModal(false)}
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
        </div>
      )}
    </>
  );
}
