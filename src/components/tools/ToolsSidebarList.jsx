import styles from "../sidebar/Sidebar.module.css";
import ToolsSidebarListItem from "./ToolsSidebarListItem";
import axios from "../../api/axiosDefault";
import { useEffect, useState } from "react";

export default function ToolsSidebarList() {
  // Order state
  const [order, setOrder] = useState("votes");
  // Tools data
  const [tools, setTools] = useState([]);

  // Loading states
  const [loading, setLoading] = useState(true);
  // Error state
  const [error, setError] = useState(null);

  // Number of items per page
  const itemsPerPage = 4;

  // Fetch tools
  useEffect(() => {
    const fetchData = async () => {
      // Fetch tools
      try {
        const response = await axios.get(`/tools/`, {
          params: {
            ordering: order,
            page_size: itemsPerPage,
          },
        });
        setTools(response.data.results || []);
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

  // Return tools list
  return (
    <>
      <div className={`row ${styles["headline-row"]}`}>
        <div className="col-8">
          <h2>Tools</h2>
        </div>
        <div className="col-4 text-end">
          <span
            onClick={() => handleOrderChange("votes")}
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
            onClick={() => handleOrderChange("latest")}
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
      {tools.map((tool) => (
        <ToolsSidebarListItem key={tool.id} tool={tool} />
      ))}
    </>
  );
}
