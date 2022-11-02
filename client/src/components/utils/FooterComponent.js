import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

function FooterComponent () {

    return (
      <footer>
        <Container className='mt-3'>
          <Row className='row-cols-1 row-cols-sm-2 row-cols-md-4'>
            <Col className='col-sm-3'><img alt='imagen del footer' src='/img/logo-placeholder.png' className='img-fluid min-width-200px w-75'></img></Col>
            <Col className='col-sm-3'>
              <h5>Sobre Nosotros</h5>
              <ul className='nav flex-column my-3'>
                <li className='nav-item mb-2'>
                  <a href='/' className='nav-link p-0 text-dark'>Enlace</a>
                </li>
                <li className='nav-item mb-2'>
                  <a href='/' className='nav-link p-0 text-dark'>Enlace</a>
                </li>
                <li className='nav-item mb-2'>
                  <a href='/' className='nav-link p-0 text-dark'>Enlace</a>
                </li>
                <li className='nav-item mb-2'>
                  <a href='/' className='nav-link p-0 text-dark'>Enlace</a>
                </li>
              </ul>
            </Col>
            <Col className='col-sm-3'>
              <h5>Sobre Nosotros</h5>
              <ul className='nav flex-column my-3'>
                <li className='nav-item mb-2'>
                  <a href='/' className='nav-link p-0 text-dark'>Enlace</a>
                </li>
                <li className='nav-item mb-2'>
                  <a href='/' className='nav-link p-0 text-dark'>Enlace</a>
                </li>
                <li className='nav-item mb-2'>
                  <a href='/' className='nav-link p-0 text-dark'>Enlace</a>
                </li>
                <li className='nav-item mb-2'>
                  <a href='/' className='nav-link p-0 text-dark'>Enlace</a>
                </li>
              </ul>
            </Col>
            <Col className='col-sm-3'>
              <h5>Sobre Nosotros</h5>
              <ul className='nav flex-column my-3'>
                <li className='nav-item mb-2'>
                  <a href='/' className='nav-link p-0 text-dark'>Enlace</a>
                </li>
                <li className='nav-item mb-2'>
                  <a href='/' className='nav-link p-0 text-dark'>Enlace</a>
                </li>
                <li className='nav-item mb-2'>
                  <a href='/' className='nav-link p-0 text-dark'>Enlace</a>
                </li>
                <li className='nav-item mb-2'>
                  <a href='/' className='nav-link p-0 text-dark'>Enlace</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <p className='text-muted mt-5'>2022. Todos los derechos reservados</p>
          </Row>
        </Container>
      </footer>
    )
}

export default FooterComponent;