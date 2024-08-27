import styles from "./Sidebar.module.css";
import TopicsSidebarItemList from "../topics/TopicsSidebarItemList";

export default function SidebarTools() {
    return (
        <div>
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
    )
    }