import styles from "./Content.module.css";
import ToolsListItem from "../tools/ToolsListItem";

export default function ContentTools() {
    return (
    <>
    <div className={`row ${styles["headline-row"]}`}>
        <div className="col-8">
            <h1>Tools</h1>
        </div>
        <div className="col-4 text-end">
            Top | Latest
        </div>
    </div>
    <div>
        <ToolsListItem />
        <ToolsListItem />
        <ToolsListItem />
    </div>
    </>
    )
    }