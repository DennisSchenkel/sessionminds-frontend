import styles from "./Header.module.css";
import { Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import logo from "../../assets/images/logo.svg";


export default function Header() {

    const logoutUser = () => {
        // Clear the token and user ID from localStorage
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user_id");
      
        // If the UserContext is available, clear the user and profile
        if (window.UserContext) {
          window.UserContext.setUser(null);
          window.UserContext.setProfile(null);
        }
      
        // Redirect to the login page
        window.location.href = "/";
      };
    

    const { loading, user, profile } = useContext(UserContext);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
      <>
        <div className={`${styles.header} px-4`}>
          <div className="row d-flex align-items-center g-0">

            <div className="row col-3 g-0">
              <div className="col-4">
                <Image src={logo} alt="Logo" />
              </div>
              <div className="col-8 d-flex align-items-center">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-secondary">Search</Button>
                </Form>
              </div>
            </div>
            <div className="col-6">

              <ul className="nav justify-content-center">
                <li>
                  <Link className={`${styles["nav-link"]}`} to="/">Home</Link>
                </li>
                <li>
                  <Link className={`${styles["nav-link"]}`} to="/tools">Tools</Link>
                </li>
                <li>
                  <Link className={`${styles["nav-link"]}`} to="/topics">Topics</Link>
                </li>
                <li>
                  <Link className={`${styles["nav-link"]}`} to="/contributors">Contributors</Link>
                </li>
              </ul>
            </div>
            <div className="col-3 text-end">
              {profile ? <Image src={profile.image} width={40} /> : <></>}
              {user ? <Link to="/editor">Add Tool</Link> : <></>}
              {user ? <><p>Welcome, {user.id}</p><button onClick={logoutUser}>Logout</button></> : 
              <>
                <ul className="nav justify-content-center">
                  <li>
                      <Link className={`${styles["nav-link"]}`}  to="/login">Login</Link>
                  </li>
                  <li>
                    <Link className={`${styles["nav-link"]}`}  to="/regist">Regist</Link>
                  </li>
                </ul>
              </>
              }
            </div>
          </div>
        </div>
      </>
    )
    }