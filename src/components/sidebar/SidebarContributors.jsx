import styles from "./Sidebar.module.css";

export default function SidebarContributors() {
    return (
        <>
        <div className="pb-4">
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
        </>
    )
    }