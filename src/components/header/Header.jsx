import styles from "./Header.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Logout from "../../pages/auth/Logout";
import logo from "../../assets/images/logo.png";
import logomin from "../../assets/images/logo-min.png";

export default function Header() {
  // Get the user profile and loading state from the context
  const { loading, profile } = useContext(UserContext);

  // Define the state variables for the dropdown, and mobile menu
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Get the navigate function from the router
  const navigate = useNavigate();

  // Define the functions to show and hide the login modal, dropdown, and mobile menu

  const handleCloseMobileMenu = () => setShowMobileMenu(false);
  const handleShowMobileMenu = () => setShowMobileMenu(true);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  // Define the function to handle the form submission for Suche
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
                src={logomin}
                alt="Session Minds Logo"
                className="logo"
                width={50}
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
                  id="dropdown-basic"
                  as="span"
                  role="button"
                  className={`${styles.dropdownToggleWithoutCaret}`}
                >
                  <Image
                    src={profile.image}
                    width={50}
                    className="rounded-circle"
                    alt={profile.first_name + " " + profile.last_name}
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
                        <InputGroup.Text
                          as="button"
                          type="submit"
                          aria-label="Search"
                        >
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
                  <Link className={`${styles["nav-link"]}`} to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className={`${styles["nav-link"]}`} to="/regist">
                    Regist
                  </Link>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      as="span"
                      role="button"
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
    </>
  );
}
