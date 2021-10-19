import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          <Navbar.Brand className="brand" as={Link} to="/home">
            HEALTH-CARE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/service">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              
            </Nav>
            <Nav>
              <Navbar.Text>
                Signed in as:- <a href="#login">{user?.email}</a>
              </Navbar.Text>
              {user?.email ? (
                <Nav.Link
                  onClick={logout}
                  as={Link}
                  to="/login"
                >
                  Logut
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
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
