import ContributorsListItem from "../contributors/ContributorsListItem";
import styles from "./Content.module.css";
import axios from "../../api/axiosDefault";
import { useEffect, useState } from "react";

export default function ContentContributors() {
    
    const [order, setOrder] = useState("tools");

    const [contributors, setContributors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/profiles/?ordering=${order}`);
                setContributors(response.data || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to load tools.");
                setLoading(false);
            }
        };

        fetchData();
    }, [order]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
   
    return (
        <>
        <div className={`row ${styles["headline-row"]}`}>
            <div className="col-8">
                <h1>Top Contributors</h1>
            </div>
            <div className="col-4 text-end">            
                <span
                    onClick={() => setOrder("tools")}
                    style={{
                        cursor: "pointer",
                        color: order === "tools" ? "#2da7c8" : "black",
                        marginRight: "8px",
                    }}
                >
                    Tools
                </span>
                |
                <span
                    onClick={() => setOrder("votes")}
                    style={{
                        cursor: "pointer",
                        color: order === "votes" ? "#2da7c8" : "black",
                        marginLeft: "8px",
                    }}
                >
                    Votes
                </span>
            </div>
        </div>
    
    
    <div>

        {contributors.map((contributor) => (
            <ContributorsListItem key={contributor.id} contributor={contributor} />
        ))


        }
    </div>
    </>
    )
    }