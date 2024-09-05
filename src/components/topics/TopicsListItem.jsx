import styles from "../../assets/styles/ItemList.module.css";

export default function TooicsListItem({topic}) {

    const toolOrTools = topic.tool_count === 1 ? "Tool" : "Tools";
    const icon = String.fromCodePoint(topic.icon.icon_code)

    return (
        <div className={`${styles["list-item"]} row g-0`}>

            <div className={`${styles["list-item-icon"]} col-1 justify-content-center`}>
                {icon}
            </div>  
            <div className={`${styles["list-item-desc"]} col-11 ps-2`}>
                <div>
                    <h3>{topic.title}</h3>
                    <div className={`${styles["list-item-desc-misc"]}`}>{topic.tool_count} {toolOrTools}</div>
                </div>
            </div>
        </div>

    )
}

