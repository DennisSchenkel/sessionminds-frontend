import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container, Image } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "../../api/axiosDefault";

export default function ProfileEditor() {

  const { profile: userProfile } = useContext(UserContext);

  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    job_title: "",
    profile_description: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/profiles/${userProfile.id}/`);
        const profile = response.data;
        setProfileData({
          first_name: profile.first_name || "",
          last_name: profile.last_name || "",
          job_title: profile.job_title || "",
          profile_description: profile.profile_description || "",
          linkedin: profile.linkedin || "",
          twitter: profile.twitter || "",
          facebook: profile.facebook || "",
          instagram: profile.instagram || "",
          image: null,
        });
        if (profile.image) {
          setPreviewImage(profile.image);
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, [userProfile.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png"];
      if (!validTypes.includes(file.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: ["Image file is not a valid format! (jpeg, png)"],
        }));
        return;
      }
      if (file.size > 2 * 1024 * 1024) { // 2MB
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: ["Image file is too large! (max 2MB)"],
        }));
        return;
      }

      setProfileData((prevData) => ({
        ...prevData,
        image: file,
      }));
      setPreviewImage(URL.createObjectURL(file));
      setErrors((prevErrors) => ({
        ...prevErrors,
        image: null,
      }));
    }
  };

  const validateImage = (file) => {
    const validTypes = ["image/jpeg", "image/png"];
    if (!validTypes.includes(file.type)) {
      return "Image file is not a valid format! (jpeg, png)";
    }
    if (file.size > 2 * 1024 * 1024) { // 2MB
      return "Image file is too large! (max 2MB)";
    }
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});

    const formData = new FormData();
    formData.append("first_name", profileData.first_name);
    formData.append("last_name", profileData.last_name);
    formData.append("job_title", profileData.job_title);
    formData.append("profile_description", profileData.profile_description);
    formData.append("linkedin", profileData.linkedin);
    formData.append("twitter", profileData.twitter);
    formData.append("facebook", profileData.facebook);
    formData.append("instagram", profileData.instagram);
    if (profileData.image) {
      const imageError = validateImage(profileData.image);
      if (imageError) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: [imageError],
        }));
        return;
      }
      formData.append("image", profileData.image);
    }

    try {
      await axios.put(`/profiles/${userProfile.id}/`, formData)
        .then((response) => {
          navigate(`/profile/${response.data.slug}`, { 
              state: { 
                  message: `${profileData.first_name} was updated successfully!`, 
                  variant: "success"
              }
          }
      );
        
      });
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        setErrors({ non_field_errors: ["An unexpected error occurred."] });
      }
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Complete Your Profile</h2>
      <Form onSubmit={handleSubmit}>
        {/* First Name */}
        <Form.Group className="mb-3" controlId="first_name">
          <Form.Label>First Name *</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={profileData.first_name}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
          {errors.first_name?.map((message, index) => (
            <Alert variant="warning" key={index}>{message}</Alert>
          ))}
        </Form.Group>

        {/* Last Name */}
        <Form.Group className="mb-3" controlId="last_name">
          <Form.Label>Last Name *</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={profileData.last_name}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
          {errors.last_name?.map((message, index) => (
            <Alert variant="warning" key={index}>{message}</Alert>
          ))}
        </Form.Group>

        {/* Job Title */}
        <Form.Group className="mb-3" controlId="job_title">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            name="job_title"
            value={profileData.job_title}
            onChange={handleChange}
            placeholder="Enter your job title"
          />
          {errors.job_title?.map((message, index) => (
            <Alert variant="warning" key={index}>{message}</Alert>
          ))}
        </Form.Group>

        {/* Profile Description */}
        <Form.Group className="mb-3" controlId="profile_description">
          <Form.Label>Profile Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="profile_description"
            value={profileData.profile_description}
            onChange={handleChange}
            placeholder="Tell us about yourself"
          />
          {errors.profile_description?.map((message, index) => (
            <Alert variant="warning" key={index}>{message}</Alert>
          ))}
        </Form.Group>

        {/* LinkedIn */}
        <Form.Group className="mb-3" controlId="linkedin">
          <Form.Label>LinkedIn</Form.Label>
          <Form.Control
            type="url"
            name="linkedin"
            value={profileData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/yourprofile"
          />
          {errors.linkedin?.map((message, index) => (
            <Alert variant="warning" key={index}>{message}</Alert>
          ))}
        </Form.Group>

        {/* Twitter */}
        <Form.Group className="mb-3" controlId="twitter">
          <Form.Label>Twitter</Form.Label>
          <Form.Control
            type="url"
            name="twitter"
            value={profileData.twitter}
            onChange={handleChange}
            placeholder="https://twitter.com/yourprofile"
          />
          {errors.twitter?.map((message, index) => (
            <Alert variant="warning" key={index}>{message}</Alert>
          ))}
        </Form.Group>

        {/* Facebook */}
        <Form.Group className="mb-3" controlId="facebook">
          <Form.Label>Facebook</Form.Label>
          <Form.Control
            type="url"
            name="facebook"
            value={profileData.facebook}
            onChange={handleChange}
            placeholder="https://facebook.com/yourprofile"
          />
          {errors.facebook?.map((message, index) => (
            <Alert variant="warning" key={index}>{message}</Alert>
          ))}
        </Form.Group>

        {/* Instagram */}
        <Form.Group className="mb-3" controlId="instagram">
          <Form.Label>Instagram</Form.Label>
          <Form.Control
            type="url"
            name="instagram"
            value={profileData.instagram}
            onChange={handleChange}
            placeholder="https://instagram.com/yourprofile"
          />
          {errors.instagram?.map((message, index) => (
            <Alert variant="warning" key={index}>{message}</Alert>
          ))}
        </Form.Group>

        {/* Image Upload */}
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            accept="image/jpeg, image/png"
            onChange={handleImageChange}
          />
          {errors.image?.map((message, index) => (
            <Alert variant="warning" key={index}>{message}</Alert>
          ))}
        </Form.Group>

        {/* Image Preview */}
        {previewImage && (
          <div className="mb-3">
            <Image src={previewImage} roundedCircle width={150} height={150} alt="Profile Preview" />
          </div>
        )}

        {/* General Errors */}
        {errors.non_field_errors?.map((message, index) => (
          <Alert variant="warning" key={index}>{message}</Alert>
        ))}

        <Button variant="primary" type="submit">
          Save Profile
        </Button>
      </Form>
    </Container>
  );
}
