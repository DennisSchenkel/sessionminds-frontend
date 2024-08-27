import styles from "./Sidebar.module.css";
import TopicsSidebarItemList from "../topics/TopicsSidebarItemList";
import ToolsSidebarItemList from "../tools/ToolsSidebarItemList";

export default function SidebarContributors() {
    return (
        <>
        <div className="pb-4">
            <div className={`row ${styles["headline-row"]}`}>
                <div className="col-8">
                    <h2>Topics</h2>
                </div>
                <div className="col-4 text-end">
                    All | Top
                </div>
            </div>

            <TopicsSidebarItemList />
            <TopicsSidebarItemList />
            <TopicsSidebarItemList />

        </div>
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
        </div>
        </>
    )
    }