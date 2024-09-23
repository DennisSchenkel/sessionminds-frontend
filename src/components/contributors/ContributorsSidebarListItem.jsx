import styles from "../sidebar/Sidebar.module.css";
import Image from "react-bootstrap/Image";

export default function ContributorsSidebarListItem({contributor}) {

    const toolOrTools = contributor.tool_count === 1 ? "Tool" : "Tools";
    const voteOrVote    = contributor.total_votes === 1 ? "Vote" : "Votes";

    return (
        <a href={`/profile/${contributor.slug}`}>
            <div className={`${styles["sidebar-item"]} row g-0`}>

                <div className={`${styles["sidebar-item-icon"]} col-2`}>
                    <div>
                        <Image src={contributor.image} alt="..." width={50} height={50} className={`${styles["sidebar-profile-image"]}`}/>
                    </div>
                </div>  
                <div className={`${styles["sidebar-item-desc"]} col-10 ps-2`}>
                    <div>
                        <h4>{contributor.first_name} {contributor.last_name}</h4>
                        <div className={`${styles["sidebar-item-desc-misc"]}`}>{contributor.tool_count} {toolOrTools} - {contributor.total_votes} {voteOrVote}</div>
                    </div>
                </div>
            </div>
        </a>
    )
}
