import styles from "../content/Content.module.css";
import ToolsListItem from "../tools/ToolsListItem";
import Paginator from "../utilities/Paginator";
import axios from "../../api/axiosDefault";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Emoji } from "emoji-picker-react";

export default function ContentTopicToolList() {
  // Get the topic slug from the URL
  const { slug } = useParams();

  // Order state
  const [order, setOrder] = useState("votes");
  // Topic data
  const [topic, setTopic] = useState("");
  // Icon state
  const [icon, setIcon] = useState("");
  // Tools data
  const [tools, setTools] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);
  // Error state
  const [error, setError] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Number of items per page
  const itemsPerPage = 10;

  // Fetch topic and tools
  useEffect(() => {
    const fetchTopicData = async () => {
      // Fetch topic
      try {
        const response = await axios.get(`/topics/${slug}`);
        setTopic(response.data);
        setIcon(response.data.icon.icon_code.toLowerCase());
        // Handle errors
      } catch (error) {
        setError("Failed to load topic.");
      }
    };

    // Fetch tools
    const fetchToolsData = async (page = 1) => {
      setLoading(true);
      setError(null);
      // Fetch tools
      try {
        const response = await axios.get(`/topics/list/${slug}/`, {
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

    fetchTopicData();
    fetchToolsData(currentPage);
  }, [order, currentPage, slug]);

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

  // Return tools list
  return (
    <>
      <div className={`row ${styles["headline-row"]}`}>
        <div className="col-8">
          <h1>
            {topic.title} <Emoji unified={icon} size="30" />
          </h1>
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
