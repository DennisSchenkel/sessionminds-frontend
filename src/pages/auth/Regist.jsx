import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";


import styles from "../../assets/styles/LoginReg.module.css";
import btnStyles from "../../assets/styles/Button.module.css";
import appStyles from "../../App.module.css";

import axios from "../../api/axiosDefault";

const Regist = () => {

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const [regData, setRegData] = useState(
    {
      email: "",
      password: "",
      passwordConf: ""
    }
  );

  const { email, password, passwordConf } = regData;
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setRegData({
      ...regData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/register/", regData)
        .then((response) => {
          navigate("/login", { 
              state: { 
                  message: `Account created for ${response.data.email}. Please log in.`, 
                  variant: "success"
              }
          });
          }
      );
    } catch (error) {
        if (error.response) {
          setErrors(error.response.data);
      }
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Register</h1>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="d-none">Email</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  />
              </Form.Group>                 
              
              {errors.email?.map((message, index) => (
                <Alert variant="warning" key={index}>{message}</Alert>
              ))
              }
              
              <Form.Group className="mb-3" controlId="password">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  />
              </Form.Group>
              {errors.password?.map((message, index) => (
                <Alert variant="warning" key={index}>{message}</Alert>
              ))
              }

              <Form.Group className="mb-3" controlId="passwordConf">
                <Form.Label className="d-none">Password Confirmation</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="password"
                  placeholder="Password Confirmation"
                  name="passwordConf"
                  value={passwordConf}
                  onChange={handleChange}
                  />
              </Form.Group>
              {errors.passwordConf?.map((message, index) => (
                <Alert variant="warning" key={index}>{message}</Alert>
              ))
              }

              {errors.non_field_errors?.map((message, index) => (
                <Alert variant="warning" key={index}>{message}</Alert>
              ))
              }
              <Button 
                className={ `${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}` }
                variant="primary"
                type="submit"
                >
                Submit registration
              </Button>
            </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/login">
            Already registered? <span>Login</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
      </Col>
    </Row>
  );
};

export default Regist;