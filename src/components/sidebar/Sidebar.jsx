import { useLocation } from "react-router-dom";
import SidebarHome from "./SidebarHome";
import SidebarTools from "./SidebarTools";
import SidebarToolAuthor from "./SidebarToolAuthor";
import SidebarTopics from "./SidebarTopics";
import SidebarContributors from "./SidebarContributors";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={styles.sidebar}>
      {path === "/" && <SidebarHome />}
      {path === "/tools" && <SidebarTools />}
      {path.startsWith("/tools/") && path.split("/").length === 3 && (
        <SidebarToolAuthor />
      )}
      {path === "/tools/editor" && <SidebarTools />}
      {path.startsWith("/tools/editor/") && path.split("/").length === 4 && (
        <SidebarTools />
      )}
      {path === "/topics" && <SidebarTopics />}
      {path.startsWith("/topics/") && path.split("/").length === 3 && (
        <SidebarTools />
      )}
      {path === "/contributors" && <SidebarContributors />}
      {path.startsWith("/profile/") && path.split("/").length === 3 && (
        <SidebarHome />
      )}
      {path.startsWith("/search/") && <SidebarTools />}
    </div>
  );
}
