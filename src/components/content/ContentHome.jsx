import styles from "./Content.module.css";


export default function ContentHome() {
    return (
    <>
        <div className="pb-3">
            <div className={`row ${styles["headline-row"]}`}>
                <h1>Explore</h1>
            </div>
            <p>Explore the latest and greatest tools for your session.</p>
        </div>
        <div className="pb-4">
            <div className={`row ${styles["headline-row"]}`}>
                <h2>Top Tools</h2>
            </div>
            Test Row 1
        </div>
        <div className="pb-4">
            <div className={`row ${styles["headline-row"]}`}>
                <h2>Latest Tools</h2>
            </div>
            Test Row 2
        </div>
        <div className="pb-4">
            <div className={`row ${styles["headline-row"]}`}>
                <h2>Top Topics</h2>
            </div>

            Test Row 3

            </div>
    </>
    )
    }