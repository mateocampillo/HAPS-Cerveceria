import React from 'react';
import HomeCarousel from './HomeCarousel';
import HomeSomosCaps from './HomeSomosCaps';
import HomeSwiperCervezas from './HomeSwiperCervezas';
import Navbar from '../utils/Navbar';
import Footer from '../utils/Footer';

function HomeContainer() {

    return (
        <div className='position-relative'>
            <Navbar />
            <main>
                <HomeCarousel />
                <HomeSomosCaps />
                <HomeSwiperCervezas />
            </main>
            <Footer />
        </div>
    )
}

export default HomeContainer;