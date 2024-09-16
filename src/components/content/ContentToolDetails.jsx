import styles from "../tools/Tools.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axiosDefault";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Emoji } from "emoji-picker-react";

export default function ContentToolDetails() {
        
    const { slug } = useParams();

    const [toolDetails, setToolDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getToolDetails = async () => {
            try {
                const response = await axios.get(`/tools/tool/${slug}`);
                setToolDetails(response.data);
            } catch (error) {
                console.error("Error fetching tool:", error);
            } finally {
                setLoading(false);
            }
        };

        getToolDetails();
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log("Tool Details:", toolDetails.topics[0].id);


    return (
        <>
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
            <div className="col-auto text-center">
                <div className={`${styles["tool-details-vote-container"]}`}>
                    <div className={`${styles["tool-details-vote"]} justify-content-center`}>
                        <div className={`${styles["tool-details-vote-icon"]}`}>
                            <FontAwesomeIcon icon={faCaretUp} className="fa-2x" />
                        </div>
                        <div className={`${styles["tool-details-vote-number"]} text-center`}>
                            {toolDetails.vote_count}
                        </div>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    <span> Share</span>
                </div>
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