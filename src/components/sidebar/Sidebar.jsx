import SidebarHome from "./SidebarHome";
import SidebarTools from "./SidebarTools";
import SidebarTopics from "./SidebarTopics";
import SidebarContributors from "./SidebarContributors";
import styles from "./Sidebar.module.css"

export default function Sidebar() {

    return (
        <div className={styles.sidebar} >
            {location.pathname === "/" && <SidebarHome />}
            {location.pathname === "/tools" && <SidebarTools />}
            {location.pathname === "/topics" && <SidebarTopics />}
            {location.pathname === "/contributors" && <SidebarContributors />}
        </div>
    )
    }