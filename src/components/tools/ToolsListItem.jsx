import styles from "../../assets/styles/ItemList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

function getTopicsList(tool) {
    if (tool.topics.length > 1) {
        return `${tool.topics[0].title} " | " + ${tool.topics[1].title}`;
    }
    else {
        return tool.topics[0].title;
    }
}

export default function ToolsListItem({tool}) {

    const topicsList = getTopicsList(tool);

    return (
        <div className={`${styles["list-item"]} row g-0`}>

            <div className={`${styles["list-item-icon"]} col-1`}>
                <div>
                    <img src="https://via.placeholder.com/60" alt="..." />
                </div>
            </div>  
            <div className={`${styles["list-item-desc"]} col-9 ps-2`}>
                <div>
                    <h3>{tool.title}</h3>
                    <div className={`${styles["list-item-desc-text"]}`}>{tool.short_description}</div>
                    <div className={`${styles["list-item-desc-misc"]}`}>
                        <FontAwesomeIcon icon={faComment} /> 62<span> &#183; </span>
                        {topicsList}<span> &#183; </span>{tool.profile.first_name} {tool.profile.last_name}
                    </div>
                </div>
            </div>
            <div className={`${styles["list-item-vote-container"]} col-2`}>
                <div className={`${styles["list-item-vote"]} justify-content-center`}>
                    <div>
                        <FontAwesomeIcon icon={faCaretUp} className="fa-2x" />
                    </div>
                    <div>
                        145
                    </div>
                </div>
            </div>
        </div>

    )
}