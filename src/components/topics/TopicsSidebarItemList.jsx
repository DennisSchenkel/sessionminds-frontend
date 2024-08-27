import styles from "../sidebar/Sidebar.module.css";

export default function TopicsSidebarItemList() {

    return (

    <div className={`${styles["sidebar-item"]} row g-0`}>

        <div className={`${styles["sidebar-item-icon"]} col-2`}>
            <div>
                <img src="https://via.placeholder.com/60" alt="..." />
            </div>
        </div>  
        <div className={`${styles["sidebar-item-desc"]} col-10 ps-2`}>
            <div>
                <h4>Problem Solving</h4>
                <div className={`${styles["sidebar-item-desc-misc"]}`}>72 Tools</div>
            </div>
        </div>
        
    </div>

    )
}