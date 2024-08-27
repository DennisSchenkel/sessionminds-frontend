import styles from "./Sidebar.module.css";

export default function SidebarHome() {
    return (
        <div>
            <div className={`row ${styles['headline-row']}`}>
                <div className="col-8">
                    <h2>Top Contributors</h2>
                </div>
                <div className="col-4 text-end">
                    Tools | Votes
                </div>
            </div>

        <ul>    
            <li>Contributor 1</li>
            <li>Contributor 2</li>
            <li>Contributor 3</li>
            <li>Contributor 4</li>
            <li>Contributor 5</li>
        </ul>
        </div>
    )
    }