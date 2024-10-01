import styles from "../sidebar/Sidebar.module.css";
import { Emoji } from "emoji-picker-react";

export default function ToolsSidebarListItem({tool}) {

    const voteOrVotes = tool.vote_count === 1 ? "Vote" : "Votes";
    
    return (
        <a href={`/tools/${tool.slug}`}>
            <div className={`${styles["sidebar-item"]} row g-0`}>

                <div className={`${styles["sidebar-item-icon"]} col-auto`}>
                    <div id="tool-icon">
                        <Emoji unified={tool.icon} size={36} />                    
                    </div>
                </div>  
                <div className={`${styles["sidebar-item-desc"]} col ps-3`}>
                    <div>
                        <h4>{tool.title}</h4>
                        <div className={`${styles["sidebar-item-desc-misc"]}`}>{tool.vote_count} {voteOrVotes}<span> &#183; </span>{tool.topic.title}<span> &#183; </span>{tool.created}</div>
                    </div>
                </div>      
            </div>
        </a>
    )
}
