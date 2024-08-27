import styles from "./Sidebar.module.css";

export default function SidebarTools() {
    return (
        <div>
            <div className={`row ${styles['headline-row']}`}>
                <div className="col-8">
                    <h2>Topics</h2>
                </div>
                <div className="col-4 text-end">
                    All | Top
                </div>
            </div>

        <ul>    
            <li>Topic 1</li>
            <li>Topic 2</li>
            <li>Topic 3</li>
            <li>Topic 4</li>
            <li>Topic 5</li>
        </ul>
        </div>
    )
    }