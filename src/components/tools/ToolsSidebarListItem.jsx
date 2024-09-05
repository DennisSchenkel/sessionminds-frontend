import styles from "../sidebar/Sidebar.module.css";

export default function ToolsSidebarListItem({tool}) {

    const voteOrVotes = tool.vote_count === 1 ? "Vote" : "Votes";
    
    return (
        <div className={`${styles["sidebar-item"]} row g-0`}>

            <div className={`${styles["sidebar-item-icon"]} col-2`}>
                <div>
                    <img src="https://via.placeholder.com/50" alt="..." />
                </div>
            </div>  
            <div className={`${styles["sidebar-item-desc"]} col-10 ps-2`}>
                <div>
                    <h4>{tool.title}</h4>
                    <div className={`${styles["sidebar-item-desc-misc"]}`}>{tool.vote_count} {voteOrVotes}<span> &#183; </span>{tool.topics[0].title}<span> &#183; </span>{tool.created}</div>
                </div>
            </div>
        </div>
    )
}
