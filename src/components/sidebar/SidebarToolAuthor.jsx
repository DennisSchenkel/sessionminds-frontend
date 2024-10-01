import styles from "../sidebar/Sidebar.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axiosDefault";

import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SidebarToolAuthor() {

    const { slug } = useParams();

    const [toolAuthor, setToolAuthor] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAuthorDetails = async () => {
            try {
                const response = await axios.get(`/tools/tool/${slug}`);
                const profile = response.data.profile;
                setToolAuthor(profile);
            } catch (error) {
                setError("Failed to load author.");
            } finally {
                setLoading(false);
            }
        };

        getAuthorDetails();
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) return <p>{error}</p>;
    
    return (
        <>
            <div className={`${styles["headline-row"]}`}>
                <h2>Tool Author</h2>
            </div>

            <Card className="shadow-sm p-4 bg-light" style={{ width: "100%", minHeight: "400px", borderRadius: "25px" }}>
                <Row className="d-flex flex-column align-items-center">
                    <Col className="text-center">
                        <Image 
                        src={toolAuthor.image} 
                        alt={`Author image of ${toolAuthor.first_name} ${toolAuthor.last_name}`} 
                        roundedCircle 
                        style={{ width: "150px", height: "150px", objectFit: "cover", marginBottom: "16px" }}
                        />
                        <h3 style={{ fontFamily: "Lato, sans-serif", fontSize: "20px" }}>{toolAuthor.first_name + " " + toolAuthor.last_name}</h3>
                        <p className="text-muted">{toolAuthor.job_title}</p>
                    </Col>

                    <Col className="d-flex justify-content-center gap-2 mb-3">
                        {toolAuthor.linkedin && <a href={toolAuthor.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#1d4ed8", fontSize: "1.5em" }} />
                        </a>}
                        {toolAuthor.twitter && <a href={toolAuthor.twitter} target="_blank" rel="noreferrer" aria-label="Twitter Profile">
                            <FontAwesomeIcon icon={faTwitter} style={{ color: "#60a5fa", fontSize: "1.5em" }} />
                        </a>}
                        {toolAuthor.facebook && <a href={toolAuthor.facebook} target="_blank" rel="noreferrer" aria-label="Facebook Profile">
                            <FontAwesomeIcon icon={faFacebook} style={{ color: "#2563eb", fontSize: "1.5em" }} />
                        </a>}
                        {toolAuthor.instagram && <a href={toolAuthor.instagram} target="_blank" rel="noreferrer" aria-label="Instagram Profile">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: "#e1306c", fontSize: "1.5em" }} />
                        </a>}
                    </Col>

                    <Col className="text-center mb-3">
                        <p>
                        {toolAuthor.profile_description}
                        </p>
                    </Col>

                    <Col className="text-center">
                        <Button variant="secondary" href={`../profile/${toolAuthor.slug}`}>
                            Go to profile
                        </Button>
                    </Col>
                </Row>
            </Card>
        </>
    )
}