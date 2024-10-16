import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Alert } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";

export default function Login({ onLoginSuccess }) {
  // Get the login function from the context
  const { email, password } = loginData;
  // Get the user, login function, and error from the context
  const { user, login, error } = useContext(UserContext);

  // Get the navigate function from the router
  const navigate = useNavigate();

  // Local state to store the login data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Local state to store the error
  const [err, setErr] = useState(null);

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
    // Attempt to log in
    try {
      await login(loginData);
      onLoginSuccess();
      navigate("/");
      // Handle errors
    } catch (err) {
      const errorData = err.response?.data || {
        non_field_errors: ["An error occurred. Please try again."],
      };
      setErr(errorData);
    }
  };

  // Render error messages
  if (error) return <p>{error}</p>;
  // Render error messages
  if (err) return <p>{err}</p>;

  // Render the login form
  return (
    <Container className="d-flex flex-column align-items-center pt-4">
      <h1 className="mb-4">Login</h1>
      <Form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "400px" }}
      >
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

        {error?.email?.map((message, index) => (
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
            required
          />
        </Form.Group>

        {error?.password?.map((message, index) => (
          <Alert variant="warning" key={index}>
            {message}
          </Alert>
        ))}

        {error?.non_field_errors?.map((message, index) => (
          <Alert variant="danger" key={index}>
            {message}
          </Alert>
        ))}

        <Button className="w-100 mt-3 mb-3" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}
