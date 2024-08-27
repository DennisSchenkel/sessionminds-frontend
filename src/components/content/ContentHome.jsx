import styles from "./Content.module.css";
import ToolsListItem from "../tools/ToolsListItem";

export default function ContentHome() {
    return (
    <>
        <div className="pb-5">
            <div className={`row ${styles["headline-row"]}`}>
                <h1>Top Tools</h1>
            </div>
       
            <ToolsListItem />
            <ToolsListItem />
            <ToolsListItem />

        
        </div>
        <div className="pb-5">
            <div className={`row ${styles["headline-row"]}`}>
                <h1>Latest Tools</h1>
            </div>

            <ToolsListItem />
            <ToolsListItem />
            <ToolsListItem />

        </div>
        <div className="pb-5">
            <div className={`row ${styles["headline-row"]}`}>
                <h1>Top Topics</h1>
            </div>
                <p>Welcome to the home page</p>
        </div>
    </>
    )
    }