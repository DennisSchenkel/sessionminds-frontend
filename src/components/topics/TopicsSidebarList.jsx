import styles from "../sidebar/Sidebar.module.css";
import axios from "../../api/axiosDefault";
import TopicsSidebarListItem from "./TopicsSidebarListItem";
import { useEffect, useState } from "react";

export default function TopicsSidebarList() {

    const [order, setOrder] = useState("top");

    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/topics/?ordering=${order}`);
                setTopics(response.data || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load tools.');
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
                    <h2>Topics</h2>
                </div>
                <div className="col-4 text-end">
                    <span
                        onClick={() => setOrder("top")}
                        style={{
                            cursor: "pointer",
                            color: order === "top" ? "#2da7c8" : "black",
                            marginRight: "8px",
                        }}
                    >
                        Top
                    </span>
                    |
                    <span
                        onClick={() => setOrder("title")}
                        style={{
                            cursor: "pointer",
                            color: order === "title" ? "#2da7c8" : "black",
                            marginLeft: "8px",
                        }}
                    >
                        Abc
                    </span>
                </div>
            </div>
            
            {topics.map((topic) => (
                <TopicsSidebarListItem key={topic.id} topic={topic} />
            ))}

        </>
    )
}