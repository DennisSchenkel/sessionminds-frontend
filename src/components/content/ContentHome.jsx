import styles from "./Content.module.css";
import ToolsListItem from "../tools/ToolsListItem";
import TopicsListItem from "../topics/TopicsListItem";
import axios from "../../api/axiosDefault";
import { useEffect, useState } from "react";

export default function ContentHome() {
  const [topTools, setTopTools] = useState([]);
  const [latestTools, setLatestTools] = useState([]);
  const [topTopics, setTopTopics] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Number of items per page
  const itemsPerPage = 4;

  // Fetch top tools, latest tools, and top topics
  useEffect(() => {
    const fetchData = async () => {
      // Fetch top tools
      try {
        const responseTop = await axios.get(`/tools/`, {
          params: {
            ordering: "votes",
            page_size: itemsPerPage,
          },
        });
        setTopTools(responseTop.data.results || []);
        const responseLatest = await axios.get(`/tools/`, {
          params: {
            ordering: "latest",
            page_size: itemsPerPage,
          },
        });
        setLatestTools(responseLatest.data.results || []);
        const responseTopics = await axios.get(`/topics/`, {
          params: {
            ordering: "top",
            page_size: itemsPerPage,
          },
        });
        setTopTopics(responseTopics.data.results || []);
        setLoading(false);
        // Handle errors
      } catch (error) {
        setError("Failed to load tools.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Display loading message
  if (loading) return <div>Loading...</div>;

  // Display error message
  if (error) return <p>{error}</p>;

  // Render the home content
  return (
    <>
      <div className="pb-3">
        <div className={`row ${styles["headline-row"]}`}>
          <h1>Explore</h1>
        </div>
        <p>Explore the latest and greatest tools for your session.</p>
      </div>
      <div className="pb-4">
        <div className={`row ${styles["headline-row"]}`}>
          <h2>Top Tools</h2>
        </div>
        {topTools.map((tool) => (
          <ToolsListItem key={tool.id} tool={tool} />
        ))}
      </div>
      <div className="pb-4">
        <div className={`row ${styles["headline-row"]}`}>
          <h2>Latest Tools</h2>
        </div>
        {latestTools.map((tool) => (
          <ToolsListItem key={tool.id} tool={tool} />
        ))}
      </div>
      <div className="pb-4">
        <div className={`row ${styles["headline-row"]}`}>
          <h2>Top Topics</h2>
        </div>

        {topTopics.map((topic) => (
          <TopicsListItem key={topic.id} topic={topic} />
        ))}
      </div>
    </>
  );
}
