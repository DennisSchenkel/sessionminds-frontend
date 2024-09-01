import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Col, Form, Image, Row } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";

import styles from "../../assets/styles/LoginReg.module.css";
import btnStyles from "../../assets/styles/Button.module.css";
import appStyles from "../../App.module.css";

import axios from "../../api/axiosDefault";

export default function Login ( )   {
   
  const [loginData, setLoginData] = useState(
    {
      email: "",
      password: "",
    }
  );
  
  // const [errors, setErrors] = useState({});

  const { email, password } = loginData;

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Login submitted");                 // For debugging
    console.log(loginData);
    try {
      const response = await axios.post("/login/", loginData);
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("user_id", response.data.user_id);
      setUser(response.data);
      console.log(response.data.user_id);
      navigate("/");
    }
    catch (error) {
     // setErrors(err.response?.data)
      if (error.response) {
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
        // Optionally, set error state to display the error message in the UI
        // setErrors(error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      }

    }
  }


  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Login</h1>

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
              
              {// errors.email?.map((message, index) => (
              //  <Alert variant="warning" key={index}>{message}</Alert>
              //))
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
              {//errors.password1?.map((message, index) => (
              //  <Alert variant="warning" key={index}>{message}</Alert>
              //))
              }

              <Button 
                className={ `${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}` }
                variant="primary"
                type="submit"
                >
                Login
              </Button>
            </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/login">
            Not registered? <span>Signup now!</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero.jpg"
          }
        />
      </Col>
    </Row>
  );


}
