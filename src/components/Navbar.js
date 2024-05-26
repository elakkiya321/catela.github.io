import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../assets/styles.css';
import Leaf from '../assets/images/leaf.svg';

const NavbarCompo = () => {
  return (
    <Navbar expand="lg" className="header-nav">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src={Leaf} alt="logo" width={50} className="logo-brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Corporate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Weddings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Social Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Parties</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link href="#call">call us - 1800 - 123 456 789 </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCompo;
