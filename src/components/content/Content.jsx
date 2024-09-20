import { useLocation } from "react-router-dom";
import ContentHome from "./ContentHome";
import ContentTools from "./ContentTools";
import ContentToolDetails from "./ContentToolDetails";
import ContentToolEditor from "./ContentToolEditor";
import ContentTopics from "./ContentTopics";
import ContentContributors from "./ContentContributors";
import styles from "./Content.module.css";

export default function Content() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className={styles.content}>
            {path === "/" && <ContentHome />}
            {path === "/tools" && <ContentTools />}
            {path.startsWith("/tools/") && path.split('/').length === 3 && <ContentToolDetails />}
            {path === "/editor" && <ContentToolEditor />}
            {path.startsWith("/editor/") && path.split('/').length === 4 && <ContentToolEditor />}
            {path === "/topics" && <ContentTopics />}
            {path === "/contributors" && <ContentContributors />}
        </div>
    );
}