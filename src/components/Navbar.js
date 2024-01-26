import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";
import { useEffect } from "react";
const Navigation = () => {
  return (
    <div className="navigation">
      <Navbar className="navbar" id="navbar">
        <Container>
          <Navbar.Brand className="navbar_brand d-flex" href="#home">
            <span>Portfolio</span>
            <p>Radhia Rahmani</p>
          </Navbar.Brand>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className=" d-flex justify-content-center  "
          >
            <Nav className="nav ">
              <Nav.Link className=" navLink " href="#home">
                Home
              </Nav.Link>
              <Nav.Link className=" navLink " href="#about">
                About
              </Nav.Link>
              <Nav.Link className="navLink" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="navLink" href="#certificates">
                Certificates
              </Nav.Link>
              <Nav.Link className="navLink" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="navLink" href="#courses">
                Courses
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
