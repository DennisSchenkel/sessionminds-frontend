
import axios from "../../api/axiosDefault";
import TopicsSidebarListItem from "./TopicsSidebarListItem";
import { useEffect, useState } from "react";

export default function TopicsSidebarList() {

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
            
            {topics.map((topic) => (
                <TopicsSidebarListItem key={topic.id} topic={topic} />
            ))}

        </>
    )
}