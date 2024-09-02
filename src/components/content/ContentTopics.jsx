import styles from "./Content.module.css";
import TopicsListItem from "../topics/TopicsListItem";
import axios from "../../api/axiosDefault";
import { useEffect, useState } from "react";

export default function ContentTopics() {

    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/topics/');
                setTopics(response.data || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load tools.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
    <>
    <div className={`row ${styles["headline-row"]}`}>
        <div className="col-8">
            <h1>Topics</h1>
        </div>
        <div className="col-4 text-end">
            All | Top
        </div>
    </div>
    <div>
    
        {topics.map((topic) => (
            <TopicsListItem key={topic.id} topic={topic} />
        ))}

    </div>
    </>
    )
    }