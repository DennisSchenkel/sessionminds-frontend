import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import ToolsListItem from "../../components/tools/ToolsListItem";

import axios from "../../api/axiosDefault";

export default function Profile() {
  // Get the slug from the URL
  const { slug } = useParams();

  // Profile data
  const [profileData, setProfileData] = useState({});
  // Tools data
  const [tools, setTools] = useState([]);

  // State to show the delete modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Get the navigate function from the router
  const navigate = useNavigate();

  // Loading states
  const [loading, setLoading] = useState(true);
  // Error state
  const [error, setError] = useState(null);

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      // Fetch profile data
      try {
        const response = await axios.get(`/profiles/${slug}/`);
        const profile = response.data;
        setProfileData(profile);
      } catch (error) {
        setError(error);
      }
    };
    fetchProfile();
  }, [slug]);

  // Fetch profile tools
  useEffect(() => {
    const fetchProfileTools = async () => {
      // Fetch profile tools
      try {
        const response = await axios.get(`/tools/user/${profileData.user_id}/`);
        const tools = response.data.results;
        setTools(tools);
        setLoading(false);
        // Handle errors
      } catch (error) {
        setError(error);
      }
    };
    // Fetch profile tools if profile data is available
    if (profileData.id) {
      fetchProfileTools();
    }
  }, [profileData]);

  // Handle delete profile
  const handleDelete = (event) => {
    event.preventDefault();
    // Check if profile data is available and user is the owner
    if (profileData.id && profileData.is_owner) {
      axios
        .delete(`/users/${profileData.user_id}/delete/`)
        .then(() => {
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          localStorage.removeItem("user_id");
          navigate("/", {
            state: {
              message: `Profile was deleted!`,
              variant: "danger",
            },
          });
        })
        .catch((error) => {
          setError(error.response.data);
        });
    }
  };

  // Display loading message
  if (loading) return <p>Loading...</p>;
  // Display error message
  if (error) return <p>{error.message}</p>;

  // Return profile data
  return (
    <>
      <div className="row">
        <div className="col-auto text-center">
          <Image
            src={profileData.image}
            width={150}
            className="rounded-circle"
            alt={
              profileData.first_name ? profileData.first_name : "Profile image"
            }
          />
        </div>
        <div className="col-auto">
          <h1>{profileData.first_name + " " + profileData.last_name} </h1>
          {profileData.job_title ? (
            <p>
              <b>Job Title: </b> {profileData.job_title}
            </p>
          ) : (
            <></>
          )}
          {profileData.profile_description ? (
            <p>{profileData.profile_description}</p>
          ) : (
            <></>
          )}
          {profileData.linkedin &&
          profileData.twitter &&
          profileData.facebook &&
          profileData.instagram ? (
            <>
              <h2>Social Media</h2>
              <ul className="list-unstyled mb-5">
                {profileData.linkedin ? (
                  <li>
                    <a href={profileData.linkedin} target="_blank">
                      LinkedIn
                    </a>
                  </li>
                ) : (
                  <></>
                )}
                {profileData.twitter ? (
                  <li>
                    <a href={profileData.twitter} target="_blank">
                      Twitter
                    </a>
                  </li>
                ) : (
                  <></>
                )}
                {profileData.facebook ? (
                  <li>
                    <a href={profileData.facebook} target="_blank">
                      Facebook
                    </a>
                  </li>
                ) : (
                  <></>
                )}
                {profileData.instagram ? (
                  <li>
                    <a href={profileData.instagram} target="_blank">
                      Instagram
                    </a>
                  </li>
                ) : (
                  <></>
                )}
              </ul>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="w-25 d-grid gap-2">
        {profileData.is_owner ? (
          <Button href={`/profile/editor/${slug}/`} className="mt-4">
            Edit profile
          </Button>
        ) : (
          <></>
        )}
        {profileData.is_owner ? (
          <Button
            onClick={() => setShowDeleteModal(true)}
            className="mt-2 wd-300"
            variant="danger"
          >
            Delete profile
          </Button>
        ) : (
          <></>
        )}
      </div>

      <div className="mt-5">
        {profileData.tool_count ? (
          <>
            <h2>Tools ({profileData.tool_count})</h2>
            <hr />
          </>
        ) : (
          <></>
        )}

        {tools.map((tool) => (
          <ToolsListItem key={tool.id} tool={tool} />
        ))}
      </div>

      {showDeleteModal && (
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Session Minds Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Do you really want to delete you profile?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              type="delete"
              aria-label="Delete Tool"
              onClick={handleDelete}
            >
              Delete Profile!
            </Button>

            <Link onClick={() => setShowDeleteModal(false)}>
              <Button variant="primary">No, keep it!</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
