import styles from "./Content.module.css";

export default function ContentTopics() {
    return (
    <>
    <div className={`row ${styles['headline-row']}`}>
        <div className="col-8">
            <h1>Topics</h1>
        </div>
        <div className="col-4 text-end">
            All | Top
        </div>
    </div>
    <div>
        <p>Welcome to the home page</p>
    </div>
    </>
    )
    }