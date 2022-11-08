import React from 'react';
import HomeCarousel from './HomeCarousel';
import HomeSomosCaps from './HomeSomosCaps';
import HomeSwiperCervezas from './HomeSwiperCervezas';
import Navbar from '../utils/Navbar/Navbar';

function HomeContainer() {

    return (
        <div className='position-relative'>
            <Navbar />
            <main>
                <HomeCarousel />
                <HomeSomosCaps />
                <HomeSwiperCervezas />
            </main>
        </div>
    )
}

export default HomeContainer;