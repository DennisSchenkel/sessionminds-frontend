import styles from "../sidebar/Sidebar.module.css";
import Image from "react-bootstrap/Image";

export default function ContributorsSidebarListItem({ contributor }) {
  // Singular or plural for "Tool" and "Vote"
  const toolOrTools = contributor.tool_count === 1 ? "Tool" : "Tools";
  const voteOrVote = contributor.total_votes === 1 ? "Vote" : "Votes";

  // Render the contributor list item
  return (
    <a href={`/profile/${contributor.slug}`}>
      <div className={`${styles["sidebar-item"]} row g-0`}>
        <div className={`${styles["sidebar-item-icon"]} col-auto`}>
          <div>
            <Image
              src={contributor.image}
              alt={`Profile image of ${contributor.first_name} ${contributor.last_name}`}
              width={50}
              height={50}
              className={`${styles["sidebar-profile-image"]}`}
            />
          </div>
        </div>
        <div className={`${styles["sidebar-item-desc"]} col ps-2`}>
          <div>
            <h4>
              {contributor.first_name} {contributor.last_name}
            </h4>
            <div className={`${styles["sidebar-item-desc-misc"]}`}>
              {contributor.tool_count} {toolOrTools} - {contributor.total_votes}{" "}
              {voteOrVote}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
