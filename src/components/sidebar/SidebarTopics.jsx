import styles from "./Sidebar.module.css";
import ToolsSidebarItemList from "../tools/ToolsSidebarItemList";

export default function SidebarTopics() {
    return (
        <div>
            <div className={`row ${styles["headline-row"]}`}>
                <div className="col-8">
                    <h2>Tools</h2>
                </div>
                <div className="col-4 text-end">
                    Top | Latest
                </div>
            </div>

            <ToolsSidebarItemList />
            <ToolsSidebarItemList />
            <ToolsSidebarItemList />
            <ToolsSidebarItemList />
        </div>
    )
    }