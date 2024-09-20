import styles from "../sidebar/Sidebar.module.css";
import { Emoji } from "emoji-picker-react";

export default function TopicsSidebarListItem({topic}) {

    const toolOrTools = topic.tool_count === 1 ? "Tool" : "Tools";
    const icon = topic.icon.icon_code.toLowerCase();


    return (

        <div className={`${styles["sidebar-item"]} row g-0`}>

            <div className={`${styles["sidebar-item-icon"]} col-2 justify-content-center`}>
                <div>
                    <Emoji unified={icon} size="40" />
                </div>
            </div>  
            <div className={`${styles["sidebar-item-desc"]} col-10 ps-2`}>
                <div>
                    <h4>{topic.title}</h4>
                    <div className={`${styles["sidebar-item-desc-misc"]}`}>{topic.tool_count} {toolOrTools}</div>
                </div>
            </div>
            
        </div>

    )

}