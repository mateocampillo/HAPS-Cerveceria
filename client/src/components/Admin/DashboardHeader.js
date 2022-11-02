import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

function DashboardHeader () {

    return (
        <Navbar expand="lg" bg="primary" variant="white" className='mb-3'>
          <Container>
            <Navbar.Brand href="/" className='text-white'><strong>ADMIN DASHBOARD</strong></Navbar.Brand>
            <button className='ms-xl-5 bg-dark text-light rounded'>Cerrar sesion</button>
          </Container>
        </Navbar>
    )

}

export default DashboardHeader;