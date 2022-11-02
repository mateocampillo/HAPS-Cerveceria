import React from 'react';
import NavbarComponent from './utils/NavbarComponent';
import FooterComponent from './utils/FooterComponent';
import MainContainerTarjetaDescripcion from './MainContainerTarjetaDescripcion';
import HrConSombra from './utils/HrConSombra';

function MainContainer() {

    return (
        <div>
            <NavbarComponent />
            <MainContainerTarjetaDescripcion />
            <HrConSombra />
            <FooterComponent />
        </div>
    )
}

export default MainContainer;