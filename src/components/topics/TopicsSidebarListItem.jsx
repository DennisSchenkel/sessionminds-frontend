import styles from "../sidebar/Sidebar.module.css";

export default function TopicsSidebarListItem({topic}) {

    const toolOrTools = topic.tool_count === 1 ? "Tool" : "Tools";

    return (

        <div className={`${styles["sidebar-item"]} row g-0`}>

            <div className={`${styles["sidebar-item-icon"]} col-2`}>
                <div>
                    <img src="https://via.placeholder.com/50" alt="..." />
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
