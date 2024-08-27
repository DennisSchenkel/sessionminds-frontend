import styles from "../../assets/styles/ItemList.module.css";

export default function ContributorsListItem() {

    return (
        <div className={`${styles["list-item"]} row g-0`}>

            <div className={`${styles["list-item-icon"]} col-1`}>
                <div>
                    <img src="https://via.placeholder.com/60" alt="..." />
                </div>
            </div>  
            <div className={`${styles["list-item-desc"]} col-11 ps-2`}>
                <div>
                    <h3>Joe Doe</h3>
                    <div className={`${styles["list-item-desc-misc"]}`}>12 Tools - 1.624 Votes</div>
                </div>
            </div>
        </div>

    )

}