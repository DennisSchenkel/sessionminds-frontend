import styles from "./Sidebar.module.css";

export default function SidebarTopics() {
    return (
        <div>
            <div className={`row ${styles['headline-row']}`}>
                <div className="col-8">
                    <h2>Tools</h2>
                </div>
                <div className="col-4 text-end">
                    Top | Latest
                </div>
            </div>

        <ul>    
            <li>Tool 1</li>
            <li>Tool 2</li>
            <li>Tool 3</li>
            <li>Tool 4</li>
            <li>Tool 5</li>
        </ul>
        </div>
    )
    }