import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg=""
      variant="white"
      className=" transparent shadow-lg bg-warning"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-white fs-5">
            <Link
              to="/allServices"
              className="text-light px-2 fw-semibold text-decoration-none"
            >
              Services
            </Link>
            <Link
              to="/login"
              className="text-light px-2 fw-semibold text-decoration-none"
            >
              Login
            </Link>
            <Link
              to="/blog"
              className="text-light px-2 fw-semibold text-decoration-none"
            >
              Blog
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
