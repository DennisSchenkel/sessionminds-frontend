import styles from "./Sidebar.module.css";
import ContributorsSidebarList from "../contributors/ContributorsSidebarList";

export default function SidebarHome() {
    return (
        <div>
            <div className={`row ${styles["headline-row"]}`}>
                <div className="col-8">
                    <h2>Top Contributors</h2>
                </div>
                <div className="col-4 text-end">
                    Tools | Votes
                </div>
            </div>

            <ContributorsSidebarList />

        </div>
    )
    }

