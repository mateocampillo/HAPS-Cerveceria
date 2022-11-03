import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

function DashboardHeader () {

    return (
        <Navbar expand="lg" bg="primary" variant="white" className='mb-3'>
          <Container>
            <Navbar.Brand href="/" className='text-white'><strong>Home Page</strong></Navbar.Brand>
            <h3 className='text-white fs-4'><strong>ADMIN DASHBOARD</strong></h3>
            <button className='ms-xl-5 bg-dark text-light rounded' id='boton-cerrar-sesion'>Cerrar sesion</button>
          </Container>
        </Navbar>
    )

}

export default DashboardHeader;