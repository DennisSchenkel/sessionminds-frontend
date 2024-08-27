import styles from "./Tools.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

export default function ToolsListItem() {

    return (
        <div className={`${styles["tool-item"]} row g-0`}>

            <div className={`${styles["tool-item-icon"]} col-1`}>
                <div>
                    <img src="https://via.placeholder.com/60" alt="..." />
                </div>
            </div>  
            <div className={`${styles["tool-item-desc"]} col-9 ps-2`}>
                <div>
                    <h3>Tool Name</h3>
                    <div className={`${styles["tool-item-desc-text"]}`}>Tool Description</div>
                    <div className={`${styles["tool-item-desc-misc"]}`}>jhdjbfkb </div>
                </div>
            </div>
            <div className={`${styles["tool-item-vote-container"]} col-2`}>
                <div className={`${styles["tool-item-vote"]} justify-content-center`}>
                    <div>
                        <FontAwesomeIcon icon={faCaretUp} className="fa-2x" />
                    </div>
                    <div>
                        145
                    </div>
                </div>
            </div>
        </div>

    )

}