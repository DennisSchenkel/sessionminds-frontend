import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  // Get the user, login function, and error from the context
  const { user, login, error: contextError } = useContext(UserContext);

  // Get the navigate function from the router
  const navigate = useNavigate();

  // Local state to store the login data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Destructure email and password from loginData
  const { email, password } = loginData;

  // Local state to store the error
  const [localError, setLocalError] = useState(null);

  // Redirect to the home page if the user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Handle the change in the login input
  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(loginData);
    } catch (err) {
      const errorData = err.response?.data || {
        non_field_errors: ["An error occurred. Please try again."],
      };
      setLocalError(errorData);
    }
  };

  // Combine contextError and localError for display
  const combinedErrors = { ...contextError, ...localError };

  // Function to render error messages
  const renderErrors = () => {
    if (!combinedErrors) return null;

    const errorElements = [];

    // Iterate over each key in the error object
    Object.keys(combinedErrors).forEach((key) => {
      const messages = combinedErrors[key];
      if (Array.isArray(messages)) {
        messages.forEach((message, index) => {
          const variant = key === "non_field_errors" ? "danger" : "warning";
          errorElements.push(
            <Alert variant={variant} key={`${key}-${index}`}>
              {message}
            </Alert>
          );
        });
      } else if (typeof messages === "string") {
        errorElements.push(
          <Alert variant="warning" key={key}>
            {messages}
          </Alert>
        );
      }
    });

    return errorElements;
  };

  // Render the login form
  return (
    <Container className="d-flex flex-column align-items-center pt-4">
      <h1 className="mb-4">Login</h1>
      <Form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        {/* Render combined error messages at the top */}
        {renderErrors()}

        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="d-none">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="d-none">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button className="w-100 mt-3 mb-3" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}
