import styles from "./Header.module.css";
import { Form, Button, Image, Dropdown, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logout from "../../pages/auth/Logout";
import logo from "../../assets/images/logo.svg";

export default function Header() {

  const { loading, profile } = useContext(UserContext);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleCloseMobileMenu = () => {
    setShowMobileMenu(false);
  };
  
  const handleShowMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  if (loading) {
      return <p>Loading...</p>;
  }

  return (
    <>
      <div className={`${styles.header} px-4`}>
        <div className="row d-flex align-items-center g-0">

          <div className="col-3 g-0">
            <Image src={logo} alt="Session Minds Logo" />
          </div>

          <div className="col-6 d-none d-sm-block">
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

          <div className="col-6 d-block d-sm-none text-center">
            <Button variant="" onClick={handleShowMobileMenu}>
              <FontAwesomeIcon icon={faBars} className="fa-2x" />
            </Button>
          </div>

          <div className="col-3 text-end">
            {profile ? 
            <>
              <Dropdown
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                show={showDropdown}
              >
                <Dropdown.Toggle variant="none" id="dropdown-basic" as="span" className={`${styles.dropdownToggleWithoutCaret}`}>
                  <Image 
                    src={profile.image}
                    width={50}
                    className="rounded-circle"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu 
                  className={`${styles["dropdownmenu"]}`} 
                  align={ "end" }
                >
                  <Form>
                    <Form.Group>
                      <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Search here.."
                            aria-label="Search"
                        />
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                  </Form>
                  <Dropdown.Item href="/editor" className={`${styles.dropdownmenuitem}`}>Add Tool</Dropdown.Item>
                  <Dropdown.Item href={`/profile/${profile.slug}`} className={`${styles.dropdownmenuitem} pb-1`}>Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className={`${styles.dropdownmenulogout}`}>
                    <Logout />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
            : 
            <>
              <ul className="nav justify-content-end">
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
      <Offcanvas show={showMobileMenu} onHide={handleCloseMobileMenu}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Session Minds Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ul className="list-unstyled justify-content-center">
              <li>
                <Link className={`${styles["nav-link"]}`} to="/" onClick={handleCloseMobileMenu}>Home</Link>
              </li>
              <li>
                <Link className={`${styles["nav-link"]}`} to="/tools" onClick={handleCloseMobileMenu}>Tools</Link>
              </li>
              <li>
                <Link className={`${styles["nav-link"]}`} to="/topics" onClick={handleCloseMobileMenu}>Topics</Link>
              </li>
              <li>
                <Link className={`${styles["nav-link"]}`} to="/contributors" onClick={handleCloseMobileMenu}>Contributors</Link>
              </li>
            </ul>
        </Offcanvas.Body>
    </Offcanvas>
    </>
  )
}