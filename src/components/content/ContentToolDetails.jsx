import styles from "../tools/Tools.module.css";
import { useEffect, useState, useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axiosDefault";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Emoji } from "emoji-picker-react";
import { UserContext } from "../../context/UserContext";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ContentToolDetails() {
        
    const { slug } = useParams();
    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const [toolDetails, setToolDetails] = useState({});
    const [loading, setLoading] = useState(true);

    const [voteCount, setVoteCount] = useState(toolDetails.vote_count);
    const [userHasVoted, setUserHasVoted] = useState(false);
    const [voteId, setVoteId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    

    const fetchToolData = useCallback(async () => {
        try {
            const toolResponse = await axios.get(`/tools/tool/${slug}`);
            setToolDetails(toolResponse.data);
            setVoteCount(toolResponse.data.vote_count);

            if (toolResponse.data.id) {
                const voteResponse = await axios.get(`/votes/tool/${toolResponse.data.id}/`);
                setUserHasVoted(voteResponse.data.user_has_voted);
                setVoteId(voteResponse.data.vote_id);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }, [slug]);

    useEffect(() => {
        fetchToolData();
    }, [fetchToolData]);

    const upVoteHandler = useCallback(async () => {
        const toolVoteData = { tool: toolDetails.id };
    
        try {
            const response = await axios.post("/votes/", toolVoteData);
    
            if (response.status === 201) {
                const voteId = response.data.id;
                await fetchToolData();
                setUserHasVoted(true);
                setVoteId(voteId);
            }
        } catch (error) {
            console.error("Error submitting vote:", error);
        }
    }, [toolDetails.id, fetchToolData]);

    const downVoteHandler = useCallback(async () => {
        if (!voteId) {
            console.log("No vote_id available, cannot remove vote.");
            return;
        }        
        try {
            const response = await axios.delete(`/votes/${voteId}/`);
    
            if (response.status === 204) {
                await fetchToolData();
                setUserHasVoted(false);
                setVoteId(null);
            }
        } catch (error) {
            console.error("Error submitting vote:", error);
        }
    }, [voteId, fetchToolData]);
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className="pb-3">
            <Link
                to={'..'}
                onClick={() => {
                navigate(-1);
                }}
            >Go Back</Link>
        </div>
        <div className="row pb-4">
            <div className="col row">
                <div className={`${styles["tool-details-icon"]} col-auto`}>
                    <Emoji unified={toolDetails.icon} size={40} />
                </div>
                <div className={`${styles["tool-details-title"]} col-auto row`}>
                <p className={`${styles["tool-details-topics"]}`}>{toolDetails.topics[0].title}</p>
                    <h1>{toolDetails.title}</h1>
                    <p>{toolDetails.short_description}</p>
                </div>
            </div>
                {toolDetails.is_owner ? 
                    <>
                        <Link to={`/editor/${toolDetails.id}/`} className="btn btn-primary">
                        Edit tool
                        </Link>
                    </>
                    
                    : 
                    
                    null
                    
                }
                

            <div className="col-auto text-center">
                <div className={`${styles["tool-details-vote-container"]}`}>
                {user ? (
                    userHasVoted ? 



                        
                        <div className={`${styles["tool-details-vote"]} justify-content-center ${styles["tool-details-vote-user-has-voted"]}`}
                            onClick={downVoteHandler}>
                            <div className={`${styles["tool-details-vote-icon"]}`}>
                                <FontAwesomeIcon icon={faCaretUp} className="fa-2x" />
                            </div>
                            <div className={`${styles["tool-details-vote-number"]} text-center`}>
                                {voteCount}
                            </div>
                        </div>
                    :
                        <div className={`${styles["tool-details-vote"]} justify-content-center`}
                            onClick={upVoteHandler}>
                            <div className={`${styles["tool-details-vote-icon"]}`}>
                                <FontAwesomeIcon icon={faCaretUp} className="fa-2x" />
                            </div>
                            <div className={`${styles["tool-details-vote-number"]} text-center`}>
                                {voteCount}
                            </div>
                        </div>
                )
                :
                (          

                        <div className={`${styles["tool-details-vote"]} justify-content-center`}
                        onClick={() => setShowModal(true)}>
                            <div className={`${styles["tool-details-vote-icon"]}`}>
                                <FontAwesomeIcon icon={faCaretUp} className="fa-2x" />
                            </div>
                            <div className={`${styles["tool-details-vote-number"]} text-center`}>
                                {voteCount}
                            </div>
                        </div>

                )}
                {showModal && 
                
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log in first!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                        Sorry, you are not logged in.<br />
                        Please log in to vote for this tool.
                        </p>    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            No thanks!
                        </Button>
                        <Link to="/login">
                            <Button variant="primary">
                                Log in
                            </Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
                
                
                }




                </div>
            </div>

            <div>
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                <span> Share</span>
            </div>

        </div>
        <div className="pb-4">     
            <h2>Description</h2>
            <p>{toolDetails.full_description}</p>

        </div>
        <div className="pb-4">     
            <h2>Instructions</h2>
            <p>{toolDetails.instructions}</p>
        </div>

        <div className={`${styles["tool-details-comments-headline-row"]}`}>
            <h2>Comments</h2>
        </div>

        </>
    )
    }