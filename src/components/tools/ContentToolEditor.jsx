import styles from "../content/Content.module.css";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import { UserContext } from "../../context/UserContext";

import axios from "../../api/axiosDefault";

export default function ContentToolEditor() {
  // Navigation und Parameter
  const navigate = useNavigate();
  const { id } = useParams();

  // Kontext und Zustände
  const { user } = useContext(UserContext);
  const [is_owner, setIsOwner] = useState(false);
  const [topics, setTopics] = useState([]);
  const [emoji, setEmoji] = useState(null);
  const [validated, setValidated] = useState(false); // Validator-Zustand
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Tool-Zustand mit Standardwerten
  const [tool, setTool] = useState({
    title: "",
    topic_id: "",
    short_description: "",
    full_description: "",
    instructions: "",
    icon: "26aa",
  });

  // Anzahl der Elemente pro Seite
  const itemsPerPage = 100;

  // Daten abrufen
  useEffect(() => {
    const getTopics = async () => {
      try {
        const unsortedResponse = await axios.get("/topics/", {
          params: {
            page_size: itemsPerPage,
          },
        });
        const response = unsortedResponse.data.results.sort(
          (a, b) => a.id - b.id
        );
        setTopics(response);
        setLoading(false);
      } catch (error) {
        setError("Failed to load topics.");
        setLoading(false);
      }
    };
    getTopics();

    const getExistingToolOrCreateNew = async () => {
      if (id) {
        try {
          const existingTool = await axios.get(`/tools/${id}`);
          setIsOwner(existingTool.data.is_owner);
          if (existingTool.data.is_owner) {
            setTool({
              title: existingTool.data.title,
              topic_id: existingTool.data.topic.id,
              short_description: existingTool.data.short_description,
              full_description: existingTool.data.full_description,
              instructions: existingTool.data.instructions,
              icon: existingTool.data.icon,
            });
            setEmoji(existingTool.data.icon);
          }
        } catch (error) {
          setError("Failed to load tool.");
        }
      } else {
        setTool({
          title: "",
          topic_id: "",
          short_description: "",
          full_description: "",
          instructions: "",
          icon: "26aa",
        });
      }
    };
    getExistingToolOrCreateNew();
  }, [id, user]);

  // Emoji-Auswahl-Handler
  const onEmojiClick = (emojiData) => {
    setEmoji(emojiData.unified);
    setTool((prevTool) => ({
      ...prevTool,
      icon: emojiData.unified,
    }));
  };

  // Formular-Submit-Handler mit Validator
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (id && is_owner) {
        axios
          .put(`/tools/${id}/`, tool)
          .then((response) => {
            navigate(`/tools/${response.data.slug}`, {
              state: {
                message: `${tool.title} was updated successfully!`,
                variant: "success",
              },
            });
          })
          .catch((error) => {
            setError(error.response.data);
          });
      } else {
        axios
          .post("/tools/", tool)
          .then((response) => {
            navigate(`/tools/${response.data.slug}`, {
              state: {
                message: `${tool.title} was created successfully!`,
                variant: "success",
              },
            });
          })
          .catch((error) => {
            setError(error.response.data);
          });
      }
    }

    setValidated(true);
  };

  // Rendering loading and error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Rendering des F
  return (
    <>
      <div className={`${styles["headline-row"]} mb-4`}>
        <h1>Tools</h1>
        <p>Here you can create a new tool or edit an existing one.</p>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* Titel */}
        <Form.Group className="mb-4" controlId="TitleInput">
          <Form.Label className={`${styles["editor-title"]}`}>Title</Form.Label>
          <Form.Control
            type="text"
            required
            maxLength="100"
            placeholder="Give your tool a unique title"
            aria-required="true"
            aria-describedby="titleHelp"
            onChange={(event) =>
              setTool({ ...tool, title: event.target.value })
            }
            value={tool.title}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a title.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Topic */}
        <Form.Group className="mb-4" controlId="TopicDropdown">
          <Form.Label className={`${styles["editor-title"]}`}>Topic</Form.Label>
          <Form.Select
            required
            aria-label="Tool Topic"
            aria-required="true"
            onChange={(event) =>
              setTool({ ...tool, topic_id: event.target.value })
            }
            value={tool.topic_id}
          >
            <option value="">Select a topic</option>
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.title}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select a topic.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Icon */}
        <Form.Group>
          <Form.Label className={`${styles["editor-title"]}`}>Icon</Form.Label>
          <div className="row">
            <div className="col pb-3">
              <EmojiPicker
                onEmojiClick={onEmojiClick}
                skinTonesDisabled={false}
                height={500}
                width="100%"
                aria-label="Tool Icon"
                aria-required="true"
              />
            </div>
            <div className="col d-flex flex-column align-items-center mb-4">
              <div className="py-5">
                {emoji !== null && <h3>Selected Tool Icon:</h3>}
              </div>
              <div className="pb-5 text-center">
                <Emoji unified={emoji} size={64} />
              </div>
              <div className="text-center">
                {emoji !== null && (
                  <Button onClick={() => setEmoji(null)}>Delete Icon</Button>
                )}
              </div>
            </div>
          </div>
        </Form.Group>

        {/* Short Description */}
        <Form.Group className="mb-4" controlId="Textarea1">
          <Form.Label className={`${styles["editor-title"]}`}>
            Short Description
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            required
            maxLength="50"
            placeholder="A short description with no more than 50 characters."
            aria-required="true"
            aria-describedby="short_descriptionHelp"
            onChange={(event) =>
              setTool({ ...tool, short_description: event.target.value })
            }
            value={tool.short_description}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a short description.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Full Description */}
        <Form.Group className="mb-4" controlId="Textarea2">
          <Form.Label className={`${styles["editor-title"]}`}>
            Full Description
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            required
            maxLength="500"
            placeholder="Feel free to write a longer description with up to 500 characters. Tell people what they can use this tool for."
            aria-required="true"
            aria-describedby="full_descriptionHelp"
            onChange={(event) =>
              setTool({ ...tool, full_description: event.target.value })
            }
            value={tool.full_description}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a description.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Instructions */}
        <Form.Group className="mb-4" controlId="Textarea3">
          <Form.Label className={`${styles["editor-title"]}`}>
            Instructions
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            required
            maxLength="5000"
            placeholder="Describe in detail all the steps of this tool and what facilitators, as well as participants, have to do. Also think about materials that will be handy."
            aria-required="true"
            aria-describedby="instructionsHelp"
            onChange={(event) =>
              setTool({ ...tool, instructions: event.target.value })
            }
            value={tool.instructions}
          />
          <Form.Control.Feedback type="invalid">
            Please provide instructions.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" aria-label="Save Tool">
          Save Tool
        </Button>
      </Form>
    </>
  );
}
