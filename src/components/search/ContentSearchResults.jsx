import styles from "../content/Content.module.css";
import ToolsListItem from "../tools/ToolsListItem";
import Paginator from "../utilities/Paginator";
import axios from "../../api/axiosDefault";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ContentToolResults() {
  // Get search term from URL
  const { searchTerm } = useParams();
  // Order state
  const [order, setOrder] = useState("votes");
  // Tools data
  const [tools, setTools] = useState([]);
  // Loading and error states
  const [loading, setLoading] = useState(true);
  // Error state
  const [error, setError] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Number of items per page
  const itemsPerPage = 10;

  // Fetch tools based on search term
  useEffect(() => {
    const fetchData = async (page = 1) => {
      setLoading(true);
      setError(null);
      // Fetch tools based on search term
      try {
        const response = await axios.get(`/tools/?search=${searchTerm}`, {
          params: {
            ordering: order,
            page: page,
            page_size: itemsPerPage,
          },
        });
        setTools(response.data.results || []);
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
  }, [order, currentPage, searchTerm]);

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

  return (
    <>
      <div className={`row ${styles["headline-row"]}`}>
        <div className="col-8">
          <h1>Search Results</h1>
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
      <div>
        {tools.map((tool) => (
          <ToolsListItem key={tool.id} tool={tool} />
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
