
import axios from "../../api/axiosDefault";
import ToolsSidebarListItem from "./ToolsSidebarListItem";
import { useEffect, useState } from "react";

export default function TopicsSidebarList() {

    const [tools, setTools] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/tools/');
                setTools(response.data || []);
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
            
            {tools.map((tool) => (
                <ToolsSidebarListItem key={tool.id} tool={tool} />
            ))}

        </>
    )
}