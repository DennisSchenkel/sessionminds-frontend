import styles from "../sidebar/Sidebar.module.css";
import axios from "../../api/axiosDefault";
import ContributorsSidebarListItem from "./ContributorsSidebarListItem";
import { useEffect, useState } from "react";

export default function ContributorsSidebarItemList() {

    const [order, setOrder] = useState("tools");

    const [contributors, setContributors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Number of items per page
    const itemsPerPage = 4;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/profiles/`, {
                    params: {
                        ordering: order,
                        page_size: itemsPerPage,
                    },
                });
                setContributors(response.data.results || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to load tools.");
                setLoading(false);
            }
        };

        fetchData();
    }, [order]);

    const handleOrderChange = (newOrder) => {
        if (newOrder !== order) {
            setOrder(newOrder);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <div className={`row ${styles["headline-row"]}`}>
                <div className="col-8">
                    <h2>Top Contributors</h2>
                </div>
                <div className="col-4 text-end">            
                    <span
                        onClick={() => handleOrderChange("tools")}
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
                        onClick={() => handleOrderChange("votes")}
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

            {contributors
            .filter(contributor => 
                contributor.first_name && 
                contributor.last_name && 
                contributor.tool_count !== 0
            )
            .map(contributor => (
                <ContributorsSidebarListItem 
                    key={contributor.id} 
                    contributor={contributor} 
                />
            ))
            }
        </>
    )
}      
