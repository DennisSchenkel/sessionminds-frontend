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
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingTools, setLoadingTools] = useState(true);
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
        setLoadingProfile(false);
      } catch (error) {
        setError(error);
        setLoadingProfile(false);
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
        setLoadingTools(false);
      } catch (error) {
        setError(error);
        setLoadingTools(false);
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

  // Display loading state
  if (error) return <p>{error.message}</p>;

  // Preload the profile image
  const profileImageUrl = profileData.image
    ? profileData.image.replace("/upload/", "/upload/f_auto,q_auto,w_150/")
    : null;

  return (
    <>
      {profileImageUrl && (
        <img
          src={profileImageUrl}
          style={{ display: "none" }}
          alt=""
          aria-hidden="true"
        />
      )}

      <div className="row">
        <div className="col-12 col-md-4">
          {loadingProfile ? (
            <div
              style={{
                width: 150,
                height: 150,
                backgroundColor: "#ccc",
                borderRadius: "50%",
              }}
            />
          ) : (
            <Image
              src={profileImageUrl}
              width={150}
              className="rounded-circle"
              alt={
                profileData.first_name
                  ? profileData.first_name
                  : "Profile image"
              }
            />
          )}
        </div>
        <div className="col-12 col-md-8">
          <h1>
            {loadingProfile
              ? "Loading..."
              : `${profileData.first_name} ${profileData.last_name}`}
          </h1>
          {profileData.job_title && (
            <p>
              <b>Job Title: </b> {profileData.job_title}
            </p>
          )}
          {profileData.profile_description && (
            <p>{profileData.profile_description}</p>
          )}
          {(profileData.linkedin ||
            profileData.twitter ||
            profileData.facebook ||
            profileData.instagram) && (
            <>
              <h2>Social Media</h2>
              <ul className="list-unstyled mb-5">
                {profileData.linkedin && (
                  <li>
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
                {profileData.twitter && (
                  <li>
                    <a
                      href={profileData.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                )}
                {profileData.facebook && (
                  <li>
                    <a
                      href={profileData.facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                )}
                {profileData.instagram && (
                  <li>
                    <a
                      href={profileData.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                )}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className="w-25 d-grid gap-2">
        {profileData.is_owner && (
          <>
            <Button href={`/profile/editor/${slug}/`} className="mt-4">
              Edit profile
            </Button>
            <Button
              onClick={() => setShowDeleteModal(true)}
              className="mt-2 wd-300"
              variant="danger"
            >
              Delete profile
            </Button>
          </>
        )}
      </div>

      <div className="mt-5">
        {loadingTools ? (
          <p>Loading tools...</p>
        ) : profileData.tool_count ? (
          <>
            <h2>Tools ({profileData.tool_count})</h2>
            <hr />
            {tools.map((tool) => (
              <ToolsListItem key={tool.id} tool={tool} />
            ))}
          </>
        ) : (
          <p>No tools available.</p>
        )}
      </div>

      {showDeleteModal && (
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Session Minds Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Do you really want to delete your profile?</p>
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
