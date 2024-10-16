import styles from "./Header.module.css";
import {
  Form,
  Button,
  Image,
  Dropdown,
  InputGroup,
  NavItem,
  Offcanvas,
  Modal,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logout from "../../pages/auth/Logout";
import Login from "../../pages/auth/Login";
import logo from "../../assets/images/logo.svg";
import favicon from "../../assets/images/favicon.svg";

export default function Header() {
  // Get the user profile and loading state from the context
  const { loading, profile } = useContext(UserContext);

  // Define the state variables for the login modal, dropdown, and mobile menu
  const [showLogin, setShowLogin] = useState(false);
  // Define the state variables for the login modal, dropdown, and mobile menu
  const [showDropdown, setShowDropdown] = useState(false);
  // Define the state variables for the login modal, dropdown, and mobile menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // Define the state variable for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Get the navigate function from the router
  const navigate = useNavigate();

  // Define the functions to show and hide the login modal, dropdown, and mobile menu
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  // Define the functions to show and hide the login modal, dropdown, and mobile menu
  const handleCloseMobileMenu = () => setShowMobileMenu(false);
  const handleShowMobileMenu = () => setShowMobileMenu(true);

  // Define the functions to show and hide the login modal, dropdown, and mobile menu
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  // Define the function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const currentSearchTerm = event.target.elements.search.value;
    setSearchTerm(currentSearchTerm);
    navigate(`/search/${currentSearchTerm}`);
  };

  // Show a loading message while the profile is being loaded
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render the header with the profile data
  return (
    <>
      <div className={`${styles.header} px-4`}>
        <div className="row d-flex align-items-center g-0">
          <div className="col-3 g-0 d-none d-md-block">
            <Link to="/">
              <Image
                src={logo}
                alt="Session Minds Logo"
                className="logo"
                width={200}
              />
            </Link>
          </div>
          <div className="col-3 g-0 d-block d-md-none">
            <Link to="/">
              <Image
                src={favicon}
                alt="Session Minds Logo"
                className="logo"
                width={60}
              />
            </Link>
          </div>

          <div className="col-6 d-none d-sm-block">
            <ul className="nav justify-content-center">
              <li>
                <Link className={`${styles["nav-link"]}`} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={`${styles["nav-link"]}`} to="/tools">
                  Tools
                </Link>
              </li>
              <li>
                <Link className={`${styles["nav-link"]}`} to="/topics">
                  Topics
                </Link>
              </li>
              <li>
                <Link className={`${styles["nav-link"]}`} to="/contributors">
                  Contributors
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 d-block d-sm-none text-center">
            <Button variant="" onClick={handleShowMobileMenu}>
              <FontAwesomeIcon icon={faBars} className="fa-2x" />
            </Button>
          </div>

          <div className="col-3 text-end">
            {profile ? (
              <Dropdown
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                show={showDropdown}
              >
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  as="span"
                  className={`${styles.dropdownToggleWithoutCaret}`}
                >
                  <Image
                    src={profile.image}
                    width={50}
                    className="rounded-circle"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu
                  className={`${styles["dropdownmenu"]}`}
                  align="end"
                >
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder="Search here.."
                          aria-label="Search"
                          name="search"
                          value={searchTerm}
                          onChange={(event) =>
                            setSearchTerm(event.target.value)
                          }
                        />
                        <InputGroup.Text as="button" type="submit">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                  </Form>
                  <Dropdown.Item
                    href="/editor"
                    className={`${styles.dropdownmenuitem}`}
                  >
                    Add Tool
                  </Dropdown.Item>
                  <Dropdown.Item
                    href={`/profile/${profile.slug}`}
                    className={`${styles.dropdownmenuitem} pb-1`}
                  >
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className={`${styles.dropdownmenulogout}`}>
                    <Logout />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <ul className="nav justify-content-end">
                <li>
                  <NavItem
                    className={`${styles["nav-link"]}`}
                    style={{ cursor: "pointer" }}
                    onClick={handleShowLogin}
                  >
                    Login
                  </NavItem>
                </li>
                <li>
                  <Link className={`${styles["nav-link"]}`} to="/regist">
                    Regist
                  </Link>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="none"
                      id="dropdown-basic"
                      className={`${styles.dropdownToggleWithoutCaret}`}
                    >
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={`${styles["dropdownsearch"]}`}>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group>
                          <InputGroup>
                            <Form.Control
                              type="text"
                              placeholder="Search here.."
                              aria-label="Search"
                              name="search"
                              value={searchTerm}
                              onChange={(event) =>
                                setSearchTerm(event.target.value)
                              }
                            />
                            <InputGroup.Text as="button" type="submit">
                              <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </InputGroup.Text>
                          </InputGroup>
                        </Form.Group>
                      </Form>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <Offcanvas show={showMobileMenu} onHide={handleCloseMobileMenu}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Session Minds Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled justify-content-center">
            <li>
              <Link
                className={`${styles["nav-link"]}`}
                to="/"
                onClick={handleCloseMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${styles["nav-link"]}`}
                to="/tools"
                onClick={handleCloseMobileMenu}
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                className={`${styles["nav-link"]}`}
                to="/topics"
                onClick={handleCloseMobileMenu}
              >
                Topics
              </Link>
            </li>
            <li>
              <Link
                className={`${styles["nav-link"]}`}
                to="/contributors"
                onClick={handleCloseMobileMenu}
              >
                Contributors
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login onLoginSuccess={handleCloseLogin} />
        </Modal.Body>
        <Modal.Footer>
          <Link to="/regist">
            Not registered? <span>Signup now!</span>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
