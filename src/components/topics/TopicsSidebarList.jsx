import styles from "../sidebar/Sidebar.module.css";
import axios from "../../api/axiosDefault";
import TopicsSidebarListItem from "./TopicsSidebarListItem";
import { useEffect, useState } from "react";

export default function TopicsSidebarList() {
  // Order state
  const [order, setOrder] = useState("top");
  // Topics data
  const [topics, setTopics] = useState([]);

  // Loading states
  const [loading, setLoading] = useState(true);
  // Error state
  const [error, setError] = useState(null);

  // Number of items per page
  const itemsPerPage = 4;

  // Fetch topics
  useEffect(() => {
    const fetchData = async () => {
      // Fetch topics
      try {
        const response = await axios.get(`/topics/`, {
          params: {
            ordering: order,
            page_size: itemsPerPage,
          },
        });
        setTopics(response.data.results || []);
        setLoading(false);
        // Handle errors
      } catch (error) {
        setError("Failed to load tools.");
        setLoading(false);
      }
    };

    fetchData();
  }, [order]);

  // Handle order change
  const handleOrderChange = (newOrder) => {
    if (newOrder !== order) {
      setOrder(newOrder);
    }
  };

  // Display loading message
  if (loading) return <p>Loading...</p>;
  // Display error message
  if (error) return <p>{error}</p>;

  // Return topics list
  return (
    <>
      <div className={`row ${styles["headline-row"]}`}>
        <div className="col-8">
          <h2>Topics</h2>
        </div>
        <div className="col-4 text-end">
          <span
            onClick={() => handleOrderChange("top")}
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
            onClick={() => handleOrderChange("title")}
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
  );
}
