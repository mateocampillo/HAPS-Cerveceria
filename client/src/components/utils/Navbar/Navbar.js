import React from 'react';

function Navbar() {

    return (
        <header className='bg-transparent position-absolute' id='header'>
            <div className='d-flex position-relative justify-content-around align-items-center mt-5 text-center'>
                <div id='container-header-botonMenu' className='dropdown'>
                    <button className='bg-transparent border border-0 p-3' data-bs-toggle="dropdown" data-bs-offset="10,20"><i className="fa-solid fa-bars fa-2x navbar-icono-svg"></i></button>
                    <ul className='dropdown-menu container-fluid' id='dropdown-menu'>
                        <li><a className='dropdown-item' href='/'>Cervezas</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a className='dropdown-item' href='/'>Bar</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a className='dropdown-item' href='/'>Nosotros</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a className='dropdown-item' href='/'>Contacto</a></li>
                    </ul>
                </div>
                <div id='container-header-navLinks'>
                    <ul className='d-flex' id='header-ul'>
                        <li className=''><a className='text-center' href='/'>Cervezas</a></li>
                        <li className=''><a href='/'>Bar</a></li>
                    </ul>
                </div>
                <div>
                    <a href='/' className='mh-25'><img src='/img/logo-placeholder.png' alt='logo' className='img-fluid'/></a>
                </div>
                <div id='container-header-navLinks2'>
                    <ul className='d-flex' id='header-ul'>
                        <li className=''><a href='/'>Nosotros</a></li>
                        <li className=''><a href='/'>Contacto</a></li>
                    </ul>
                </div>
                <div>
                    <button className='bg-transparent border border-0 p-3'><i className="fa-solid fa-cart-shopping fa-2x navbar-icono-svg"></i></button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;