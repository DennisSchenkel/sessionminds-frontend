import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { UserContext } from "../../context/UserContext";

import axios from "../../api/axiosDefault";

// The registration page
const Regist = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // Redirect to the home page if the user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Local state to store the registration data
  const [regData, setRegData] = useState({
    email: "",
    password: "",
    passwordConf: "",
  });

  // Destructure the registration data
  const { email, password, passwordConf } = regData;

  // Local state to store the errors
  const [errors, setErrors] = useState({});

  // Handle the change in the registration input
  const handleChange = (event) => {
    setRegData({
      ...regData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Attempt to register
    try {
      await axios.post("/register/", regData).then((response) => {
        navigate("/login", {
          state: {
            message: `Account created for ${response.data.email}. Please log in.`,
            variant: "success",
          },
        });
      });
      // Handle errors
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data);
      }
    }
  };

  // Render the registration form
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center pt-4">
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <h1 className="text-center mb-4">Register</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="d-none">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Form.Group>

          {errors.email?.map((message, index) => (
            <Alert variant="warning" key={index}>
              {message}
            </Alert>
          ))}

          <Form.Group className="mb-3" controlId="password">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Form.Group>

          {errors.password?.map((message, index) => (
            <Alert variant="warning" key={index}>
              {message}
            </Alert>
          ))}

          <Form.Group className="mb-3" controlId="passwordConf">
            <Form.Label className="d-none">Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password Confirmation"
              name="passwordConf"
              value={passwordConf}
              onChange={handleChange}
            />
          </Form.Group>

          {errors.passwordConf?.map((message, index) => (
            <Alert variant="warning" key={index}>
              {message}
            </Alert>
          ))}

          {errors.non_field_errors?.map((message, index) => (
            <Alert variant="danger" key={index}>
              {message}
            </Alert>
          ))}

          <Button className="w-100 mt-3" variant="primary" type="submit">
            Submit Registration
          </Button>
        </Form>

        <div className="text-center mt-3">
          <Link to="/login" className="text-decoration-none">
            Already registered? <span className="text-primary">Login</span>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Regist;
