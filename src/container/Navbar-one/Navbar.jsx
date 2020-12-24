import React, { Component } from "react";
import { Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar" expand="lg">
          <NavbarBrand className="ml-3" id="logo">
            Galihhhp
          </NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle-button" />
          <NavbarCollapse id="responsive-navbar-nav" >
            <Nav>
              <NavLink>
                <p className=" mx-3">About</p>
              </NavLink>
              <NavLink>
                <p className="mx-3">Personal Project</p>
              </NavLink>
              <NavLink>
                <p className="mx-3">Portofolio</p>
              </NavLink>
            </Nav>
            <Nav className="ml-auto hire-button">
              <NavLink>
                <p className="mx-3">Hire Me!</p>
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Navbar>

        {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
      </div>
    );
  }
}

export default NavbarComponent;
