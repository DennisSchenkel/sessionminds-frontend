import styles from "./Content.module.css";
import ToolsListItem from "../tools/ToolsListItem";
import TopicsListItem from "../topics/TopicsListItem";

export default function ContentHome() {
    return (
    <>
        <div className="pb-5">
            <div className={`row ${styles["headline-row"]}`}>
                <h2>Top Tools</h2>
            </div>
       
            <ToolsListItem />
            <ToolsListItem />
            <ToolsListItem />

        
        </div>
        <div className="pb-5">
            <div className={`row ${styles["headline-row"]}`}>
                <h2>Latest Tools</h2>
            </div>

            <ToolsListItem />
            <ToolsListItem />
            <ToolsListItem />

        </div>
        <div className="pb-5">
            <div className={`row ${styles["headline-row"]}`}>
                <h2>Top Topics</h2>
            </div>

            <TopicsListItem />
            <TopicsListItem />
            <TopicsListItem />

            </div>
    </>
    )
    }