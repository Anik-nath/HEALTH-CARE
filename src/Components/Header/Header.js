import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#12accb" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="brand" as={HashLink} to="/home">
            MEDI-CARE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={HashLink} to="/service">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/contact">
                Contact
              </Nav.Link>
              
            </Nav>
            <Nav>
              <Navbar.Text>
              <img style={{width:"15%",borderRadius:"50%",marginRight:"5px"}} src={user.photoURL} alt="" />
                <a as={HashLink} href="#login">{user?.displayName}</a>
              </Navbar.Text>
              {user?.email ? (
                <Nav.Link
                  onClick={logout}
                  as={HashLink}
                  to="/login"
                >
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={HashLink} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
