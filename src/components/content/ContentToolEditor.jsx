import styles from "./Content.module.css";
import axios from "../../api/axiosDefault";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ContentToolEditor() {

    const [topics, setTopics] = useState([]);

  const getTopics = async () => {
        try {
            const response = await axios.get("/topics/");
            console.log("API Response:", response.data); // Logging the API response
            setTopics(response.data);
        } catch (error) {
            console.error("Error fetching topics:", error);
        }
    };




    const [tool, setTool] = useState({
        title: "",
        topics: [],
        short_description: "",
        full_description: "",
        instructions: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(tool));
        axios.post("/tools/", tool)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleTopicChange = (event) => {
        const value = event.target.value;
        setTool({...tool, topic_ids: [parseInt(value)]});
    }

    useEffect(() => {
        getTopics();
    }, []);

    return (
    <>
    <div className={`${styles["headline-row"]} mb-4`}>
        <h1>Tools</h1>
        <p>Here you can create a new tool or edit an existing one.</p>
    </div>
        <Form>
            
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Label className={`${styles["editor-title"]}`}> Title</Form.Label>
                <Form.Control 
                    type="text" 
                    required 
                    placeholder="Give your tool a unique title" 
                    aria-required="true" 
                    aria-describedby="titleHelp"
                    onChange={(event) => setTool({...tool, title: event.target.value})}
                />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.Dropdown">
                <Form.Label className={`${styles["editor-title"]}`}>Topic</Form.Label>
                <Form.Select 
                    required
                    defaultValue={1}
                    aria-label="Tool Type" 
                    aria-required="true" 
                    aria-labelledby="topicLabel"
                    onChange={handleTopicChange}
                >
                    {topics.map((topic) => (
                        <option key={topic.id} value={topic.id}>
                            {topic.title}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                <Form.Label className={`${styles["editor-title"]}`}>Short-Description</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    required 
                    placeholder="A short description with no more than 50 characters."
                    aria-required="true"
                    aria-describedby="short_descriptionHelp"
                    onChange={(event) => setTool({...tool, short_description: event.target.value})}
                />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                <Form.Label className={`${styles["editor-title"]}`}>Description</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={5} 
                    required 
                    placeholder="Feel free to write a longer description with up to 500 characters. Tell people what they can use this tool for."
                    aria-required="true"
                    aria-describedby="full_descriptionHelp"
                    onChange={(event) => setTool({...tool, full_description: event.target.value})}
                />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                <Form.Label className={`${styles["editor-title"]}`}>Instructions</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={5} 
                    required 
                    placeholder="Describe in detail all the steps of this tool and what facilitators, as well as participants, have to do. Also think about materials that will be handy."
                    aria-required="true"
                    aria-describedby="instructionsHelp"
                    onChange={(event) => setTool({...tool, instructions: event.target.value})}
                />
            </Form.Group>
            <Button 
                variant="primary" 
                type="submit" 
                aria-label="Save Tool"
                onClick={handleSubmit}
            >
                Save Tool
            </Button>
        </Form>

    
    </>
    )
    }