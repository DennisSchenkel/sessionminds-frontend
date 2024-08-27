import styles from "../sidebar/Sidebar.module.css";

export default function ContributorsSidebarItemList() {

    return (

        <div className={`${styles["sidebar-item"]} row g-0`}>

            <div className={`${styles["sidebar-item-icon"]} col-2`}>
                <div>
                    <img src="https://via.placeholder.com/60" alt="..." />
                </div>
            </div>  
            <div className={`${styles["sidebar-item-desc"]} col-10 ps-2`}>
                <div>
                    <h4>Joe Doe</h4>
                    <div className={`${styles["sidebar-item-desc-misc"]}`}>12 Tools - 1.624 Votes</div>
                </div>
            </div>
        </div>

    )
}