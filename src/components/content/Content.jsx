import ContentHome from "./ContentHome";
import ContentTools from "./ContentTools";
import ContentTopics from "./ContentTopics";
import ContentContributors from "./ContentContributors";
import styles from "./Content.module.css"

export default function Content() {
    return (
        <div className={styles.content}>
            {location.pathname === "/" && <ContentHome />}
            {location.pathname === "/tools" && <ContentTools />}
            {location.pathname === "/topics" && <ContentTopics />}
            {location.pathname === "/contributors" && <ContentContributors />}
        </div>
    )
}