import ContributorsListItem from "../contributors/ContributorsListItem";
import styles from "./Content.module.css";

export default function ContentContributors() {
    return (
    <div>
        <div className={`row ${styles['headline-row']}`}>
            <div className="col-8">
                <h1>Top Contributors</h1>
            </div>
            <div className="col-4 text-end">
                Tools | Votes
            </div>
        </div>

        <ContributorsListItem />
        <ContributorsListItem />
        <ContributorsListItem />

    </div>
    )
    }