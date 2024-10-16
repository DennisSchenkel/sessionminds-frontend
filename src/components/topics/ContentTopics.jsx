import styles from "../content/Content.module.css";
import TopicsListItem from "./TopicsListItem";
import Paginator from "../utilities/Paginator";
import axios from "../../api/axiosDefault";
import { useEffect, useState } from "react";

export default function ContentTopics() {
  // Order state
  const [order, setOrder] = useState("top");
  // Topics data
  const [topics, setTopics] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);
  // Error state
  const [error, setError] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Number of items per page
  const itemsPerPage = 10;

  // Fetch topics
  useEffect(() => {
    const fetchData = async (page = 1) => {
      setLoading(true);
      setError(null);
      // Fetch topics
      try {
        const response = await axios.get(`/topics/`, {
          params: {
            ordering: order,
            page: page,
            page_size: itemsPerPage,
          },
        });
        setTopics(response.data.results || []);
        setCurrentPage(page);
        setTotalPages(Math.ceil(response.data.count / itemsPerPage));
        setLoading(false);
        // Handle errors
      } catch (error) {
        setError("Failed to load tools.");
        setLoading(false);
      }
    };

    fetchData(currentPage);
  }, [order, currentPage]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle order change
  const handleOrderChange = (newOrder) => {
    if (newOrder !== order) {
      setOrder(newOrder);
      setCurrentPage(1);
    }
  };

  // Display loading message
  if (loading) return <p>Loading...</p>;
  // Display error message
  if (error) return <p>{error}</p>;

  // Render topics list
  return (
    <>
      <div className={`row ${styles["headline-row"]}`}>
        <div className="col-8">
          <h1>Topics</h1>
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
      <div>
        {topics.map((topic) => (
          <TopicsListItem key={topic.id} topic={topic} />
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
