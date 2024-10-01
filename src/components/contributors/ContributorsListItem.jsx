import styles from "../../assets/styles/ItemList.module.css";
import Image from "react-bootstrap/Image";

export default function ContributorsListItem({contributor}) {


    const toolOrTools = contributor.tool_count === 1 ? "Tool" : "Tools";
    const voteOrVote    = contributor.total_votes === 1 ? "Vote" : "Votes";

    return (
        <a href={`/profile/${contributor.slug}`}>
            <div className={`${styles["list-item"]} row g-0`}>

                <div className={`${styles["list-item-icon"]} col-auto`}>
                    <div>
                        <Image src={contributor.image} alt="..." width={60} height={60} className={`${styles["list-item-profile-image"]}`}/>
                    </div>
                </div>  
                
                <div className={`${styles["list-item-desc"]} col-auto ps-2`}>
                    <div>
                        <h3>{contributor.first_name} {contributor.last_name}</h3>
                        <div className={`${styles["list-item-desc-misc"]}`}>{contributor.tool_count} {toolOrTools} - {contributor.total_votes} {voteOrVote}</div>
                    </div>
                </div>
            </div>
        </a>
    )

}