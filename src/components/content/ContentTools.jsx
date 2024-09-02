import styles from "./Content.module.css";
import ToolsListItem from "../tools/ToolsListItem";
import axios from "../../api/axiosDefault";
import { useEffect, useState } from "react";

export default function ContentTools() {

    const [order, setOrder] = useState("votes");

    const [tools, setTools] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/tools/?ordering=${order}`);
                setTools(response.data || []);
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
            <h1>Tools</h1>
        </div>
        <div className="col-4 text-end">            
            <span
                onClick={() => setOrder("votes")}
                style={{
                    cursor: "pointer",
                    color: order === "votes" ? "#2da7c8" : "black",
                    marginRight: "8px",
                }}
            >
                Top
            </span>
            |
            <span
                onClick={() => setOrder("latest")}
                style={{
                    cursor: "pointer",
                    color: order === "latest" ? "#2da7c8" : "black",
                    marginLeft: "8px",
                }}
            >
                Latest
            </span>
        </div>
    </div>
    <div>

        {tools.map((tool) => (
            <ToolsListItem key={tool.id} tool={tool} />
        ))}

    </div>
    </>
    )
    }