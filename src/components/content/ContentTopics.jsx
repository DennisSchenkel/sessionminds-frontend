import styles from "./Content.module.css";
import TopicsListItem from "../topics/TopicsListItem";

export default function ContentTopics() {
    return (
    <>
    <div className={`row ${styles["headline-row"]}`}>
        <div className="col-8">
            <h1>Topics</h1>
        </div>
        <div className="col-4 text-end">
            All | Top
        </div>
    </div>
    <div>
        <TopicsListItem />
        <TopicsListItem />
        <TopicsListItem />

    </div>
    </>
    )
    }