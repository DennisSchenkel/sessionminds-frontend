import styles from "../../assets/styles/ItemList.module.css";
import { Emoji } from "emoji-picker-react";


export default function TooicsListItem({topic}) {

    const toolOrTools = topic.tool_count === 1 ? "Tool" : "Tools";
    const icon = topic.icon.icon_code.toLowerCase();

    return (
        <div className={`${styles["list-item"]} row g-0`}>

            <div className={`${styles["list-item-icon"]} col-1 justify-content-center`}>
                <Emoji unified={icon} size="40" />
            </div>  
            <div className={`${styles["list-item-desc"]} col-11 ps-2`}>
                <div>
                    <a href={`/topics/${topic.slug}`}>
                    <h3>{topic.title}</h3>
                    <div className={`${styles["list-item-desc-misc"]}`}>{topic.tool_count} {toolOrTools}</div>
                    </a>
                </div>
            </div>
        </div>

    )
}

