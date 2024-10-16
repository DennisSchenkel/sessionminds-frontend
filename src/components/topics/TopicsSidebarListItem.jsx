import styles from "../sidebar/Sidebar.module.css";
import { Emoji } from "emoji-picker-react";

export default function TopicsSidebarListItem({ topic }) {
  // Singular or plural for "Tool"
  const toolOrTools = topic.tool_count === 1 ? "Tool" : "Tools";

  // Get the icon from the topic
  const icon = topic.icon.icon_code.toLowerCase();

  // Render the topic list item
  return (
    <div className={`${styles["sidebar-item"]} row g-0`}>
      <div
        className={`${styles["sidebar-item-icon"]} col-2 justify-content-center`}
      >
        <div>
          <Emoji unified={icon} size="40" />
        </div>
      </div>
      <div className={`${styles["sidebar-item-desc"]} col-10 ps-2`}>
        <div>
          <a href={`/topics/${topic.slug}`}>
            <h4>{topic.title}</h4>
            <div className={`${styles["sidebar-item-desc-misc"]}`}>
              {topic.tool_count} {toolOrTools}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
