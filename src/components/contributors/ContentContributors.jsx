import ContributorsListItem from "../contributors/ContributorsListItem";
import styles from "../content/Content.module.css";
import axios from "../../api/axiosDefault";
import { useEffect, useState } from "react";

export default function ContentContributors() {
  const [order, setOrder] = useState("tools");

  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Number of items per page
  const itemsPerPage = 4;

  // Fetch top contributors
  useEffect(() => {
    const fetchData = async () => {
      // Fetch top contributors
      try {
        const response = await axios.get(`/profiles/`, {
          params: {
            ordering: order,
            page_size: itemsPerPage,
          },
        });
        setContributors(response.data.results || []);
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
    // Update order if it has changed
    if (newOrder !== order) {
      setOrder(newOrder);
    }
  };

  // Display loading message
  if (loading) return <p>Loading...</p>;

  // Display error message
  if (error) return <p>{error}</p>;

  // Display top contributors
  return (
    <>
      <div className={`row ${styles["headline-row"]}`}>
        <div className="col-8">
          <h1>Top Contributors</h1>
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

      <div>
        {contributors
          .filter(
            (contributor) =>
              contributor.first_name &&
              contributor.last_name &&
              contributor.tool_count !== 0
          )
          .map((contributor) => (
            <ContributorsListItem
              key={contributor.id}
              contributor={contributor}
            />
          ))}
      </div>
    </>
  );
}
