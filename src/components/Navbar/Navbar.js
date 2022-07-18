import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">Fahad.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto NavMenu">
              <Nav.Link className="Menu" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="Menu" href="/expert">
                Expert In
              </Nav.Link>
              <Nav.Link className="Menu" href="/about">
                About Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
