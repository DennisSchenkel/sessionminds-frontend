import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container, Image } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "../../api/axiosDefault";

export default function ProfileEditor() {
  // Get the user, profile, and updateProfile functions from the context
  const { user, profile: userProfile, updateProfile } = useContext(UserContext);

  // Local state to store the profile data
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

  // Local state to store the image preview
  const [previewImage, setPreviewImage] = useState(null);

  // Get the navigate function from the router
  const navigate = useNavigate();

  // Local state to store the errors
  const [errors, setErrors] = useState({});

  // Set the profile data when the userProfile changes
  useEffect(() => {
    if (userProfile) {
      setProfileData({
        first_name: userProfile.first_name || "",
        last_name: userProfile.last_name || "",
        job_title: userProfile.job_title || "",
        profile_description: userProfile.profile_description || "",
        linkedin: userProfile.linkedin || "",
        twitter: userProfile.twitter || "",
        facebook: userProfile.facebook || "",
        instagram: userProfile.instagram || "",
        image: null,
      });
      if (userProfile.image) {
        setPreviewImage(userProfile.image);
      }
    }
  }, [userProfile]);

  // Handle the change in the profile input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle the change in the image input
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // Check if a file was selected
    if (file) {
      const validTypes = ["image/jpg", "image/jpeg", "image/png"];
      // Check if the image file is a valid format
      if (!validTypes.includes(file.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: ["Image file is not a valid format! (jpg, jpeg, png)"],
        }));
        return;
      }
      // Check if the image file is too large
      if (file.size > 2 * 1024 * 1024) {
        // 2MB
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: ["Image file is too large! (max 2MB)"],
        }));
        return;
      }

      // Set the image file and preview
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

  // Validate the image file
  const validateImage = (file) => {
    const validTypes = ["image/jpg", "image/jpeg", "image/png"];
    // Check if the image file is a valid format
    if (!validTypes.includes(file.type)) {
      return "Image file is not a valid format! (jpg, jpeg, png)";
    }
    // Check if the image file is too large
    if (file.size > 2 * 1024 * 1024) {
      // 2MB
      return "Image file is too large! (max 2MB)";
    }
    return null;
  };

  // Handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object
    const formData = new FormData();
    formData.append("first_name", profileData.first_name);
    formData.append("last_name", profileData.last_name);
    formData.append("job_title", profileData.job_title);
    formData.append("profile_description", profileData.profile_description);
    formData.append("linkedin", profileData.linkedin);
    formData.append("twitter", profileData.twitter);
    formData.append("facebook", profileData.facebook);
    formData.append("instagram", profileData.instagram);

    // Check if an image was uploaded
    if (profileData.image) {
      const imageError = validateImage(profileData.image);
      // Check if there is an error with the image
      if (imageError) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: [imageError],
        }));
        return;
      }
      formData.append("image", profileData.image);
    }

    // Attempt to update the profile
    try {
      await updateProfile(formData);
      const response = await axios.get(`/users/${user.id}/profile/`);
      const newSlug = response.data.slug;
      navigate(`/profile/${newSlug}`, {
        state: {
          message: `The profile of ${profileData.first_name} was successfully updated!`,
          variant: "success",
        },
      });
      // Handle errors
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        setErrors({ non_field_errors: ["An unexpected error occurred."] });
      }
      setErrors({ non_field_errors: ["An unexpected error occurred."] });
    }
  };

  // Render the profile editor form
  return (
    <Container className="my-5">
      <h2>Edit Your Profile</h2>
      <Form onSubmit={handleSubmit}>
        {/* First Name */}
        <Form.Group className="mb-3" controlId="first_name">
          <Form.Label>
            First Name (Required for participaring in the community)
          </Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={profileData.first_name}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
          {errors.first_name?.map((message, index) => (
            <Alert variant="warning" key={index}>
              {message}
            </Alert>
          ))}
        </Form.Group>

        {/* Last Name */}
        <Form.Group className="mb-3" controlId="last_name">
          <Form.Label>
            Last Name (Required for participaring in the community)
          </Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={profileData.last_name}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
          {errors.last_name?.map((message, index) => (
            <Alert variant="warning" key={index}>
              {message}
            </Alert>
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
            <Alert variant="warning" key={index}>
              {message}
            </Alert>
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
            <Alert variant="warning" key={index}>
              {message}
            </Alert>
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
            <Alert variant="warning" key={index}>
              {message}
            </Alert>
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
            <Alert variant="warning" key={index}>
              {message}
            </Alert>
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
            <Alert variant="warning" key={index}>
              {message}
            </Alert>
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
            <Alert variant="warning" key={index}>
              {message}
            </Alert>
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
            <Alert variant="warning" key={index}>
              {message}
            </Alert>
          ))}
        </Form.Group>

        {/* Image Preview */}
        {previewImage && (
          <div className="mb-3">
            <Image
              src={previewImage}
              roundedCircle
              width={150}
              height={150}
              alt="Profile Preview"
            />
          </div>
        )}

        {/* General Errors */}
        {errors.non_field_errors?.map((message, index) => (
          <Alert variant="warning" key={index}>
            {message}
          </Alert>
        ))}

        <Button variant="primary" type="submit">
          Save Profile
        </Button>
      </Form>
    </Container>
  );
}
