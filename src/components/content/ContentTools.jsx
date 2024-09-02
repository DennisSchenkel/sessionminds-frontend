import styles from "./Content.module.css";
import ToolsListItem from "../tools/ToolsListItem";
import axios from "../../api/axiosDefault";
import { useEffect, useState } from "react";

export default function ContentTools() {

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
    <div className={`row ${styles["headline-row"]}`}>
        <div className="col-8">
            <h1>Tools</h1>
        </div>
        <div className="col-4 text-end">
            Top | Latest
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