import styles from "./Content.module.css";
import TopicsListItem from "../topics/TopicsListItem";
import Paginator from "../utilities/Paginator";
import axios from "../../api/axiosDefault";
import { useEffect, useState } from "react";

export default function ContentTopics() {

    const [order, setOrder] = useState("top");

    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Number of items per page
    const itemsPerPage = 4;

    useEffect(() => {
        const fetchData = async (page = 1) => {
            setLoading(true);
            setError(null);
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
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to load tools.");
                setLoading(false);
            }
        };

        fetchData(currentPage);
    }, [order, currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleOrderChange = (newOrder) => {
        if (newOrder !== order) {
            setOrder(newOrder);
            setCurrentPage(1);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

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
    )
    }