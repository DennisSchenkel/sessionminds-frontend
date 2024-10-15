import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import { Alert } from "react-bootstrap";

import axios from "../../api/axiosDefault";

export default function Login ( )   {

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const [loginData, setLoginData] = useState(
    {
      email: "",
      password: "",
    }
  );
  
  const { setUser } = useContext(UserContext);
  const { email, password } = loginData;
  const [error, setError] = useState({});

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/login/", loginData);
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      localStorage.setItem("user_id", response.data.user_id);
      setUser(response.data);
      navigate("/");
    }
    catch (error) {
      setError(error.response?.data)
      if (error.response) {
        setError(error.response.data);
      } else if (error.request) {
        setError({ non_field_errors: ["Connection error. Please try again."] });
      }

    }
  }

  return (
    <>
      <Container className="d-flex flex-column align-items-center pt-4">
        <h1 className="text-center mb-4">Login</h1>

        <Form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
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

          {error.email?.map((message, index) => (
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

          {error.password?.map((message, index) => (
            <Alert variant="warning" key={index}>
              {message}
            </Alert>
          ))}

          {error.non_field_errors?.map((message, index) => (
            <Alert variant="danger" key={index}>
              {message}
            </Alert>
          ))}

          <Button className="w-100 mt-3" type="submit">
            Login
          </Button>
        </Form>

        <Link className="mt-3" to="/regist">
          Not registered? <span>Signup now!</span>
        </Link>
      </Container>

    </>
  );
}
