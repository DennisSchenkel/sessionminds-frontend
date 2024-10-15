import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Alert } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";

export default function Login({ onLoginSuccess }) {
  const { user, login, error } = useContext(UserContext);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(loginData);
      onLoginSuccess();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center pt-4">
 
      <Form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
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

        <Button className="w-100 mt-3" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}
