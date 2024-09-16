import styles from "../../assets/styles/ItemList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { Emoji } from "emoji-picker-react";

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
    const icon = tool.icon.toLowerCase();

    return (
        <a href={`/tools/${tool.slug}`}>
            <div className={`${styles["list-item"]} row g-0`}>
                <div className={`${styles["list-item-icon"]} col-1`}>
                    <div id="tool-icon">
                        <Emoji unified={icon} size={40} />                    
                    </div>
                </div>  
                <div className={`${styles["list-item-desc"]} col-9 ps-2`}>
                    <div>
                        <h3>{tool.title}</h3>
                        <div className={`${styles["list-item-desc-text"]}`}>{tool.short_description}</div>
                        <div className={`${styles["list-item-desc-misc"]}`}>
                            <FontAwesomeIcon icon={faComment} /> 62<span> &#183; </span>
                            {topicsList}<span> &#183; </span>{tool.profile.first_name} {tool.profile.last_name}<span> &#183; </span>{tool.created}
                        </div>
                    </div>
                </div>
                <div className={`${styles["list-item-vote-container"]} col-2`}>
                    <div className={`${styles["list-item-vote"]} justify-content-center`}>
                        <div>
                            <FontAwesomeIcon icon={faCaretUp} className="fa-xl" />
                        </div>
                        <div>
                            {tool.vote_count}
                        </div>
                    </div>
                </div>
            </div>
        </a>

    )
}