import styles from "./Content.module.css";

export default function ContentTools() {
    return (
    <>
    <div className={`row ${styles['headline-row']}`}>
        <div className="col-8">
            <h1>Tools</h1>
        </div>
        <div className="col-4 text-end">
            Top | Latest
        </div>
    </div>
    <div>
        <p>Welcome to the home page</p>
    </div>
    </>
    )
    }