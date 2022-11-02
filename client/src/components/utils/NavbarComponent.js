import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavbarComponent() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="white">
          <Container>
            <Navbar.Brand href="/"><strong>HAPS</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='ms-xl-5'>
              <Nav className="me-auto">
                <Nav.Link href="/cervezas">Nuestras Cervezas</Nav.Link>
                <Nav.Link href="/nosotros">Nosotros</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
};

export default NavbarComponent;
