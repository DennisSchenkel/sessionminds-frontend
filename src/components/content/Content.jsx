import { useLocation } from "react-router-dom";
import ContentHome from "./ContentHome";
import ContentTools from "../tools/ContentTools";
import ContentToolDetails from "../tools/ContentToolDetails";
import ContentToolEditor from "../tools/ContentToolEditor";
import ContentTopics from "../topics/ContentTopics";
import ContentTopicToolList from "../topics/ContentTopicToolList";
import ContentContributors from "../contributors/ContentContributors";
import Profile from "../../pages/profile/Profile";
import ContentSearchResults from "../search/ContentSearchResults";
import styles from "./Content.module.css";

export default function Content() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={styles.content}>
      {path === "/" && <ContentHome />}
      {path === "/tools" && <ContentTools />}
      {path.startsWith("/tools/") && path.split("/").length === 3 && (
        <ContentToolDetails />
      )}
      {path === "/editor" && <ContentToolEditor />}
      {path.startsWith("/editor/") && path.split("/").length === 4 && (
        <ContentToolEditor />
      )}
      {path === "/topics" && <ContentTopics />}
      {path.startsWith("/topics/") && path.split("/").length === 3 && (
        <ContentTopicToolList />
      )}
      {path === "/contributors" && <ContentContributors />}
      {path.startsWith("/profile/") && path.split("/").length === 3 && (
        <Profile />
      )}
      {path.startsWith("/search/") && path.split("/").length === 3 && (
        <ContentSearchResults />
      )}
    </div>
  );
}
