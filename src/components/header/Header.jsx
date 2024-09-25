import styles from "./Header.module.css";
import { Form, Button, Image, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Logout from "../../pages/auth/Logout";
import logo from "../../assets/images/logo.svg";

export default function Header() {

    const { loading, profile } = useContext(UserContext);

    const [showDropdown, setShowDropdown] = useState(false);

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
              <Image src={logo} alt="Logo" />
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
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        id="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-secondary">Search</Button>
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
      </>
    )
    }